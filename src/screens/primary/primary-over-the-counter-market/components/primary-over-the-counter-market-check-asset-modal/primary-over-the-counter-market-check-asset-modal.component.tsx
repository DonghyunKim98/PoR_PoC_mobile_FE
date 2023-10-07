import { Box, Stack, useWindowDimensions } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { memo } from 'react';
import { Dimensions } from 'react-native';
import Modal from 'react-native-modal';

import { PrimaryOverTheCounterMarketScreenNavigatorProp } from '../../primary-over-the-counter-market.screen';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type PrimaryOverTheCounterMarketCheckAssetModalProps = {
  isVisible: boolean;
  type: 'BUY' | 'SELL';
};

export const PrimaryOverTheCounterMarketCheckAssetModal =
  memo<PrimaryOverTheCounterMarketCheckAssetModalProps>(
    ({ isVisible, type }) => {
      const { width } = useWindowDimensions();

      const navigation =
        useNavigation<PrimaryOverTheCounterMarketScreenNavigatorProp>();

      const maxDeviceHeight = Math.max(
        Dimensions.get('window').height,
        Dimensions.get('screen').height,
      );

      return (
        <Modal
          animationIn="fadeIn"
          animationOut="fadeOut"
          useNativeDriver
          statusBarTranslucent
          isVisible={isVisible}
          backdropColor={palette['gray-900']}
          deviceHeight={maxDeviceHeight}
          deviceWidth={width}
          backdropOpacity={0.8}
          style={{ margin: 0 }}>
          <Box
            alignX="center"
            alignY="center"
            alignSelf="center"
            flex="fluid"
            style={{ width: '100%' }}>
            <Stack space={8} align="center">
              <LottieView
                source={require('./check-asset-lottie.json')}
                autoPlay
                loop
                style={{ width: 170, height: 100 }}
              />
              <Text
                fontWeight="500"
                fontSize="23"
                lineHeight={30}
                color="white"
                textAlignment="center">
                {type === 'BUY'
                  ? '관리기관에 매수 가능 잔고가\n존재하는지 확인중에 있습니다'
                  : '관리기관에 매도 가능 잔고가\n존재하는지 확인중에 있습니다.'}
              </Text>
            </Stack>
          </Box>
        </Modal>
      );
    },
  );
