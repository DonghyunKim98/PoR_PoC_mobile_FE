import { Box, Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import {
  AssetBuyScreenNavigationProps,
  AssetBuyScreenNavigationRouteProps,
} from '../../asset-buy.screen';

import { BuyAssetModalStep } from './asset-buy-modal.type';
import {
  getButtonTextByModalStep,
  getLottieSourceByModalStep,
  getTextByModalStep,
  getTextColorByStep,
} from './asset-buy-modal.util';

import { Modal, Text } from '@/atoms';
import { palette } from '@/utils';

type AssetBuyModalProps = {
  isVisible: boolean;
  value: number;
};

export const AssetBuyModal = memo<AssetBuyModalProps>(
  ({ isVisible, value }) => {
    const [screenStep, setScreenStep] =
      useState<BuyAssetModalStep>('BUY_ASSET');

    const navigation = useNavigation<AssetBuyScreenNavigationProps>();
    const {
      params: { key },
    } = useNavigation<AssetBuyScreenNavigationRouteProps>();

    const handlePressCTA = () => {
      navigation.replace('PrimaryStack', {
        screen: 'PrimaryOverTheCounterMarketScreen',
        params: { key },
      });
    };

    return (
      <Modal isVisible={isVisible}>
        <Box
          alignX="center"
          alignY="center"
          alignSelf="center"
          flex="fluid"
          style={{ width: '100%' }}>
          <Stack space={20} align="center">
            <Stack space={8} align="center">
              <LottieView
                source={getLottieSourceByModalStep(screenStep)}
                autoPlay
                loop
                style={{ width: 170, height: 100 }}
              />
              <Text
                fontWeight="500"
                fontSize="23"
                lineHeight={30}
                color={getTextColorByStep(screenStep)}
                textAlignment="center">
                {getTextByModalStep(screenStep)}
              </Text>
            </Stack>
            <TouchableOpacity
              onPress={handlePressCTA}
              style={[
                {
                  width: 120,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                screenStep !== 'BUY_ASSET' && {
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
                {getButtonTextByModalStep(screenStep)}
              </Text>
            </TouchableOpacity>
          </Stack>
        </Box>
      </Modal>
    );
  },
);
