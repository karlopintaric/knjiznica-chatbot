'use client'
import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Adding the configuration script
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "g10CFZs5Yhe8ziY5lMukr",
        domain: "www.chatbase.co"
      };
    `;
    document.head.appendChild(configScript);

    // Adding the embed script
    const embedScript = document.createElement('script');
    embedScript.src = "https://www.chatbase.co/embed.min.js";
    embedScript.setAttribute('chatbotId', 'g10CFZs5Yhe8ziY5lMukr');
    embedScript.setAttribute('domain', 'www.chatbase.co');
    embedScript.defer = true;
    document.head.appendChild(embedScript);

    // Cleanup scripts when the component unmounts
    return () => {
      document.head.removeChild(configScript);
      document.head.removeChild(embedScript);
    };
  }, []);

  return <div />;
};

export default Chatbot;
