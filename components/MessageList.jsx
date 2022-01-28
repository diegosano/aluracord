import { Box, Button, Image, Text } from '@skynexui/components';

import appConfig from '../config.json';

export function MessageList({ messages, setMessages }) {
  const deleteMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals['000'],
        marginBottom: '16px',
      }}
    >
      {messages.map((message) => {
        return (
          <Box
            key={message.id}
            styleSheet={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text
              tag="li"
              styleSheet={{
                borderRadius: '5px',
                padding: '6px',
                marginBottom: '12px',
                hover: {
                  backgroundColor: appConfig.theme.colors.neutrals[700],
                },
              }}
            >
              <Box
                styleSheet={{
                  marginBottom: '8px',
                }}
              >
                <Image
                  styleSheet={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    display: 'inline-block',
                    marginRight: '8px',
                  }}
                  src={`https://github.com/${message.from}.png`}
                />
                <Text tag="strong">{message.from}</Text>
                <Text
                  styleSheet={{
                    fontSize: '10px',
                    marginLeft: '8px',
                    color: appConfig.theme.colors.neutrals[300],
                  }}
                  tag="span"
                >
                  {new Date().toLocaleDateString()}
                </Text>
              </Box>
              {message.text}
            </Text>
            <Button
              colorVariant="dark"
              iconName="FaRegTrashAlt"
              onClick={() => deleteMessage(message.id)}
              styleSheet={{
                margin: '6px',
                backgroundColor: appConfig.theme.colors.neutrals[600],
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
}
