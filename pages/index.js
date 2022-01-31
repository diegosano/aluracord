import { useState } from 'react';
import { useRouter } from 'next/router';

import { Box, Button, Text, TextField, Image } from '@skynexui/components';

import appConfig from '../config.json';

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setUsername(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push({
      pathname: '/chat',
      query: {
        username,
      },
    });
  };

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.background,
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%',
            maxWidth: '700px',
            borderRadius: '5px',
            padding: '32px',
            margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.secondary,
          }}
        >
          <Box
            as="form"
            onSubmit={handleSubmit}
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '100%', sm: '50%' },
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            <Text
              styleSheet={{
                color: appConfig.theme.colors.white,
                fontSize: '2rem',
                fontWeight: '600',
                marginBottom: '2rem',
              }}
              tag="h1"
            >
              Welcome to{' '}
              <Text
                styleSheet={{
                  color: appConfig.theme.colors.purple,
                  fontSize: '3rem',
                  fontWeight: '600',
                  fontFamily: 'Abril Text',
                }}
                tag="span"
              >
                Dracula{' '}
              </Text>
              chat!
            </Text>

            <TextField
              fullWidth
              value={username}
              onChange={handleChange}
              placeholder="Github username"
              size="lg"
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.background,
                  mainColor: appConfig.theme.colors.green,
                  mainColorHighlight: appConfig.theme.colors.purple,
                  backgroundColor: appConfig.theme.colors.white,
                },
              }}
            />
            <Button
              type="submit"
              label="Sign In"
              variant="primary"
              size="xl"
              fullWidth
              styleSheet={{
                hover: {
                  filter: 'brightness(0.8)',
                },
              }}
              buttonColors={{
                mainColor: appConfig.theme.colors.green,
              }}
            />
          </Box>
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.background,
              border: '1px solid',
              borderColor: appConfig.theme.colors.purple,
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            {
              <>
                <Image
                  styleSheet={{
                    borderRadius: '50%',
                    marginBottom: '16px',
                  }}
                  src={
                    username.length > 2
                      ? `https://github.com/${username}.png`
                      : 'https://draculatheme.com/static/icons/used/pack-1/045-dracula.svg'
                  }
                />
                <Text
                  variant="body4"
                  styleSheet={{
                    fontSize: '1.5rem',
                    color: appConfig.theme.colors.white,
                  }}
                >
                  {username.length > 2 ? username : 'Dracula'}
                </Text>
              </>
            }
          </Box>
        </Box>
      </Box>
    </>
  );
}
