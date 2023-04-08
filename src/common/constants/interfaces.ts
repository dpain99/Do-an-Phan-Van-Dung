export enum MessageType {
  ERROR = 'error',
  SUCCESS = 'success',
}

export interface IShowMessage {
  type: MessageType;
  message: string;
}
