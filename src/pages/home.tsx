import { Box } from "@chakra-ui/react";
import { ChatBox } from "../components/chat/chatbox";
import { useConversationStorage } from "../hooks/useConversationStorage";
import React from "react";
import { TChatContent } from "../components/chat/type";

export const HomePage: React.FC = () => {
    const {
        getConversation,
        setConversation
    } = useConversationStorage();
    const onUpdatedConversation = React.useCallback((conversation: TChatContent[]) => {
        setConversation(conversation);
    }, []);
    return (
        <Box w="full" h="100%" px={4}>
            <ChatBox 
                initialConversation={getConversation()}
                onConversationUpdated={onUpdatedConversation}
            />
        </Box>
    );
}