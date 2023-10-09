import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Pressable } from 'react-native';

import { Text, Trans } from '@/atoms';
import { getReadAssetsResponseData } from '@/hooks';
import { palette } from '@/utils';

type PrimaryNewSecurityTokenItemProps = getReadAssetsResponseData['data'][0];

export const PrimaryNewSecurityTokenItem =
  memo<PrimaryNewSecurityTokenItemProps>(({ logoUrl, assetId }) => {
    const { t } = useTranslation();

    return (
      <Pressable>
        {({ pressed }) => (
          <Box
            style={[
              {
                borderWidth: 1,
                borderColor: palette['primary'],
                borderRadius: 6,
              },
              pressed && { borderColor: palette['greenBackground'] },
            ]}>
            <Box paddingX={12} paddingTop={20} paddingBottom={24}>
              <Stack horizontal space={10}>
                <Image
                  source={{ uri: logoUrl }}
                  style={{ width: 30, height: 30 }}
                  resizeMode="contain"
                />
                <Stack space={24} marginTop={5}>
                  <Text
                    fontWeight="700"
                    fontSize="18"
                    lineHeight={18}
                    color="greenBackground">
                    {t(`SingleAsset_id${assetId}_name`)}
                    <Text
                      fontWeight="500"
                      fontSize="18"
                      lineHeight={18}
                      color="greenBackground">
                      {`(투자계약 증권 ${assetId}호)`}
                    </Text>
                  </Text>
                  <Text
                    fontWeight="400"
                    fontSize="18"
                    lineHeight={25}
                    color="primary">
                    <Trans i18nKey={`NewSecurityToken_content_id${assetId}`} />
                  </Text>
                </Stack>
              </Stack>
            </Box>
            <Box
              paddingY={14}
              paddingX={18}
              alignX="right"
              style={[
                {
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  backgroundColor: palette['gray-700'],
                },
                pressed && { backgroundColor: palette['greenBackground'] },
              ]}>
              <Text
                fontWeight="600"
                fontSize="14"
                lineHeight={20}
                color="white"
                textAlignment="right">
                {'자산 데이터를 통해\n안전성 확인하기'}
              </Text>
            </Box>
          </Box>
        )}
      </Pressable>
    );
  });
