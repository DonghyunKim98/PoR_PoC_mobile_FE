import { Box, Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { isUndefined } from 'lodash';
import LottieView from 'lottie-react-native';
import { memo, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useRecoilValue } from 'recoil';
import { useCountdown, useDidUpdate } from 'rooks';

import { PrimaryOverTheCounterMarketScreenNavigatorProp } from '../../primary-over-the-counter-market.screen';

import {
  CheckAssetModalStep,
  CheckAssetModalType,
} from './primary-over-the-counter-market-check-asset-modal.type';
import {
  getButtonTextByModalTypeAndStep,
  getLottieSourceByModalStep,
  getTextByModalTypeAndStep,
  getTextColorByStep,
} from './primary-over-the-counter-market-check-asset-modal.util';

import { Modal, Text } from '@/atoms';
import { useGetPoRForUserQuery } from '@/hooks';
import { $userKeyState } from '@/states';
import { palette } from '@/utils';

type PrimaryOverTheCounterMarketCheckAssetModalProps = {
  assetId: string;
  isVisible: boolean;
  type: CheckAssetModalType;
  onNavigate: () => void;
};

export const PrimaryOverTheCounterMarketCheckAssetModal =
  memo<PrimaryOverTheCounterMarketCheckAssetModalProps>(
    ({ isVisible, type, assetId, onNavigate }) => {
      const [screenStep, setScreenStep] =
        useState<CheckAssetModalStep>('CHECK_ASSET');
      const [isCountDownEnd, setIsCountDownEnd] = useState(false);

      const { key } = useRecoilValue($userKeyState);

      const endTimeRef = useRef(new Date(Date.now() + 3000));

      const navigation =
        useNavigation<PrimaryOverTheCounterMarketScreenNavigatorProp>();

      const { data } = useGetPoRForUserQuery({
        key,
        assetId,
        enabled: isVisible,
      });

      useCountdown(endTimeRef.current, {
        interval: 1000,
        onEnd: () => setIsCountDownEnd(true),
      });

      useDidUpdate(() => {
        if (!isUndefined(data) && isCountDownEnd) {
          const { isCoincided } = data;

          setScreenStep(isCoincided ? 'CONFIRM_ASSET' : 'NOT_COINCIDED');
        }
      }, [data, isCountDownEnd]);

      const handlePressCTA = () => {
        onNavigate();
        setScreenStep('CHECK_ASSET');
        setIsCountDownEnd(false);

        if (screenStep === 'NOT_COINCIDED') {
          return;
        }

        if (type === 'BUY') {
          navigation.navigate('AssetBuyScreen', { assetId });
          return;
        }
        navigation.navigate('AssetSellScreen', { assetId });
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
                  {getTextByModalTypeAndStep(type, screenStep)}
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
