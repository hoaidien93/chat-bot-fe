import { HStack, IconButton, Image, Text, chakra } from "@chakra-ui/react";
import { EChatType, TChatContent } from "./type";
import { useChatManager } from "../../hooks/useChatManager";
import { AiOutlinePauseCircle, AiOutlineReload } from "react-icons/ai";

type ChatItemProps = {
    item: TChatContent;
}
export const ChatItem: React.FC<ChatItemProps> = ({
    item
}) => {
    switch (item.type) {
        case EChatType.Bot:
            return <BotResponse content={item.content} parentId={item.parentId}/>
        case EChatType.User:
            return <UserMessage content={item.content} isCancel={item.isCancel} />
        case EChatType.Loading:
            return <Loading parentId={item.parentId}/>
        default:
            return null;
    }
}
type BotResponseProps = {
    content: string;
    parentId: string;
}
const BotResponse: React.FC<BotResponseProps> = ({
    content,
    parentId
}) => {
    const {
        regenerate
    } = useChatManager();
    return <HStack
        w="full"
        p={2}
        bg="white"
        textAlign="left"
        rounded="lg"
        alignItems="flex-start"
        className="bot-response"
    >
        <Image
            w="32px"
            h="32px"
            src="/images/bot.png"
        />
        <chakra.div
            pt="1"
            w="full"
            dangerouslySetInnerHTML={{ __html: content }}
        />
        <IconButton
            variant="outline"
            aria-label="Regenerate message"
            icon={<AiOutlineReload />}
            onClick={regenerate.bind(null, parentId)}
        />
    </HStack>
}

type UserMessageProps = {
    content: string;
    isCancel?: boolean;
}
const UserMessage: React.FC<UserMessageProps> = ({
    content,
    isCancel
}) => {
    return <HStack
        w="full"
        p={2}
        textAlign="left"
        alignItems="flex-start"
        className="bot-response"
    >
        <Image
            w="32px"
            h="32px"
            src="/images/user.png"
        />
        <Text
            pt="1"
            fontWeight="medium"
        >{content}</Text>
        {isCancel && <Text
            pt="6px"
            color="gray.500"
            fontSize="sm"
        >
            (Cancelled)
        </Text>}
    </HStack>
}

type LoadingProps = {
    parentId: string;
}
const Loading: React.FC<LoadingProps> = ({
    parentId
}) => {
    const { cancelGenerate } = useChatManager();
    return <HStack
        w="full"
        p={2}
        bg="white"
        justifyContent="space-between"
        rounded="lg"
    >
        <Image
            w="32px"
            h="32px"
            src="/images/loading.gif"
        />
        <IconButton
            onClick={cancelGenerate.bind(null, parentId)}
            variant="outline"
            aria-label="Send message"
            icon={<AiOutlinePauseCircle />}
        />
    </HStack>
}