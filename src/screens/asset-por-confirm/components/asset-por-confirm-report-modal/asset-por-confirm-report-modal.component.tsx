import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import { useDidUpdate } from 'rooks';

import { usePostReportMutation } from './hooks';
import ReportSuccessSVG from './report_success.svg';

import { Text } from '@/atoms';
import { MutationIndicator } from '@/providers';
import { palette } from '@/utils';

type AssetPorConfirmReportModalProps = {
  isVisible: boolean;
  onPressConfirmButton: () => void;
};

export const AssetPorConfirmReportModal = memo<AssetPorConfirmReportModalProps>(
  ({ isVisible, onPressConfirmButton }) => {
    const { t } = useTranslation();
    const { width } = useWindowDimensions();

    const { isLoading, mutateAsync } = usePostReportMutation();

    useDidUpdate(() => {
      if (isVisible) {
        mutateAsync();
      }
    }, [isVisible]);

    const maxDeviceHeight = Math.max(
      Dimensions.get('window').height,
      Dimensions.get('screen').height,
    );

    const handlePressConfirmButton = () => {
      onPressConfirmButton();
    };

    if (isLoading) {
      return <MutationIndicator isMutating={isLoading} />;
    }

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
        backdropOpacity={0.7}
        style={{ margin: 0 }}>
        <Box
          alignX="center"
          alignY="center"
          alignSelf="center"
          flex="fluid"
          paddingX={50}
          style={{ width: '100%' }}>
          <Stack
            paddingY={24}
            style={{ backgroundColor: palette['white'] }}
            align="center">
            <Stack space={28}>
              <Stack space={16} align="center">
                <ReportSuccessSVG width={48} height={48} />
                <Text
                  fontWeight="400"
                  fontSize="16"
                  lineHeight={20}
                  color="primary">
                  {t('AssetPorConfirmScreen_reportModal_title', {
                    companyName: '이더리움 재단',
                  })}
                </Text>
              </Stack>
              <TouchableOpacity onPress={handlePressConfirmButton}>
                <Stack space={16} align="center">
                  <Box
                    style={{
                      width: '100%',
                      height: 1,
                      backgroundColor: palette['primary'],
                    }}
                  />
                  <Text
                    fontWeight="500"
                    fontSize="16"
                    lineHeight={20}
                    color="primary">
                    {t('AssetPorConfirmScreen_reportModal_confirmButton')}
                  </Text>
                </Stack>
              </TouchableOpacity>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    );
  },
);
