const toggleBtn = document.getElementById("toggle-chatbot-btn");
const chatbotContainer = document.getElementById("chatbot-container");
const defaultText = "Chat with an evil AI running in your browser.";
const hideText = "Hide chatbot, it is too evil!";

toggleBtn.addEventListener("click", function() {
    if (chatbotContainer.classList.contains("hidden")) {
        chatbotContainer.classList.remove("hidden");
        toggleBtn.textContent = hideText;
    } else {
        chatbotContainer.classList.add("hidden");
        toggleBtn.textContent = defaultText;
    }
});