export const enum EChatType {
    User = 'user',
    Bot = 'bot',
    Loading = 'loading',
}
type TBaseChat = {
    id: string;
}
export type TUserChat = TBaseChat & {
    type: EChatType.User;
    isCancel?: boolean;
    content: string;
}
export type TBotChat = TBaseChat & {
    type: EChatType.Bot;
    parentId: string;
    content: string;
}
export type TLoadingChat = TBaseChat & {
    type: EChatType.Loading;
    parentId: string;
}
export type TChatContent = TUserChat | TBotChat | TLoadingChat;