import { TChatContent } from "../components/chat/type";
import { useLocalStorage } from "./useLocationStorage";
const CONVERSATION_KEY = 'conversation';
const MAX_CONVERSATION_LENGTH = 50;
export const useConversationStorage = () => {
    const { get, set } = useLocalStorage();
    function getConversation() {
        return get<TChatContent[]>(CONVERSATION_KEY, []);
    }
    function setConversation(conversation: TChatContent[]) {
        if (conversation.length > MAX_CONVERSATION_LENGTH) {
            set(CONVERSATION_KEY, conversation.slice(
                conversation.length - MAX_CONVERSATION_LENGTH,
                conversation.length
            ));
        }
        else set(CONVERSATION_KEY, conversation);
    }
    function removeConversation() {
        localStorage.removeItem(CONVERSATION_KEY);
    }
    return {
        getConversation,
        setConversation,
        removeConversation
    }
}