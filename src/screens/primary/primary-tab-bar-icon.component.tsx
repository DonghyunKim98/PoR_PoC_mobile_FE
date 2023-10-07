import { Box } from '@mobily/stacks';

import { palette } from '@/utils';

type PrimaryTabBarIconProps = {
  focused: boolean;
};

export const PrimaryTabBarIcon = ({ focused }: PrimaryTabBarIconProps) => {
  return (
    <Box
      style={{
        width: 28,
        height: 28,
        borderRadius: 28,
        backgroundColor: focused ? palette['primary'] : palette['white'],
      }}
      alignX="center"
      alignY="center">
      <Box
        style={{
          width: 18,
          height: 18,
          borderRadius: 18,
          backgroundColor: focused ? palette['white'] : palette['primary'],
        }}
      />
    </Box>
  );
};
