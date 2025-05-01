'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './TelegramChat.module.css';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'system';
  timestamp: Date;
}

export default function TelegramChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'WELCOME TO THE TELEGRAPH OFFICE STOP SEND YOUR MESSAGE BELOW STOP',
      sender: 'system',
      timestamp: new Date(),
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;

    // Format message in telegram style
    const formattedMessage = newMessage
      .toUpperCase()
      .trim()
      .replace(/\./g, ' STOP');
      
    setIsAnimating(true);
    
    // Add user message immediately
    const userMessage: Message = {
      id: messages.length + 1,
      text: formattedMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setNewMessage('');
    
    // Simulate response with delay
    setTimeout(() => {
      const responseMessage: Message = {
        id: messages.length + 2,
        text: 'MESSAGE RECEIVED STOP AWAITING FURTHER CORRESPONDENCE STOP',
        sender: 'system',
        timestamp: new Date(),
      };
      
      setMessages((prevMessages) => [...prevMessages, responseMessage]);
      setIsAnimating(false);
    }, 2000);
  };

  // Format timestamp as it would appear on a telegram
  const formatTimestamp = (date: Date): string => {
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).toUpperCase();
  };

  return (
    <div className={styles.telegramOffice}>
      <div className={styles.officeHeader}>
        <h1>WESTERN UNION TELEGRAM</h1>
        <div className={styles.officeDetail}>ESTABLISHED 1910</div>
      </div>
      
      <div className={styles.messagesContainer}>
        <div className={styles.tickerTape}>
          {messages.map((msg) => (
            <div 
              key={msg.id}
              className={`${styles.telegram} ${msg.sender === 'user' ? styles.userTelegram : styles.systemTelegram}`}
            >
              <div className={styles.telegramHeader}>
                <span className={styles.telegramOffice}>
                  {msg.sender === 'user' ? 'SENT FROM YOUR OFFICE' : 'RECEIVED VIA TELEGRAPH LINE'}
                </span>
                <span className={styles.telegramTimestamp}>{formatTimestamp(msg.timestamp)}</span>
              </div>
              <div className={styles.telegramBody}>{msg.text}</div>
              <div className={styles.telegramFooter}>
                <div className={styles.telegramStamp}>{msg.sender === 'user' ? 'SENT' : 'RECEIVED'}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {isAnimating && (
        <div className={styles.telegramAnimation}>
          <div className={styles.tickerTapeAnimation}></div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className={styles.messageForm}>
        <div className={styles.messageSlip}>
          <textarea
            value={newMessage}
            onChange={(e) => {
              setNewMessage(e.target.value);
              setIsTyping(e.target.value.length > 0);
            }}
            placeholder="TYPE YOUR MESSAGE HERE..."
            className={styles.telegramInput}
          />
          <div className={styles.typewriterLine}></div>
        </div>
        <button 
          type="submit" 
          className={`${styles.sendButton} ${isTyping ? styles.active : ''}`}
          disabled={!newMessage.trim()}
        >
          <div className={styles.waxSeal}>
            <span>SEND</span>
          </div>
        </button>
      </form>
    </div>
  );
}