import { useState } from 'react';
import { Box, Button, Text, Image } from '@skynexui/components';

import appConfig from '../../config.json';

export function ButtonStickers({ onStickerClick }) {
  const [isOpen, setOpenState] = useState(false);

  return (
    <Box
      styleSheet={{
        position: 'relative',
      }}
    >
      <Button
        buttonColors={{
          mainColor: appConfig.theme.colors.green,
        }}
        styleSheet={{
          borderRadius: '4px',
          minWidth: '50px',
          minHeight: '50px',
          fontSize: '20px',
          marginBottom: '8px',
          lineHeight: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.green,
          hover: {
            filter: 'brightness(0.7)',
          },
        }}
        label="😋"
        onClick={() => setOpenState(!isOpen)}
      />
      {isOpen && (
        <Box
          styleSheet={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '5px',
            position: 'absolute',
            backgroundColor: appConfig.theme.colors.secondary,
            width: {
              xs: '200px',
              sm: '290px',
            },
            height: '300px',
            right: '30px',
            bottom: '30px',
            padding: '16px',
            boxShadow:
              'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px',
          }}
          onClick={() => setOpenState(false)}
        >
          <Text
            styleSheet={{
              color: appConfig.theme.colors.white,
              fontWeight: 'bold',
            }}
          >
            Stickers
          </Text>
          <Box
            tag="ul"
            styleSheet={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              flex: 1,
              paddingTop: '16px',
              overflow: 'scroll',
            }}
          >
            {appConfig.stickers.map((sticker, index) => (
              <Text
                key={index}
                onClick={() => {
                  if (Boolean(onStickerClick)) {
                    onStickerClick(sticker);
                  }
                }}
                tag="li"
                key={sticker}
                styleSheet={{
                  width: '50%',
                  borderRadius: '5px',
                  padding: '10px',
                  hover: {
                    backgroundColor: appConfig.theme.colors.purple,
                  },
                }}
              >
                <Image src={sticker} />
              </Text>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
