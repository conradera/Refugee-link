import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Send, Paperclip, MoreVertical } from 'lucide-react';
import './Dashboard.css';
import './Messages.css';

const conversations = [
  { id: '1', name: 'BuildRight NGO', initials: 'BR', lastMessage: 'We would like to schedule an interview with you for the carpentry position.', time: '2 min ago', unread: 2, online: true },
  { id: '2', name: 'HealthFirst Africa', initials: 'HF', lastMessage: 'Your application has been received. We will review it shortly.', time: '1 hour ago', unread: 0, online: false },
  { id: '3', name: 'SafeHaven Housing', initials: 'SH', lastMessage: 'Please upload your documentation to proceed.', time: '3 hours ago', unread: 1, online: true },
  { id: '4', name: 'LegalAid International', initials: 'LA', lastMessage: 'Your documents are being reviewed by our legal team.', time: 'Yesterday', unread: 0, online: false },
];

const chatMessages = [
  { id: '1', sender: 'them', text: 'Hello Ahmed, thank you for applying to the Carpentry Instructor position.', time: '10:30 AM' },
  { id: '2', sender: 'them', text: 'We have reviewed your profile and are impressed with your experience.', time: '10:31 AM' },
  { id: '3', sender: 'me', text: 'Thank you! I am very interested in this opportunity. I have 5 years of carpentry experience.', time: '10:45 AM' },
  { id: '4', sender: 'them', text: 'Great! We would like to schedule an interview with you for the carpentry position.', time: '11:00 AM' },
  { id: '5', sender: 'them', text: 'Would you be available next Tuesday at 2:00 PM?', time: '11:01 AM' },
  { id: '6', sender: 'me', text: 'Yes, Tuesday at 2:00 PM works perfectly for me. Should I bring any documents?', time: '11:15 AM' },
];

export default function MessagesPage() {
  const { t } = useTranslation();
  const [selectedConvo, setSelectedConvo] = useState(conversations[0]);
  const [messageText, setMessageText] = useState('');

  return (
    <div className="messages-page">
      {/* Conversations List */}
      <div className="messages-sidebar">
        <div className="messages-sidebar-header">
          <h2>{t('nav.messages')}</h2>
        </div>
        <div className="messages-search">
          <Search size={16} />
          <input type="text" placeholder="Search messages..." />
        </div>
        <div className="conversations-list">
          {conversations.map((convo) => (
            <button
              key={convo.id}
              className={`conversation-item ${selectedConvo.id === convo.id ? 'active' : ''}`}
              onClick={() => setSelectedConvo(convo)}
            >
              <div className="conversation-avatar">
                {convo.initials}
                {convo.online && <span className="online-dot" />}
              </div>
              <div className="conversation-info">
                <div className="conversation-name">
                  {convo.name}
                  <span className="conversation-time">{convo.time}</span>
                </div>
                <div className="conversation-preview">{convo.lastMessage}</div>
              </div>
              {convo.unread > 0 && (
                <span className="conversation-unread">{convo.unread}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="chat-area">
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="conversation-avatar" style={{ width: 38, height: 38 }}>
              {selectedConvo.initials}
              {selectedConvo.online && <span className="online-dot" />}
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{selectedConvo.name}</div>
              <div style={{ fontSize: 12, color: 'var(--gray-500)' }}>
                {selectedConvo.online ? 'Online' : 'Offline'}
              </div>
            </div>
          </div>
          <button className="toolbar-btn">
            <MoreVertical size={18} />
          </button>
        </div>

        <div className="chat-messages">
          {chatMessages.map((msg) => (
            <div key={msg.id} className={`chat-message ${msg.sender === 'me' ? 'sent' : 'received'}`}>
              <div className="chat-bubble">
                <p>{msg.text}</p>
                <span className="chat-time">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input-area">
          <button className="chat-attach-btn">
            <Paperclip size={20} />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            className="chat-input"
          />
          <button className="btn btn-primary chat-send-btn">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
