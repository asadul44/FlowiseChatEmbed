import { MessageType } from '@/components/Bot';
import { sendRequest } from '@/utils/index';

export type IncomingInput = {
  question: string;
  history: MessageType[];
  overrideConfig?: Record<string, unknown>;
  socketIOClientId?: string;
  chatId?: string;
  userId?: string;
  fileName?: string; // Only for assistant
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

export const sendMessageQuery = ({ chatflowid, apiHost = 'http://localhost:3000', body }: MessageRequest) =>
  sendRequest<any>({
    method: 'POST',
    url: `${apiHost}/api/v1/prediction/${chatflowid}`,
    body,
  });

export const getChatbotConfig = ({ chatflowid, apiHost = 'http://localhost:3000' }: MessageRequest) =>
  sendRequest<any>({
    method: 'GET',
    url: `${apiHost}/api/v1/public-chatbotConfig/${chatflowid}`,
  });

export const isStreamAvailableQuery = ({ chatflowid, apiHost = 'http://localhost:3000' }: MessageRequest) =>
  sendRequest<any>({
    method: 'GET',
    url: `${apiHost}/api/v1/chatflows-streaming/${chatflowid}`,
  });

export const sendFileDownloadQuery = ({ apiHost = 'http://localhost:3000', body }: MessageRequest) =>
  sendRequest<any>({
    method: 'POST',
    url: `${apiHost}/api/v1/openai-assistants-file`,
    body,
    type: 'blob',
  });

export const sendUserQuery = ({ chatflowid, apiHost = 'http://localhost:3000', body }: UserRequest) =>
  sendRequest<any>({
    method: 'POST',
    url: `${apiHost}/api/v1/user/${chatflowid}`,
    body,
  });

export const getUserByChatId = ({ chatflowid, apiHost = 'http://localhost:3000' }: UserRequest) =>
  sendRequest<any>({
    method: 'GET',
    url: `${apiHost}/api/v1/user/${chatflowid}`,
  });
