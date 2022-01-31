import { useState } from 'react';
import { useRouter } from 'next/router';

import { Box, Button, Text, TextField, Image } from '@skynexui/components';

import appConfig from '../config.json';

function Title(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals['000']};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

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
          backgroundImage:
            'url(https://d1lss44hh2trtw.cloudfront.net/assets/article/2022/01/28/pokemon-legends-arceus-pokedex-size_feature.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
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
            backgroundColor: appConfig.theme.colors.neutrals[700],
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
            <Title tag="h1">Welcome to PokeChat!</Title>

            <TextField
              fullWidth
              value={username}
              onChange={handleChange}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Sign In"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
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
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            {username.length > 2 ? (
              <>
                <Image
                  styleSheet={{
                    borderRadius: '50%',
                    marginBottom: '16px',
                  }}
                  src={`https://github.com/${username}.png`}
                />
                <Text
                  variant="body4"
                  styleSheet={{
                    color: appConfig.theme.colors.neutrals[200],
                    backgroundColor: appConfig.theme.colors.neutrals[900],
                    padding: '3px 10px',
                    borderRadius: '1000px',
                  }}
                >
                  {username}
                </Text>
              </>
            ) : (
              ''
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
