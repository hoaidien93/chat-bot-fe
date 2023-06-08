import { HStack, List, ListItem, chakra } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { BiHelpCircle } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import React from "react";
import { useMobileDetect } from "../hooks/useMobileSize";
type MenuProps = {
    isOpen: boolean;
}
export const Menu: React.FC<MenuProps> = ({
    isOpen,
}) => {
    const isMobile = useMobileDetect();
    const location = useLocation();
    const activeItem = React.useMemo(() => {
        if (location.pathname === "/help") {
            return "help";
        }
        if (location.pathname === "/") {
            return "conversation";
        }
        return "";
    }, [location]);

    return <List
        w="300px"
        maxW="70vw"
        spacing={2}
        display={isOpen ? "block" : "none"}
        position={isMobile ? "absolute" : "relative"}
        zIndex={200}
        bg="white"
        h="full"
    >
        <ListItem>
            <Link to="/">
                <HStack
                    fontWeight="semibold"
                    _hover={{
                        bg: "gray.100"
                    }}
                    p={2}
                    bg={activeItem === "conversation" ? "#b8ccfd !important" : undefined}
                    rounded="sm"
                >
                    <BsChatDots />
                    <chakra.span>Conversation</chakra.span>
                </HStack>
            </Link>
        </ListItem>

        <ListItem>
            <Link to="/help">
                <HStack
                    fontWeight="semibold"
                    _hover={{
                        bg: "gray.100"
                    }}
                    p={2}
                    bg={activeItem === "help" ? "#b8ccfd !important" : undefined}
                    rounded="sm"
                >
                    <BiHelpCircle />
                    <chakra.span>Help</chakra.span>
                </HStack>
            </Link>
        </ListItem>
    </List>
}