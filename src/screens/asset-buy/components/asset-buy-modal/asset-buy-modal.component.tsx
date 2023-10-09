import { Box, Stack } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import isUndefined from 'lodash/isUndefined';
import LottieView from 'lottie-react-native';
import { memo, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useRecoilValue } from 'recoil';
import { useCountdown, useDidMount, useDidUpdate } from 'rooks';

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
import { usePostAssetBuyMutation } from './hooks';

import { Modal, Text } from '@/atoms';
import { $userKeyState } from '@/states';
import { palette } from '@/utils';

type AssetBuyModalProps = {
  isVisible: boolean;
  value: number;
  onNavigate: () => void;
};

export const AssetBuyModal = memo<AssetBuyModalProps>(
  ({ isVisible, value, onNavigate }) => {
    const [screenStep, setScreenStep] =
      useState<BuyAssetModalStep>('BUY_ASSET');
    const { key } = useRecoilValue($userKeyState);

    const navigation = useNavigation<AssetBuyScreenNavigationProps>();
    const {
      params: { assetId },
    } = useRoute<AssetBuyScreenNavigationRouteProps>();

    const [isCountDownEnd, setIsCountDownEnd] = useState(false);
    const endTimeRef = useRef(new Date(Date.now() + 3000));

    const { mutateAsync, data } = usePostAssetBuyMutation({
      key,
      assetId,
      amount: value.toString(),
    });

    useDidMount(() => {
      mutateAsync();
    });

    useCountdown(endTimeRef.current, {
      interval: 1000,
      onEnd: () => setIsCountDownEnd(true),
    });

    useDidUpdate(() => {
      if (!isUndefined(data) && isCountDownEnd) {
        const { success } = data;

        setScreenStep('CONFIRM_ASSET');
      }
    }, [data, isCountDownEnd]);

    const handlePressCTA = () => {
      onNavigate();

      navigation.replace('PrimaryStack', {
        screen: 'PrimaryOverTheCounterMarketScreen',
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
