import OpenAI from "openai";
import { constants } from "@lib/index";

export const openai = new OpenAI({
  baseURL: undefined,
  apiKey: constants.openAI.apiKey,
});
