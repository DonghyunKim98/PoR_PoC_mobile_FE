import { Box, Stack } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';
import { useDidUpdate } from 'rooks';

import { AssetPoRConfirmScreenNavigationRouteProps } from '../../asset-por-confirm.screen';

import { usePostReportMutation } from './hooks';
import ReportSuccessSVG from './report_success.svg';

import { Modal, Text } from '@/atoms';
import { MutationIndicator } from '@/providers';
import { palette } from '@/utils';

type AssetPorConfirmReportModalProps = {
  isVisible: boolean;
  onPressConfirmButton: () => void;
};

export const AssetPorConfirmReportModal = memo<AssetPorConfirmReportModalProps>(
  ({ isVisible, onPressConfirmButton }) => {
    const { t } = useTranslation();

    const { isLoading, mutateAsync } = usePostReportMutation();
    const {
      params: { assetId },
    } = useRoute<AssetPoRConfirmScreenNavigationRouteProps>();

    useDidUpdate(() => {
      if (isVisible) {
        mutateAsync();
      }
    }, [isVisible]);

    const handlePressConfirmButton = () => {
      onPressConfirmButton();
    };

    if (isLoading) {
      return <MutationIndicator isMutating={isLoading} />;
    }

    return (
      <Modal isVisible={isVisible}>
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
                    companyName: t(`SingleAsset_id${assetId}_companyName`),
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
