import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Modal from 'react-native-modal';

import ReportSuccessSVG from './report_success.svg';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type AssetPorConfirmReportModalProps = {
  isVisible: boolean;
  onPressConfirmButton: () => void;
};

export const AssetPorConfirmReportModal = memo<AssetPorConfirmReportModalProps>(
  ({ isVisible, onPressConfirmButton }) => {
    const { t } = useTranslation();
    const { width } = useWindowDimensions();

    const maxDeviceHeight = Math.max(
      Dimensions.get('window').height,
      Dimensions.get('screen').height,
    );

    const handlePressConfirmButton = () => {
      onPressConfirmButton();
    };

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
        backdropOpacity={0.7}>
        <Box
          alignX="center"
          alignY="center"
          alignSelf="center"
          flex="fluid"
          paddingX={50}>
          <Stack paddingY={24} style={{ backgroundColor: palette['white'] }}>
            <Stack space={28}>
              <Stack space={16}>
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
              <Stack space={16}>
                <Box
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: palette['primary'],
                  }}
                />
                <TouchableOpacity onPress={handlePressConfirmButton}>
                  <Text
                    fontWeight="500"
                    fontSize="16"
                    lineHeight={20}
                    color="primary">
                    {t('AssetPorConfirmScreen_reportModal_confirmButton')}
                  </Text>
                </TouchableOpacity>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    );
  },
);
