import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'; // Import axios
import { MessageCircle, Send, X, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hi there! I\'m EcoBot, your sustainable shopping assistant. How can I help you today?',
    sender: 'bot',
    timestamp: new Date()
  }
];

const suggestedQuestions = [
  'How do I care for bamboo products?',
  'What eco-certifications should I look for?',
  'Do you offer international shipping?',
  'How do I track my order?'
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };
  
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;
    
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, newUserMessage]);
    setInputValue('');
    setIsTyping(true);
    
    try {
      // Send the user message to the backend
      const response = await axios.post('http://127.0.0.1:5000/chat', { message: inputValue });
      console.log(response.data);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.data,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, there was an issue with the bot. Please try again later.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const handleSuggestedQuestion = (question: string) => {
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: question,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, newUserMessage]);
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = generateBotResponse(question);
      setMessages(prevMessages => [...prevMessages, botResponse]);
      setIsTyping(false);
    }, 1000);
  };
  
  const generateBotResponse = (userMessage: string): Message => {
    const lowerCaseMessage = userMessage.toLowerCase();
    let responseText = '';
    
    if (lowerCaseMessage.includes('bamboo') || lowerCaseMessage.includes('care')) {
      responseText = 'For bamboo products, we recommend cleaning with mild soap and water...';
    } else if (lowerCaseMessage.includes('certification') || lowerCaseMessage.includes('certified')) {
      responseText = 'We prioritize products with eco-certifications like GOTS, FSC, and Fair Trade...';
    } else if (lowerCaseMessage.includes('shipping') || lowerCaseMessage.includes('delivery')) {
      responseText = 'Yes, we offer international shipping to most countries...';
    } else if (lowerCaseMessage.includes('track') || lowerCaseMessage.includes('order')) {
      responseText = 'You can track your order by logging into your account...';
    } else {
      responseText = 'I am still learning! I will connect you to support for more details.';
    }
    
    return {
      id: (Date.now() + 1).toString(),
      text: responseText,
      sender: 'bot',
      timestamp: new Date()
    };
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className={`absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[500px]'}`}>
          {/* Chat header */}
          <div className="bg-green-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              <h3 className="font-medium">EcoBot Assistant</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={toggleMinimize} className="text-white hover:text-green-200">
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </button>
              <button onClick={toggleChat} className="text-white hover:text-green-200">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              {/* Messages container */}
              <div className="p-4 h-[360px] overflow-y-auto bg-gray-50">
                {messages.map(message => (
                  <div
                    key={message.id}
                    className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}
                  >
                    <div
                      className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${
                        message.sender === 'user'
                          ? 'bg-green-600 text-white'
                          : 'bg-white text-gray-800 border border-gray-200'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-green-100' : 'text-gray-500'}`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="mb-4">
                    <div className="inline-block rounded-lg px-4 py-2 bg-white text-gray-800 border border-gray-200">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Suggested questions */}
              {messages.length <= 2 && (
                <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestedQuestion(question)}
                        className="text-xs bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-gray-700"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Input area */}
              <div className="p-4 border-t border-gray-200 flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={inputValue.trim() === ''}
                  className={`px-4 py-2 rounded-r-md ${
                    inputValue.trim() === ''
                      ? 'bg-gray-300 text-gray-500'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBot;
