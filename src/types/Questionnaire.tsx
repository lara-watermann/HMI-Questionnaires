import { Time } from "./Time";
import { ScaleType } from "./ScaleType";

export type Metadata = {
  scales: string[];
  time: Time[];
  language?: string[];
  year?: number;
  items?: number;
  cronbachAlpha?: number;
  scaleType?: ScaleType;
};

export type Questionnaire = {
  name: string;
  short: string;
  metadata: Metadata;
  links?: Record<string, string>;
  domain?: string[];
};
