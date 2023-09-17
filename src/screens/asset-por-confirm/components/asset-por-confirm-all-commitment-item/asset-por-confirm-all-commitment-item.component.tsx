import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type AssetPorConfirmAllCommitmentItemProps = {
  isMyAsset: boolean;
  commitment: [string, string];
};

export const AssetPorConfirmAllCommitmentItem =
  memo<AssetPorConfirmAllCommitmentItemProps>(({ isMyAsset, commitment }) => {
    const { t } = useTranslation();

    return (
      <Box
        paddingX={24}
        style={{
          ...(isMyAsset && { backgroundColor: palette['green-outline'] }),
        }}>
        <Columns
          style={{ borderTopWidth: 1, borderTopColor: palette['gray-200'] }}
          space={20}
          paddingY={12}
          alignY="center">
          <Column
            width="content"
            style={{
              minWidth: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {isMyAsset ? (
              <Stack space={2} align="center">
                <Icon
                  name="check-circle"
                  size={15}
                  color={palette['primary']}
                />
                <Text
                  fontWeight="700"
                  fontSize="8"
                  lineHeight={12}
                  letterSpacing={-0.4}
                  color="primary">
                  {t('AssetPorConfirmScreen_allCommitment_myCommitment')}
                </Text>
              </Stack>
            ) : (
              <Box
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: palette['gray-200'],
                  borderRadius: 10,
                }}
              />
            )}
          </Column>
          <Column width="fluid">
            <Text
              fontWeight="300"
              fontSize="12"
              lineHeight={12}
              color="gray-800">
              {commitment[0] + ',' + commitment[1]}
            </Text>
          </Column>
        </Columns>
      </Box>
    );
  });
