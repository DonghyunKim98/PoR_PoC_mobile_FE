import { Box } from '@mobily/stacks';
import { memo } from 'react';

type HeaderProps = {};

export const Header = memo<HeaderProps>(({}: HeaderProps) => {
  return (
    <Box
      style={{ height: 40 }}
      alignY="center"
      alignX="between"
      paddingX={24}></Box>
  );
});
