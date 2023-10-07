import { Column, Columns, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { Image } from 'react-native';

import { BANNER_ITEMS } from './primary-over-the-counter-market-banner.const';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type PrimaryOverTheCounterMarketBannerProps = {};

export const PrimaryOverTheCounterMarketBanner =
  memo<PrimaryOverTheCounterMarketBannerProps>(() => {
    return (
      <Columns
        paddingY={20}
        style={{
          backgroundColor: palette['greenBackground'],
          borderRadius: 5,
        }}>
        {BANNER_ITEMS.map(({ img, title, content }, index) => (
          <Column
            key={title}
            style={[
              index === 0 && {
                borderRightColor: palette['white'],
                borderRightWidth: 0.5,
              },
            ]}>
            <Stack key={title} space={4} align="center">
              <Image source={img} style={{ height: 27, width: 26 }} />
              <Text
                fontSize="16"
                fontWeight="700"
                lineHeight={20}
                color="white">
                {title}
              </Text>
              <Text
                fontSize="10"
                fontWeight="500"
                lineHeight={13}
                color="white">
                {content}
              </Text>
            </Stack>
          </Column>
        ))}
      </Columns>
    );
  });
