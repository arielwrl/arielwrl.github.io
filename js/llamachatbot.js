import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

const chatBox = document.getElementById("chat-box");
const inputEl = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

// Initialize engine with loading callback
const engine = await CreateMLCEngine(
    "Llama-3.1-8B-Instruct-q4f32_1-MLC-1k",
    {
    initProgressCallback: ({ text, progress }) => {
        chatBox.textContent = `Loading (${(progress*100).toFixed(0)}%): ${text}`;
    }
    }
);
chatBox.textContent = "Model loaded!";

sendBtn.addEventListener("click", async () => {
    const question = inputEl.value.trim();
    if (!question) return;
    chatBox.innerHTML += `\n<div class="user"><strong>You:</strong> ${question}</div>`;
    inputEl.value = "";

    // Chat completion — streaming disabled
    const response = await engine.chat.completions.create({
    messages: [
        { role: "system", content: "You are an immortal evil scientist." },
        { role: "user", content: question }
    ]
    });
    const answer = response.choices[0].message.content;
    chatBox.innerHTML += `\n<div class="bot"><strong>Bot:</strong> ${answer}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
});
