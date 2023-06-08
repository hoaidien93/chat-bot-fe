import { HStack, Image, Text, VStack, chakra } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Welcome: React.FC = () => {
    return <HStack>
        <Image
            w="32px"
            h="32px"
            src="/images/bot.png"
        />
        <VStack
            align="stretch"
            spacing={0}
        >
            <Text
                fontWeight="medium"
            >I’m Chatbot, your creative and helpful collaborator. I have limitations and won’t always get it right, but your feedback will help me improve.</Text>
            <Text>
                Need help? <Link to="/help">
                    <chakra.span color="#0b57d0">Get help</chakra.span>
                </Link>
            </Text>
        </VStack>
    </HStack>
}