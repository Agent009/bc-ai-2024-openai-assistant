import OpenAI from "openai";
import { constants } from "@lib/index";

export const openai = new OpenAI({
  baseURL: constants.openAI.useLocal ? constants.openAI.localBaseURL : undefined,
  apiKey: constants.openAI.apiKey,
});
