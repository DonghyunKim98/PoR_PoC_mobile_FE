import { Box, Column, Columns } from '@mobily/stacks';
import { memo } from 'react';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type AssetPorConfirmAllCommitmentItemProps = {
  isMyAsset: boolean;
  commitment: [string, string];
};

export const AssetPorConfirmAllCommitmentItem =
  memo<AssetPorConfirmAllCommitmentItemProps>(({ isMyAsset, commitment }) => {
    return (
      <Box paddingX={24}>
        <Columns
          style={{ borderTopWidth: 1, borderTopColor: palette['gray-200'] }}
          space={24}
          paddingLeft={13}
          paddingY={12}
          alignY="center">
          <Column width="content">
            <Box
              style={{
                width: 10,
                height: 10,
                backgroundColor: palette['gray-200'],
                borderRadius: 10,
              }}
            />
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
