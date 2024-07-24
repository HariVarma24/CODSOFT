function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    addMessage(userInput, 'user');
    document.getElementById('user-input').value = '';

    const botResponse = getBotResponse(userInput);
    setTimeout(() => addMessage(botResponse, 'bot'), 500);
}

function addMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${sender}-message`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function getBotResponse(userInput) {
    const userMessage = userInput.toLowerCase();
    if (userMessage.includes('hello')) {
        return 'Hello! How can I assist you today?';
    } else if (userMessage.includes('how are you')) {
        return 'I am just a bot, but I am functioning as expected!';
    } else if (userMessage.includes('bye')) {
        return 'Goodbye! Have a nice day!';
    } else {
        return 'I am not sure how to respond to that.';
    }
}
