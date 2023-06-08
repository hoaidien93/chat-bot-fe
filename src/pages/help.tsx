import { Heading, List, ListIcon, ListItem, UnorderedList, chakra, Text, OrderedList, HStack, VStack } from "@chakra-ui/react";
import { AiFillCheckCircle, AiOutlinePauseCircle, AiOutlineReload } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ScrollStyles } from "../components/chat/utils";
import { BsFillSendFill } from "react-icons/bs";
import { BiRecycle } from "react-icons/bi";

export const HelpPage: React.FC = () => {
    return (
        <VStack
            w="full"
            h="100%"
            px={4}
            overflowY="auto"
            pb={4}
            sx={ScrollStyles}
            align="stretch"
            spacing={4}
        >
            <VStack align="stretch">
                <Heading as="h3" size="lg" fontSize="24px">Use Chatbot</Heading>
                You can use Chatbot to help move your ideas forward. With a little help from Chatbot, you can do things like:
                <List>
                    <ListItem>
                        <ListIcon as={AiFillCheckCircle} color='green.500' />
                        Brainstorm ideas, develop a plan, or find different ways to get things done
                    </ListItem>
                    <ListItem>
                        <ListIcon as={AiFillCheckCircle} color='green.500' />
                        Get a quick, easy to understand summary of more complex topics
                    </ListItem>
                    <ListItem>
                        <ListIcon as={AiFillCheckCircle} color='green.500' />
                        Create first drafts of outlines, emails, blog posts, poems, and much more
                    </ListItem>
                </List>
            </VStack>
            <VStack align="stretch">
                <Heading as="h3" size="lg" fontSize="24px">What you need</Heading>
                <UnorderedList>
                    <ListItem>
                        <chakra.span fontWeight="medium">
                            A personal account that you manage on your own.
                        </chakra.span>
                    </ListItem>
                    <ListItem>
                        <chakra.span fontWeight="medium">
                            Be 18 or over.
                        </chakra.span>
                    </ListItem>
                    <ListItem>
                        <chakra.span fontWeight="medium">
                            A supported browser:
                        </chakra.span>
                        &nbsp;Chrome, Safari, Firefox, Opera, or Edgium.
                    </ListItem>
                </UnorderedList>
                <Text>
                    <chakra.span fontWeight="medium">Important: </chakra.span>
                    &nbsp;For now, Chatbot is available only in Japanese, Korean, and US English.
                </Text>
            </VStack>
            <VStack align="stretch">
                <Heading as="h3" size="lg" fontSize="24px">Before you use Chatbot</Heading>
                <UnorderedList>
                    <ListItem>
                        Don’t rely on Chatbot’s responses as medical, legal, financial or other professional advice.
                    </ListItem>
                    <ListItem>
                        You are responsible for your use of code, which may be subject to an open source license. Learn more about code and citations.
                    </ListItem>
                    <ListItem>
                        Chatbot may give inaccurate or inappropriate information. Your feedback makes Chatbot more helpful and safe. Learn how to give feedback.
                    </ListItem>
                </UnorderedList>
            </VStack>
            <VStack align="stretch">
                <Heading as="h3" size="lg" fontSize="24px">Start a conversation in chat</Heading>
                <OrderedList>
                    <ListItem>
                        Go to <Link
                            to="/"
                            target="_blank"
                        >
                            <chakra.span color="#0b57d0">{process.env.REACT_APP_API_DOMAIN}</chakra.span>
                        </Link>.
                    </ListItem>
                    <ListItem>
                        In the text box at the bottom, enter your question or prompt.
                    </ListItem>
                    <ListItem>
                        <HStack>
                            <chakra.span>Select Submit . </chakra.span>
                            <BsFillSendFill />
                        </HStack>
                    </ListItem>
                </OrderedList>
            </VStack>
            <VStack align="stretch">
                <Heading as="h4" size="md" fontSize="18px">Examples</Heading>
                <UnorderedList>
                    <ListItem>Help me finish my art studio tagline: craft, create, and ...</ListItem>
                    <ListItem>Outline my blog post about summer mocktail recipes</ListItem>
                    <ListItem>Draft a packing list for my weekend fishing and camping trip</ListItem>
                    <ListItem>I want to write a novel. How can I get started?</ListItem>
                    <ListItem>Help me understand if lightning can strike the same place twice</ListItem>
                    <ListItem>Tell me about the code within the google/jax GitHub repo</ListItem>
                    <ListItem>Debug this error message: "FileNotFoundError: [Errno 2] No such file or directory: 'data.csv'"</ListItem>
                </UnorderedList>
            </VStack>
            <VStack align="stretch">
                <Heading as="h3" size="lg" fontSize="24px">
                    Regenerate a response
                </Heading>
                <Text>
                    Chatbot may generate an inaccurate or inappropriate response. If this happens, you can regenerate your prompt to get a new response.
                </Text>
                <OrderedList>
                    <ListItem>
                        <HStack>
                            <chakra.span>To the right of Chatbot’s response, select Regenerate.</chakra.span>
                            <AiOutlineReload />
                        </HStack>
                    </ListItem>
                    <ListItem>
                        Wait for Chatbot to generate a new response.
                    </ListItem>
                </OrderedList>
            </VStack>
            <VStack align="stretch">
                <Heading as="h3" size="lg" fontSize="24px">
                    Cancel the response generator
                </Heading>
                <Text>
                    If you don’t want to wait for Chatbot to generate a response, you can cancel the response generator.
                </Text>
                <OrderedList>
                    <ListItem>
                        <HStack>
                            <chakra.span>To the right of loading, select Cancel.</chakra.span>
                            <AiOutlinePauseCircle />
                        </HStack>
                    </ListItem>
                    <ListItem>
                        Chatbot will stop generating a response.
                    </ListItem>
                </OrderedList>
            </VStack>
            <VStack align="stretch">
                <Heading as="h3" size="lg" fontSize="24px">
                    Clear the conversation
                </Heading>
                <Text>
                    You can clear the conversation to start a new one.
                </Text>
                <OrderedList>
                    <ListItem>
                        <HStack>
                            <chakra.span>To the right of the box input, select Reset.</chakra.span>
                            <BiRecycle />
                        </HStack>
                    </ListItem>
                    <ListItem>
                        The conversation will be cleared.
                    </ListItem>
                </OrderedList>
            </VStack>
        </VStack>
    );
}