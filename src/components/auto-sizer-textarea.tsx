// Ref: https://github.com/chakra-ui/chakra-ui/issues/670
import { Textarea, TextareaProps } from "@chakra-ui/react";
import ResizeTextarea from "react-textarea-autosize";
import React from "react";

export const AutoResizeTextarea = React.forwardRef<
    HTMLTextAreaElement,
    TextareaProps
>((props, ref) => {
    return (
        <Textarea
            minH="unset"
            overflow="hidden"
            w="100%"
            resize="none"
            ref={ref}
            minRows={1}
            maxRows={6}
            as={ResizeTextarea}
            {...props}
        />
    );
});