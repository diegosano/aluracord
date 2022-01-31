import { Box, Image, Text } from '@skynexui/components';

import appConfig from '../../config.json';

export function MessageList({ messages }) {
  console.log(messages);
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.secondary,
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
                fontSize: '1.5rem',
                borderRadius: '5px',
                padding: '6px',
                marginBottom: '12px',
                color: appConfig.theme.colors.white,
              }}
            >
              <Box
                styleSheet={{
                  marginBottom: '8px',
                }}
              >
                <Image
                  styleSheet={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'inline-block',
                    marginRight: '8px',
                  }}
                  src={`https://github.com/${message.from}.png`}
                />
                <Text
                  styleSheet={{
                    color: appConfig.theme.colors.purple,
                  }}
                  tag="strong"
                >
                  {message.from}
                </Text>
                <Text
                  styleSheet={{
                    fontSize: '10px',
                    marginLeft: '8px',
                    color: appConfig.theme.colors.white,
                  }}
                  tag="span"
                >
                  {new Date().toLocaleDateString()}
                </Text>
              </Box>
              {message?.text.startsWith(':sticker:') ? (
                <Image
                  styleSheet={{
                    maxWidth: '8rem',
                  }}
                  src={message.text.replace(':sticker:', '')}
                />
              ) : (
                message.text
              )}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
}
