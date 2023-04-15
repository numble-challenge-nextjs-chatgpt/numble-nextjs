import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Configuration, OpenAIApi } from 'openai';
import { useEffect, useState } from 'react';

const ChatRoom = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const getMessages = async () => {
    const data = await fetch('/api/openai/chat', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => res.message);
    console.log(data);

    setMessages(m => [...m, data]);
  };

  return (
    <div>
      {messages.map((message, index) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '10px',
            margin: '10px',
            backgroundColor: '#f0f0f0',
            color: '#000',
          }}
          key={index}
        >
          {message}
        </div>
      ))}

      <button
        style={{
          padding: '10px',
          margin: '10px',
          backgroundColor: '#000',
          color: '#fff',
        }}
        onClick={getMessages}
      >
        Get Messages
      </button>
    </div>
  );
};

export default ChatRoom;
