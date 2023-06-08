import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react";

type ClearModalWarningProps = {
    isOpen: boolean;
    onClose: () => void;
    onClear: () => void;
}
export const ClearModalWarning: React.FC<ClearModalWarningProps> = ({
    isOpen,
    onClose,
    onClear
}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Clear the conversation ?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Your current chat session will not be saved. Are you sure you want to clear the conversation?
                </ModalBody>

                <ModalFooter>
                    <Button
                        variant='ghost'
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant='ghost'
                        onClick={onClear}
                        colorScheme='red'
                    >
                        Clear
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}