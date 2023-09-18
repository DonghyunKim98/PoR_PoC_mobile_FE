import { Box } from '@mobily/stacks';
import {
  ActivityIndicator,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import Modal from 'react-native-modal';

import { palette } from '@/utils';

type MutationIndicatorProps = {
  isMutating: boolean;
};

export const MutationIndicator = ({ isMutating }: MutationIndicatorProps) => {
  const { width } = useWindowDimensions();

  const maxDeviceHeight = Math.max(
    Dimensions.get('window').height,
    Dimensions.get('screen').height,
  );

  return (
    <Modal
      isVisible={isMutating}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropColor={palette['gray-900']}
      backdropOpacity={0.7}
      useNativeDriver
      statusBarTranslucent
      deviceHeight={maxDeviceHeight}
      deviceWidth={width}
      avoidKeyboard>
      <Box alignX="center" alignY="center" alignSelf="center" flex="fluid">
        <ActivityIndicator
          animating={true}
          color={palette['primary']}
          size="small"
        />
      </Box>
    </Modal>
  );
};
