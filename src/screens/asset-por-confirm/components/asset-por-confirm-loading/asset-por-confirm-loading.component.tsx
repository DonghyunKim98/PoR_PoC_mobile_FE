import { Box } from '@mobily/stacks';
import LottieView from 'lottie-react-native';
import { memo } from 'react';

type AssetPorConfirmLoadingProps = {};

export const AssetPoRConfirmLoading = memo<AssetPorConfirmLoadingProps>(() => {
  return (
    <Box
      flex="fluid"
      style={{ backgroundColor: 'rgba(7, 11, 34, 0.70)', width: '100%' }}
      alignX="center"
      alignY="center">
      <LottieView
        source={require('./search-lottie.json')}
        autoPlay
        loop
        style={{ width: 170, height: 100 }}
      />
    </Box>
  );
});
