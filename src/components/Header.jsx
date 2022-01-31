import { Box, Button, Text } from '@skynexui/components';

import appConfig from '../../config.json';

export function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: '100%',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text variant="heading3">Chat</Text>
        <Button
          label="Sign Out"
          href="/"
          styleSheet={{
            borderRadius: '4px',
            backgroundColor: appConfig.theme.colors.pink,
            color: appConfig.theme.colors.background,
            hover: {
              filter: 'brightness(0.7)',
            },
            marginLeft: '5px',
          }}
          buttonColors={
            {
              mainColor: appConfig.theme.colors.pink,
            }
          }
        />
      </Box>
    </>
  );
}
