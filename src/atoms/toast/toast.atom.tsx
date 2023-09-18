import { Box } from '@mobily/stacks';
import RNToast from 'react-native-toast-message';

import { Text } from '@/atoms';

export const Toast = () => {
  const toastConfig = {
    success: (props: any) => {
      return (
        <Box
          padding={16}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.30)',
            borderRadius: 5,
            borderWidth: 1,
          }}>
          <Text fontWeight="500" fontSize="14" lineHeight={20} color="white">
            {props.text1}
          </Text>
        </Box>
      );
    },
  };

  return <RNToast config={toastConfig} />;
};
