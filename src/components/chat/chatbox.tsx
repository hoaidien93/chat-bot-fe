import { VStack } from "@chakra-ui/react"
import { ChartInput } from "./chat-input"
import { ChatContent } from "./chat-content"
import React from "react"
import { EChatType, TChatContent, TUserChat } from "./type"
import { useAskApi } from "../../hooks/useAskApi"
import { ChatManagerContext } from "../../hooks/useChatManager"
import { nanoid } from "nanoid"
import { ClearModalWarning } from "./clear-modal"

type ChartBoxProps = {
    initialConversation: TChatContent[]
    onConversationUpdated: (conversation: TChatContent[]) => void
}
export const ChatBox: React.FC<ChartBoxProps> = ({
    initialConversation,
    onConversationUpdated
}) => {
    const abortController = React.useRef<AbortController>();
    const isAnswering = React.useRef(false);
    const [conversation, setConversation] = React.useState<TChatContent[]>(initialConversation);
    const ref = React.useRef<HTMLDivElement>(null);
    const scrollToBottom = React.useCallback(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, []);
    React.useEffect(() => {
        scrollToBottom();
    }, [scrollToBottom]);

    React.useEffect(() => {
        onConversationUpdated(conversation);
    }, [conversation, onConversationUpdated]);

    const { askApi } = useAskApi();
    const callAskApi = React.useCallback((message: string, userChatId: string) => {
        const controller = new AbortController();
        abortController.current = controller;
        isAnswering.current = true;
        askApi(message, controller.signal).then((response) => {
            setConversation((prev) => {
                const clone = [...prev];
                // Expected to have only one chat item
                const index = prev.findIndex(item => item.type === EChatType.Loading && item.parentId === userChatId);
                if (index === -1) return clone;
                // Remove last loading item
                clone.splice(index, 1, {
                    type: EChatType.Bot,
                    content: response,
                    id: nanoid(),
                    parentId: userChatId
                });
                return clone;
            })
        }).catch(() => {
            // Do nothing
        }).finally(() => {
            abortController.current = undefined;
            isAnswering.current = false;
        });
    }, [askApi]);
    const onSendMessage = React.useCallback((message: string) => {
        // Prevent user from sending message while bot is answering
        if (isAnswering.current) return;
        const userChatId = nanoid();
        setConversation((prev) => {
            return prev.concat([{
                type: EChatType.User,
                content: message,
                id: userChatId
            }, {
                type: EChatType.Loading,
                id: nanoid(),
                parentId: userChatId
            }])
        });
        // Scroll to bottom, Wait for DOM update
        setTimeout(() => {
            scrollToBottom();
        }, 30);
        callAskApi(message, userChatId)
    }, [askApi, scrollToBottom, callAskApi]);

    const onCancelGenerate = React.useCallback((chatId: string) => {
        if (abortController.current) {
            abortController.current.abort();
        }
        setConversation((prev) => {
            return prev.filter(item => !("parentId" in item) || item.parentId !== chatId).map((item) => {
                if (item.id === chatId) {
                    return {
                        ...item,
                        isCancel: true
                    }
                }
                return item;
            })
        });
        abortController.current = undefined;
        isAnswering.current = false;
    }, []);
    const onRegenerate = React.useCallback((chatId: string) => {
        setConversation((prev) => {
            // Expected to have only one chat item
            const index = prev.findIndex(item => item.type === EChatType.Bot && item.parentId === chatId);
            if (index === -1) return prev;
            const clone = [...prev];
            // Add loading item & remove bot item
            clone.splice(index, 1, {
                type: EChatType.Loading,
                id: nanoid(),
                parentId: chatId
            });
            return clone;
        });
        const message = (conversation.find(item => item.id === chatId && item.type === EChatType.User) as TUserChat).content;
        callAskApi(message, chatId);
    }, [conversation, callAskApi]);

    const chatManagerContext = React.useMemo(() => ({
        cancelGenerate: onCancelGenerate,
        regenerate: onRegenerate
    }), [onCancelGenerate, onRegenerate]);

    const [isClearModalOpen, setIsClearModalOpen] = React.useState(false);
    const onClearConversation = React.useCallback(() => {
        setIsClearModalOpen(true);
    }, []);
    const onCloseClearModal = React.useCallback(() => {
        setIsClearModalOpen(false);
    }, []);
    const onConfirmClearConversation = React.useCallback(() => {
        setIsClearModalOpen(false);
        setConversation([]);
    }, []);
    return <VStack
        w="full"
        h="100%"
        align="stretch"
        bg="#f3f6fc"
        justifyContent="space-between"
        alignItems="stretch"
        p={4}
        rounded="16px"
        spacing={4}
    >
        <ChatManagerContext.Provider value={chatManagerContext}>
            <ChatContent
                conversation={conversation}
                ref={ref}
            />
            <ChartInput
                onSubmit={onSendMessage}
                canSubmit={!isAnswering.current}
                canClear={conversation.length > 0 && !isAnswering.current}
                onClear={onClearConversation}
            />
        </ChatManagerContext.Provider>
        <ClearModalWarning 
            isOpen={isClearModalOpen}
            onClose={onCloseClearModal}
            onClear={onConfirmClearConversation}
        />
    </VStack>
}