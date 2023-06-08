import { Box } from "@chakra-ui/react";

type OverlayProps = {
    isOpen: boolean;
    onClick: () => void;
}
export const Overlay: React.FC<OverlayProps> = ({
    isOpen,
    onClick
}) => {
    return <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bg="rgba(0,0,0,0.4)"
        zIndex={100}
        display={isOpen ? "block" : "none"}
        onClick={onClick}
    />
}