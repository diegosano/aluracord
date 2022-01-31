import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { v4 as uuid } from 'uuid';

import { Box, TextField, Button } from '@skynexui/components';
import { MessageList } from '../src/components/MessageList';
import { Header } from '../src/components/Header';
import { ButtonStickers } from '../src/components/ButtonStickers';

import { supabaseClient } from '../src/services/supabaseClient';

import appConfig from '../config.json';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const router = useRouter();
  const { username } = router.query;

  const getMessagesInRealTime = (addMessage) => {
    supabaseClient
      .from('messages')
      .on('*', (response) => {
        addMessage(response.new);
      })
      .subscribe();
  };

  useEffect(() => {
    let isSubscribed = true;

    const fetchData = async () => {
      try {
        const response = await supabaseClient
          .from('messages')
          .select('*')
          .order('created_at', { ascending: false });

        const { data } = response;

        if (isSubscribed) {
          setMessages(data);
          getMessagesInRealTime((message) => {
            setMessages((updatedMessages) => {
              return [message, ...updatedMessages];
            });
          });
        }
      } catch (error) {
        alert(error);
      }
    };

    fetchData();

    return () => (isSubscribed = false);
  });

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMessage({ id: uuid(), from: username, text: message });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addMessage({ id: uuid(), from: username, text: message });
    }
  };

  const addMessage = async (message) => {
    try {
      await supabaseClient.from('messages').insert([message]);
      clearTextArea();
    } catch (error) {
      alert(error);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await supabaseClient.from('messages').delete().match({ id });
    } catch (error) {
      alert(error);
    }
  };

  const clearTextArea = () => {
    setMessage('');
  };

  return (
    <Box
      styleSheet={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appConfig.theme.colors.primary[500],
        color: appConfig.theme.colors.neutrals['000'],
      }}
    >
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          borderRadius: '5px',
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: '100%',
          maxWidth: '95%',
          maxHeight: '95vh',
          padding: '32px',
        }}
      >
        <Header />

        <Box
          styleSheet={{
            position: 'relative',
            display: 'flex',
            flex: 1,
            height: '80%',
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: 'column',
            borderRadius: '5px',
            padding: '16px',
          }}
        >
          <MessageList messages={messages} deleteMessage={deleteMessage} />

          <Box
            as="form"
            onSubmit={handleSubmit}
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              height: '$rem',
            }}
          >
            <TextField
              placeholder="Insert your message here..."
              type="textarea"
              value={message}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              styleSheet={{
                width: '100%',
                height: '100%',
                border: '0',
                resize: 'none',
                borderRadius: '5px',
                padding: '6px 8px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: '12px',
                color: appConfig.theme.colors.neutrals[200],
              }}
            />

            <ButtonStickers
              onStickerClick={(sticker) =>
                addMessage({
                  id: uuid(),
                  from: username,
                  text: `:sticker:${sticker}`,
                })
              }
            />

            <Button
              type="submit"
              label="Send"
              styleSheet={{
                borderRadius: '10%',
                minWidth: '50px',
                minHeight: '50px',
                fontSize: '20px',
                marginBottom: '8px',
                lineHeight: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[700],
                hover: {
                  filter: 'grayscale(0)',
                },
                marginLeft: '5px',
              }}
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
