export interface ChatItem {
  text: string;
  meaning: string;
}

export interface EmotionRequest {
  partnerName: string;
  partnerMbti: string;
  file: File;
}

export interface GuestEmotionResquest {
  userName: string;
  userMbti: string;
  partnerName: string;
  partnerMbti: string;
  file: File;
}

export interface MyEmotionResponse {
  userNickname: string;
  partnerName: string;
  partnerMbti: string;
  charmScore: number;
  feedbackTitle: string;
  feedbackContent: string;
  charmPointTitle: string;
  charmPointContent: string[];
  chat: ChatItem[];
}

export interface OtherEmotionResponse {
  userNickname: string;
  partnerName: string;
  partnerMbti: string;
  charmScore: number;
  feedbackTitle: string;
  feedbackContent: string;
  tipTitle: string;
  tipContent: string[];
  cautionTitle: string;
  cautionContent: string[];
  chat: ChatItem[];
}

export interface EmotionRecord {
  id: number;
  userNickname: string;
  partnerName: string;
  partnerMbti: string;
  charmScore: number;
}
