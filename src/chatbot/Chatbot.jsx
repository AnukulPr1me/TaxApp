import React, { useState } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'bot', text: 'Hello! How can I assist you today?' }]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await axios.post('http://localhost:5000/ollama/ask', { query: input });

      const botMessage = response.data?.response || 'Sorry, I could not understand that.';
      setMessages([...newMessages, { role: 'bot', text: botMessage }]);
    } catch (error) {
      console.error('Error communicating with the server:', error);
      setMessages([...newMessages, { role: 'bot', text: 'An error occurred. Please try again later.' }]);
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;
