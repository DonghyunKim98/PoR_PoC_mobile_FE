import { Box, Stack } from '@mobily/stacks';
import LottieView from 'lottie-react-native';
import { memo } from 'react';

import { getPorConfirmLoadingText } from './asset-por-confirm-loading.util';

import { Text } from '@/atoms';

type AssetPorConfirmLoadingProps = {
  count: number;
};

export const AssetPoRConfirmLoading = memo<AssetPorConfirmLoadingProps>(
  ({ count }) => {
    const copy = getPorConfirmLoadingText(count);

    return (
      <Box
        flex="fluid"
        style={{ backgroundColor: 'rgba(7, 11, 34, 0.70)', width: '100%' }}
        alignX="center"
        alignY="center">
        <Stack space={8} align="center">
          <LottieView
            source={require('./search-lottie.json')}
            autoPlay
            loop
            style={{ width: 170, height: 100 }}
          />
          <Text
            fontWeight="500"
            fontSize="23"
            lineHeight={30}
            color="green"
            textAlignment="center">
            {copy}
          </Text>
        </Stack>
      </Box>
    );
  },
);
