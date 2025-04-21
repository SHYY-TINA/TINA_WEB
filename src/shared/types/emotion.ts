export interface ChatItem {
  text: string;
  meaning: string;
}

export interface MyEmotionResponse {
  charmScore: number;
  feedbackTitle: string;
  feedbackContent: string;
  charmPointTitle: string;
  charmPointContent: string;
  chats: ChatItem[];
}

export interface OtherEmotionResponse {
  charmScore: number;
  feedbackTitle: string;
  feedbackContent: string;
  tipTitle: string;
  tipContent: string;
  cautionTitle: string;
  cautionContent: string;
  chats: ChatItem[];
}
