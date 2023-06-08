import { HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
export const HEADER_HEIGHT = 50;

type HeaderProps = {
    onToggleMenu: () => void;
}
export const Header: React.FC<HeaderProps> = ({
    onToggleMenu,
}) => {
    return <HStack
        h={HEADER_HEIGHT}
        px={4}
        py={3}
    >
        <IconButton
            onClick={onToggleMenu}
            variant="outline"
            aria-label="Send message"
            icon={<AiOutlineMenu />}
        />
        <Text fontSize="lg" fontWeight="medium">Chatbot</Text>
    </HStack>
}