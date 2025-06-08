import { useState, useRef, useEffect } from 'react';
import styles from '../src/styles/Chatbot.module.css';

export default function Chatbot() {
  const [display,setdisplay] = useState(false)
  const [messages, setMessages] = useState([]); // Initialisez bien comme un tableau vide
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Vérifiez toujours que messages est un tableau avant de mapper
  const safeMessages = Array.isArray(messages) ? messages : [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Ajoutez le message utilisateur
    setMessages(prev => [...(Array.isArray(prev) ? prev : []), { 
      text: inputValue, 
      sender: 'user' 
    }]);
    setInputValue('');

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();
      
      setMessages(prev => [...(Array.isArray(prev) ? prev : []), { 
        text: data.response, 
        sender: 'bot' 
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...(Array.isArray(prev) ? prev : []), { 
        text: "Désolé, je rencontre un problème.", 
        sender: 'bot' 
      }]);
    }
  };
  function displayer(){
    if (display == true){
        setdisplay(false)
    }
    else{
        setdisplay(true)
    }
  }
  return (
    <div className={styles.Chatbot}>
        <div className={ `${display == true ? styles.chatContainer:styles.off}`}>
            <div className={styles.chatHeader}>
                <h2>zonabot</h2>
            </div>
            
            <div className={styles.messagesContainer}>
                {safeMessages.map((msg, index) => (
                <div 
                    key={index} 
                    className={`${styles.message} ${
                    msg.sender === 'user' ? styles.userMessage : styles.botMessage
                    }`}
                >
                    {msg.text}
                </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            
            <div className={styles.inputContainer}>
                <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Tapez votre message..."
                />
                <button onClick={handleSendMessage}>
                Envoyer
                </button>
            </div>
        </div>
        <figure><img onClick={()=>displayer()} src='chatbot.webp'></img> <figcaption >zonabot</figcaption></figure>
    </div>
  );
}