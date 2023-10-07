import { Box } from '@mobily/stacks';
import { memo } from 'react';

import { palette } from '@/utils';

type PrimaryOverTheCounterMarketBannerProps = {};

export const PrimaryOverTheCounterMarketBanner =
  memo<PrimaryOverTheCounterMarketBannerProps>(() => {
    return (
      <Box
        direction="row"
        paddingY={20}
        alignX="center"
        style={{
          backgroundColor: palette['greenBackground'],
          borderRadius: 5,
        }}></Box>
    );
  });
