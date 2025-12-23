function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value;

    if (message === "") return;

    addMessage("You", message, "user");
    input.value = "";

    setTimeout(() => {
        let reply = botReply(message);
        addMessage("Bot", reply, "bot");
    }, 500);
}

function addMessage(sender, text, className) {
    let chatBox = document.getElementById("chatBox");
    let msg = document.createElement("div");
    msg.className = className;
    msg.innerText = sender + ": " + text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(message) {
    message = message.toLowerCase();

    if (message.includes("hello")) return "Hello! How can I help you study?";
    if (message.includes("exam")) return "Focus on important questions and revise.";
    if (message.includes("pdf")) return "I can help you read PDFs (future update).";
    if (message.includes("bye")) return "All the best for your exam 👍";

    return "Sorry, I didn’t understand that.";
}
