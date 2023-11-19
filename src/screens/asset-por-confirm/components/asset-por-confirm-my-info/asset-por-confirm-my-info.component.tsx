import { Box, Stack } from '@mobily/stacks';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AssetPorConfirmReportModal } from '../asset-por-confirm-report-modal';

import { Icon, Text } from '@/atoms';
import { addCommasToNumber, palette } from '@/utils';

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
          <Stack space={20}>
            <Stack horizontal space={6} align="center">
              <Stack horizontal space={6} align="center" style={{ width: 110 }}>
                <Icon name="check-circle" size={30} color={palette['green']} />
                <Text
                  fontSize="12"
                  fontWeight="400"
                  lineHeight={15}
                  color="green">
                  {'내 자산이\n전체 자산 안에'}
                </Text>
              </Stack>

              <Text
                fontWeight="700"
                fontSize="28"
                lineHeight={30}
                color="green">
                포함되어 있습니다.
              </Text>
            </Stack>
            <Box direction="row" alignX="between">
              <Stack horizontal space={6} align="center">
                <Stack
                  horizontal
                  space={6}
                  align="center"
                  style={{ minWidth: 110 }}>
                  <Icon
                    name="check-circle"
                    size={30}
                    color={isCoincided ? palette['green'] : palette['error']}
                  />
                  <Text
                    fontSize="12"
                    fontWeight="400"
                    lineHeight={15}
                    color={isCoincided ? 'green' : 'error'}>
                    {'공표된 자산이\n실제 총자산과'}
                  </Text>
                </Stack>
                <Text
                  fontWeight="700"
                  fontSize="28"
                  lineHeight={30}
                  color={isCoincided ? 'green' : 'error'}>
                  {isCoincided ? '일치 합니다.' : '불일치 합니다.'}
                </Text>
              </Stack>
              {/* {!isCoincided && (
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
              )} */}
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
                {addCommasToNumber(myAsset)}
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
