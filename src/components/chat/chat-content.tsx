import { VStack } from "@chakra-ui/react";
import { TChatContent } from "./type";
import { Welcome } from "./welcome"
import { ChatItem } from "./chat-item";
import { ScrollStyles } from "./utils";
import React from "react";

type ChatContentProps = {
    conversation: TChatContent[];
}
export const ChatContent = React.forwardRef<HTMLDivElement, ChatContentProps>(({
    conversation
}, ref) => {
    return <VStack
        ref={ref}
        w="full"
        align="stretch"
        overflowY="auto"
        __css={ScrollStyles}
        paddingBottom={4}
    >
        {
            conversation.length === 0 && <Welcome />
        }
        {
            conversation.map((item) => <ChatItem
                key={item.id}
                item={item}
            />)
        }
    </VStack>
});