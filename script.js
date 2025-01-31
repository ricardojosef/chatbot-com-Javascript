const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');

const responses = {
    "olá": "Olá! Seja bem-vindo(a)! Como posso te ajudar?",
    "oi": "Olá!  Seja bem-vindo(a)! Como posso te ajudar?",
    "Oi": "Olá! Seja bem-vindo(a)! Como posso te ajudar?",
    "Olá": "Olá!  Seja bem-vindo(a)! Como posso te ajudar?",
    "Ola": "Olá!  Seja bem-vindo(a)! Como posso te ajudar?",
    "ola": "Olá!  Seja bem-vindo(a)! Como posso te ajudar?",
    "Oii": "Olá!  Seja bem-vindo(a)! Como posso te ajudar?",
    "oii": "Olá!  Seja bem-vindo(a)! Como posso te ajudar?",
    "como você está?": "Estou bem, obrigado por perguntar! E você?",
    "Como você está?": "Estou bem, obrigado por perguntar! E você?",
    "Como você esta?": "Estou bem, obrigado por perguntar! E você?",
    "Como voce esta?": "Estou bem, obrigado por perguntar! E você?",
    "como voce esta?": "Estou bem, obrigado por perguntar! E você?",
    "como voce esta": "Estou bem, obrigado por perguntar! E você?",
    "Como voce esta": "Estou bem, obrigado por perguntar! E você?",
    "qual é seu nome?": "Eu sou um chatbot criado com JavaScript.",
    "qual é o seu nome?": "Eu sou um chatbot criado com JavaScript.",
    "qual e o seu nome?": "Eu sou um chatbot criado com JavaScript.",
    "qual e o seu nome": "Eu sou um chatbot criado com JavaScript.",
    "qual e o seu nome": "Eu sou um chatbot criado com JavaScript.",
    "tchau": "Até logo! Tenha um ótimo dia!",
    "que horas são?": new Date().toLocaleTimeString(),
    "que horas são": new Date().toLocaleTimeString(),
    "que horas sao": new Date().toLocaleTimeString(),
    "Que horas sao": new Date().toLocaleTimeString(),
    "Que horas sao?": new Date().toLocaleTimeString(),
    "Que horas são?": new Date().toLocaleTimeString(),
    "Que horas são": new Date().toLocaleTimeString(),
    "qual é a data de hoje?": new Date().toLocaleDateString(),
    "qual a data de hoje?": new Date().toLocaleDateString(),
    "qual a data de hoje": new Date().toLocaleDateString(),
    "como você funciona?": "Eu sou um chatbot simples, criado para responder perguntas pré-definidas.",
    "quem é o presidente do Brasil?": "O presidente do Brasil é Luiz Inácio Lula da Silva.",
    "Qual a identidade do Batman?": "Eu não deveria revelar isso...mas tudo indica que o Cavaleiro das Trevas é Bruce Wayne."
};

function sendMessage() {
    const userText = userInput.value.trim().toLowerCase();
    if (userText === "") return;
    
    // Exibe a mensagem do usuário
    addMessage(userText, 'user');
    
    // Resposta do bot
    const botResponse = getBotResponse(userText);
    setTimeout(() => addMessage(botResponse, 'bot'), 500);
    
    // Limpa o campo de entrada
    userInput.value = '';
}

function addMessage(message, sender) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.classList.add(sender === 'user' ? 'user-msg' : 'bot-msg');
    chatBox.appendChild(messageElement);
    
    // Rola a caixa de chat para baixo
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Função para enviar uma pergunta sugerida ao chatbot
function suggestQuestion(question) {
    userInput.value = question;  // Define o valor do campo de entrada com a pergunta sugerida
    sendMessage();  // Envia a pergunta automaticamente
}
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();  // Chama a função de envio ao pressionar "Enter"
    }
}

function getBotResponse(userText) {
    // Normaliza a entrada do usuário (retira espaços extras e converte para minúsculas)
    const normalizedText = userText.trim().toLowerCase();

    // Verifica se a pergunta exata está no mapeamento
    if (responses[normalizedText]) {
        return responses[normalizedText];
    }

    // Caso contrário, verifica se a entrada contém palavras-chave
    if (normalizedText.includes("presidente do brasil")) {
        return responses["quem é o presidente do Brasil?"];
    }
    if (normalizedText.includes("identidade do batman")) {
        return responses["Qual a identidade do Batman?"];
    }

    return "Desculpe, não entendi isso. Tente outra pergunta.";
}