import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { Pressable } from 'react-native';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type AssetBuySubmitProps = {};

export const AssetBuySubmit = memo<AssetBuySubmitProps>(() => {
  return (
    <Box
      style={{ backgroundColor: palette['white'] }}
      paddingX={16}
      paddingBottom={32}>
      <Pressable>
        <Box
          style={{ backgroundColor: palette['primary'], borderRadius: 5 }}
          alignX="center"
          paddingY={16}>
          <Text fontWeight="700" fontSize="18" lineHeight={20} color="white">
            매수
          </Text>
        </Box>
      </Pressable>
    </Box>
  );
});
