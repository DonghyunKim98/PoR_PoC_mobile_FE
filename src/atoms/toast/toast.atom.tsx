import { Box } from '@mobily/stacks';
import RNToast from 'react-native-toast-message';

import { Text } from '@/atoms';

export const Toast = () => {
  const toastConfig = {
    success: (props: any) => {
      return (
        <Box paddingX={20}>
          <Box
            padding={16}
            style={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.20)',
              borderRadius: 5,
            }}>
            <Text fontWeight="500" fontSize="14" lineHeight={20} color="white">
              내 자산 데이터가 클립보드에 복사되었습니다.
            </Text>
          </Box>
        </Box>
      );
    },
  };

  return <RNToast config={toastConfig} />;
};
