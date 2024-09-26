# Chat Application with OpenAI Assistants - RAG + Function Calls

* AI assistant that processes attached files for information retrieval, and answers based on knowledge obtained from it.
* Implementation of **Retrieval Augmented Generation (RAG)** techniques for operating on provided data.
* Includes **function calling** (**tools**) support.

## Instructions / README

- [Lesson-15 / exercises / 01-RAG-Chat-Application](https://github.com/Encode-Club-AI-Bootcamp/Generative-AI-Applications/blob/main/Lesson-15/exercises/01-RAG-Chat-Application.md)

## Setup

Copy `.env` and create your `.env.local` file, replacing placeholder values with actual values.

## Running

```bash
npm i
npm run dev
```

Open [http://localhost:3091](http://localhost:3091) with your browser to see the result.

## Overview

This project is intended to serve as a template for using the Assistants API in Next.js with [streaming](https://platform.openai.com/docs/assistants/overview/step-4-create-a-run), tool use ([code interpreter](https://platform.openai.com/docs/assistants/tools/code-interpreter) and [file search](https://platform.openai.com/docs/assistants/tools/file-search)), and [function calling](https://platform.openai.com/docs/assistants/tools/function-calling). While there are multiple pages to demonstrate each of these capabilities, they all use the same underlying assistant with all capabilities enabled.

The main logic for chat will be found in the `Chat` component in `src/app/components/chat.tsx`, and the handlers starting with `api/assistants/threads` (found in `src/app/api/assistants/threads/...`). The `Chat` component itself can be copied and used directly, provided you copy the styling from `src/app/components/chat.module.css` as well.

### Pages

- Basic Chat Example: [http://localhost:3000/examples/basic-chat](http://localhost:3000/examples/basic-chat)
- Function Calling Example: [http://localhost:3000/examples/function-calling](http://localhost:3000/examples/function-calling)
- File Search Example: [http://localhost:3000/examples/file-search](http://localhost:3000/examples/file-search)
- Full-featured Example: [http://localhost:3000/examples/all](http://localhost:3000/examples/all)

### Main Components

- `src/app/components/chat.tsx` - handles chat rendering, [streaming](https://platform.openai.com/docs/assistants/overview?context=with-streaming), and [function call](https://platform.openai.com/docs/assistants/tools/function-calling/quickstart?context=streaming&lang=node.js) forwarding
- `src/app/components/file-viewer.tsx` - handles uploading, fetching, and deleting files for [file search](https://platform.openai.com/docs/assistants/tools/file-search)

### Endpoints

- `api/assistants` - `POST`: create assistant (only used at startup)
- `api/assistants/threads` - `POST`: create new thread
- `api/assistants/threads/[threadId]/messages` - `POST`: send message to assistant
- `api/assistants/threads/[threadId]/actions` - `POST`: inform assistant of the result of a function it decided to call
- `api/assistants/files` - `GET`/`POST`/`DELETE`: fetch, upload, and delete assistant files for file search

## Resources

A quick-start template using the OpenAI [Assistants API](https://platform.openai.com/docs/assistants/overview) with [Next.js](https://nextjs.org/docs).
<br/>
<br/>
![OpenAI Assistants API Quickstart](https://github.com/openai/openai-assistants-quickstart/assets/27232/755e85e9-3ea4-421f-b202-3b0c435ea270)

- [GitHub Repo - Encode-Club-AI-Bootcamp / Generative-AI-Applications](https://github.com/Encode-Club-AI-Bootcamp/Generative-AI-Applications)
