import React from "react";

type TChatManager = {
    cancelGenerate: (chatId: string) => void;
    regenerate: (chatId: string) => void;
}
export const ChatManagerContext = React.createContext<TChatManager>({} as TChatManager);
export const useChatManager = () => React.useContext(ChatManagerContext);