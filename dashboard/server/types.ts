export interface TwilioTranscript {
  sid: string;
  status: string;
  links: {
    media: string;
    sentences: string;
  };
}

export interface TwilioMedia {
  media_url: string;
}

export interface TranscriptSentence {
  media_channel?: number;
  transcript?: string;
  speaker?: string;
  text?: string;
}

export interface CallRecord {
  id: string;
  from: string;
  to: string;
  from_number: string;
  to_number: string;
  duration: string;
  recordingUrl: string;
  piiUrl: string;
  recordingType: 'regular' | 'redacted';
  transcript_sid: string;
  createdAt: string;
  transcript: {
    speaker: string;
    text: string;
  }[];
}
