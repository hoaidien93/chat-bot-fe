import { HStack, IconButton } from "@chakra-ui/react"
import React from "react"
import { BsFillSendFill } from "react-icons/bs"
import { AutoResizeTextarea } from "../auto-sizer-textarea";
import { ScrollStyles } from "./utils";
import { BiRecycle } from "react-icons/bi";
type ChartInputProps = {
    onSubmit: (message: string) => void
    canSubmit: boolean
    canClear: boolean
    onClear: () => void
}
export const ChartInput: React.FC<ChartInputProps> = ({
    onSubmit,
    canSubmit,
    canClear,
    onClear
}) => {
    const [message, setMessage] = React.useState("");
    const onSend = React.useCallback(() => {
        if (!canSubmit || !message) return;
        setMessage("");
        onSubmit(message);
    }, [onSubmit, message, canSubmit])
    return <HStack
        alignItems="center"
        spacing={4}
    >
        <AutoResizeTextarea
            placeholder="Enter a prompt here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rounded="20px"
            bg="white"
            borderColor="rgb(60, 64, 67)"
            color="rgb(60, 64, 67)"
            px={8}
            pt={3}
            pb="14px"
            fontSize="md"
            onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                    onSend();
                    e.preventDefault();
                }
            }}
            overflowY="auto"
            sx={ScrollStyles}
        />
        <IconButton
            variant="outline"
            onClick={onSend}
            aria-label="Send message"
            icon={<BsFillSendFill />}
            rounded="full"
            colorScheme="facebook"
            disabled={!canSubmit}
        />
        <IconButton
            variant="outline"
            onClick={onClear}
            aria-label="Clear conversation"
            icon={<BiRecycle />}
            rounded="full"
            colorScheme="red"
            disabled={!canClear}
        />
    </HStack>
}