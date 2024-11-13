import { useState } from 'react';
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
    <div className="flex flex-col max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 bg-blue-600 text-white font-bold text-center">ChatBot</div>
      <div className="chat-window p-4 h-80 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}>
            <div
              className={`max-w-xs p-3 m-1 rounded-lg ${
                msg.role === 'bot' ? 'bg-gray-300 text-gray-800' : 'bg-blue-600 text-white'
              }`}
            >
              <span>{msg.text}</span>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center p-4 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
