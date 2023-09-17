import { Box } from '@mobily/stacks';
import { PropsWithChildren } from 'react';

import { palette } from '@/utils';

type BasicLayoutProps = PropsWithChildren<{
  backgroundColor?: keyof typeof palette;
}>;

export const BasicLayout = ({
  children,
  backgroundColor = 'white',
}: BasicLayoutProps) => {
  return (
    <Box
      flex="fluid"
      style={{
        width: '100%',
        backgroundColor: palette[backgroundColor],
      }}
      paddingX={24}
      paddingTop={10}
      paddingBottom={32}>
      {children}
    </Box>
  );
};
