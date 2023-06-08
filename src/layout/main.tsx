import { Box, HStack, VStack } from "@chakra-ui/react";
import { Menu } from "../components/menu";
import { HEADER_HEIGHT, Header } from "../components/header";
import React from "react";
import { useMobileDetect } from "../hooks/useMobileSize";
import { Overlay } from "../components/overlay";
import { useLocation } from "react-router-dom";

type MainLayoutProps = {
    children: React.ReactNode;
}
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const isMobile = useMobileDetect();
    const [isMenuOpen, setIsMenuOpen] = React.useState(!isMobile);
    const location = useLocation();
    React.useEffect(() => {
        setIsMenuOpen(!isMobile);
    }, [isMobile, location]);
    return (
        <VStack
            align="stretch"
            h="100dvh"
            w="full"
            spacing={0}
        >
            <Header
                onToggleMenu={() => setIsMenuOpen(prev => !prev)}
            />
            <HStack
                w="full"
                align="stretch"
                position="relative"
            >
                <Menu
                    isOpen={isMenuOpen}
                />
                <Box
                    position="relative"
                    w="full"
                    h={`calc(100dvh - ${HEADER_HEIGHT}px)`}
                >
                    {children}
                    <Overlay
                        isOpen={isMobile && isMenuOpen}
                        onClick={() => setIsMenuOpen(false)}
                    />
                </Box>
            </HStack>
        </VStack>
    );
}