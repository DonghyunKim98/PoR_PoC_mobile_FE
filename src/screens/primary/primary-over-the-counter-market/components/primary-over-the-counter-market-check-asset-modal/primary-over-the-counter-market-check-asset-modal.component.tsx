import { Box, Stack, useWindowDimensions } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { memo, useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import { PrimaryOverTheCounterMarketScreenNavigatorProp } from '../../primary-over-the-counter-market.screen';

import { CHECK_ASSET_LOTTIE } from './assets';
import {
  CheckAssetModalStep,
  CheckAssetModalType,
} from './primary-over-the-counter-market-check-asset-modal.type';
import {
  getButtonTextByModalTypeAndStep,
  getTextByModalTypeAndStep,
} from './primary-over-the-counter-market-check-asset-modal.util';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type PrimaryOverTheCounterMarketCheckAssetModalProps = {
  isVisible: boolean;
  type: CheckAssetModalType;
};

export const PrimaryOverTheCounterMarketCheckAssetModal =
  memo<PrimaryOverTheCounterMarketCheckAssetModalProps>(
    ({ isVisible, type }) => {
      const { width } = useWindowDimensions();
      const [screenStep, setScreenStep] =
        useState<CheckAssetModalStep>('CHECK_ASSET');

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
            <Stack space={20} align="center">
              <LottieView
                source={CHECK_ASSET_LOTTIE}
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
                {getTextByModalTypeAndStep(type, screenStep)}
              </Text>
              <TouchableOpacity
                style={[
                  {
                    width: 120,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  screenStep !== 'CHECK_ASSET' && {
                    borderWidth: 1,
                    borderColor: palette['white'],
                    borderRadius: 50,
                  },
                ]}>
                <Text
                  fontWeight="500"
                  fontSize="16"
                  lineHeight={32}
                  color="white">
                  {getButtonTextByModalTypeAndStep(type, screenStep)}
                </Text>
              </TouchableOpacity>
            </Stack>
          </Box>
        </Modal>
      );
    },
  );
