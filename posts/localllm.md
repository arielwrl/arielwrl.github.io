---
title: Local (in-browser) LLMs
date: 2025-06-21
---

I like to experiment with AI agents, but I do not like to pay for cloud computing. This is why I was very interested when I first heard of [WebLLM](https://webllm.mlc.ai), a javascript library that allows you to run large language models (LLMs) directly in your browser using [WebGPU](https://en.wikipedia.org/wiki/WebGPU), with no requirement for server-side processing. In other words, you can make LLM applications for free. 

This sounds really cool, but in this hype-plagued world I always ask myself: does it actually work?

I will let you try for yourself by clicking below, but bear in mind that this might make your device explode if you don't have a dedicated GPU.

<div id="chatbot-container" class="hidden">
        <h1>Evil chatbot</h1>
        <p>This chatbot was made with WebLLM and LLaMA 3.2; I added the evil bits myself. The model will run locally for you! Performance might be very slow, but it is free!</p>
        <div id="chat-box">Loading model...</div>
        <input id="chat-input" type="text" style="width:80%" placeholder="Ask me something, mortal." />
        <button id="send-btn">Send</button>
</div>

<button id="toggle-chatbot-btn" class="primary" style="margin-top: 1rem;">Chat with an evil AI running in your browser</button>

##### My impressions

If you have a very good GPU, the model will run very well, and there are probably more efficient options than the one I chose for this test. However, most devices will not have a very good GPU. So, although this is not a good general solution, it can work well in specific applications.

Moreover, in this test I used a model that is not too large that it would be unfeasible to run, but that is large enough to serve as a general chatbot. If you are thinking of an application that requires a small model, performance should be much better!

##### The code

WebLLM is extremely simple to set up if you know JavaScript, I am very new to the language so in my case it took around 3 hours to complete this project; still something worth trying.

The JavaScript code goes something like this:

```js
// Import the MLC engine from the WebLLM CDN
import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

// Get references to the HTML elements related to the chatbot (I will show the HTML later)
const chatBox = document.getElementById("chat-box");
const inputEl = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

// Initialize the model (I'm choosing llama3.2-1B)
const engine = await CreateMLCEngine(
    "Llama-3.2-1B-Instruct-q4f32_1-MLC",
    {
        // Show loading progress in the chat box 
        initProgressCallback: ({ text, progress }) => {
            chatBox.textContent = `Loading (${(progress*100).toFixed(0)}%): ${text}`;
        }
    }
);
// Indicate that the model has finished loading
chatBox.textContent = "Model loaded!";

// Add a click event listener to the send button in the chat, so it will run the idented 
// code when the button is clicked
sendBtn.addEventListener("click", async () => {
    // Get the user's input
    const question = inputEl.value.trim();
    if (!question) return;

    // Display the user's message in the chat box
    chatBox.innerHTML += `\n<div class="user"><strong>You:</strong> ${question}</div>`;
    inputEl.value = ""; 

    // Send the user's message to the model and get a response
    const response = await engine.chat.completions.create({
        messages: [
            // Provide a system prompt to set the bot's persona
            { role: "system", content: "You are an immortal evil scientist." },
            // Add the user's question
            { role: "user", content: question }
        ]
    });
    // Extract the bot's answer from the response
    const answer = response.choices[0].message.content;

    // Display the bot's response in the chat box and scroll to the last message
    chatBox.innerHTML += `\n<div class="bot"><strong>Bot:</strong> ${answer}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
});
```

And the HTML should be something like this:

```html
<div id="chatbot-container">
        <h1>Evil chatbot</h1>
        <div id="chat-box">Loading model...</div>
        <input id="chat-input" type="text" style="width:80%" placeholder="Ask me something, mortal." />
        <button id="send-btn">Send</button>
</div>
```