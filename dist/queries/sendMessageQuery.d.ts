import { MessageType } from '@/components/Bot';
export type IncomingInput = {
    question: string;
    history: MessageType[];
    overrideConfig?: Record<string, unknown>;
    socketIOClientId?: string;
    chatId?: string;
    userId?: string;
    fileName?: string;
};
export type UserInput = {
    name: string;
    email: string;
    chatId?: string;
    chatflowid?: string;
};
export type UserResponse = {
    name: string;
    email: string;
    chatId?: string;
    chatflowid?: string;
    id?: string;
};
export type MessageRequest = {
    chatflowid?: string;
    apiHost?: string;
    body?: IncomingInput;
};
export type UserRequest = {
    chatflowid?: string;
    apiHost?: string;
    body?: UserInput;
};
export type UserRequestById = {
    chatflowid?: string;
    apiHost?: string;
    body?: IncomingInput;
};
export declare const sendMessageQuery: ({ chatflowid, apiHost, body }: MessageRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const getChatbotConfig: ({ chatflowid, apiHost }: MessageRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const isStreamAvailableQuery: ({ chatflowid, apiHost }: MessageRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const sendFileDownloadQuery: ({ apiHost, body }: MessageRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const sendUserQuery: ({ chatflowid, apiHost, body }: UserRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const getUserByChatId: ({ chatflowid, apiHost }: UserRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
//# sourceMappingURL=sendMessageQuery.d.ts.map