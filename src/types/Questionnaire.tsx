import { Time } from "./Time";
import { ResponseFormat } from "./ResponseFormat";

export type Metadata = {
  scales: Scale[];
  responseFormat?: ResponseFormat;
  time: Time[];
  language?: string[];
  year?: number;
  items?: number;
  participantDetails?: {
    n: number;
    type: string[];
  };
};

export type Questionnaire = {
  name: string;
  short: string;
  metadata: Metadata;
  links?: Record<string, string>;
  domain?: string[];
  notes?: string[];
};

export type Scale = {
  name: string;
  cronbachsAlpha?: number;
};
