import { Box, Stack } from '@mobily/stacks';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';

import { AssetPorConfirmReportModal } from '../asset-por-confirm-report-modal';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type AssetPoRConfirmMyInfoComponentProps = {
  isIncluded: boolean;
  isCoincided: boolean;
  myAsset: string;
  unit: string;
};

export const AssetPoRConfirmMyInfoComponent = memo(
  ({
    isIncluded,
    isCoincided,
    myAsset,
    unit,
  }: AssetPoRConfirmMyInfoComponentProps) => {
    const [isVisibleReportModal, setIsVisibleReportModal] =
      useState<boolean>(false);

    const handlePressReportButton = () => {
      setIsVisibleReportModal(true);
    };

    const onPressConfirmButtonInReportModal = () => {
      setIsVisibleReportModal(false);
    };
    const { t } = useTranslation();

    return (
      <>
        <AssetPorConfirmReportModal
          onPressConfirmButton={onPressConfirmButtonInReportModal}
          isVisible={isVisibleReportModal}
        />
        <Stack space={20}>
          <Stack space={8}>
            <Stack horizontal space={6} align="center">
              <Icon name="check-circle" size={16} color={palette['green']} />
              <Text
                fontWeight="700"
                fontSize="14"
                lineHeight={14}
                color="green">
                {t('assetProConfirmScreen_myInfo_isIncluded_true')}
              </Text>
            </Stack>
            <Box direction="row" alignX="between">
              <Stack horizontal space={6} align="center">
                <Icon
                  name="check-circle"
                  size={16}
                  color={isCoincided ? palette['white'] : palette['error']}
                />
                <Text
                  fontWeight="700"
                  fontSize="14"
                  lineHeight={14}
                  color={isCoincided ? 'white' : 'error'}>
                  {isCoincided
                    ? t('assetProConfirmScreen_myInfo_isCoincided_true')
                    : t('assetProConfirmScreen_myInfo_isCoincided_false')}
                </Text>
              </Stack>
              {!isCoincided && (
                <TouchableOpacity onPress={handlePressReportButton}>
                  <Box
                    paddingX={9}
                    paddingY={5}
                    style={{
                      backgroundColor: palette['error'],
                      borderRadius: 50,
                    }}>
                    <Text
                      fontWeight="700"
                      fontSize="10"
                      lineHeight={10}
                      color="white">
                      {t('assetProConfirmScreen_myInfo_report')}
                    </Text>
                  </Box>
                </TouchableOpacity>
              )}
            </Box>
          </Stack>
          <Box
            direction="row"
            paddingX={12}
            paddingY={8}
            alignX="between"
            style={{
              backgroundColor: palette['gray-800'],
              borderRadius: 5,
              height: 60,
            }}>
            <Text
              fontWeight="400"
              fontSize="12"
              lineHeight={14.32}
              color="white">
              {t('assetProConfirmScreen_myInfo_myAsset')}
            </Text>
            <Stack
              space={5}
              horizontal
              style={{ alignSelf: 'flex-end' }}
              align="bottom">
              <Text
                fontWeight="400"
                fontSize="20"
                lineHeight={20}
                color="white">
                {myAsset}
              </Text>
              <Text
                fontWeight="400"
                fontSize="12"
                lineHeight={12}
                color="white"
                style={{ marginBottom: 2 }}>
                {unit}
              </Text>
            </Stack>
          </Box>
        </Stack>
      </>
    );
  },
);
