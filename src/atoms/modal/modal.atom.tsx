import { PropsWithChildren } from 'react';
import { Dimensions, useWindowDimensions } from 'react-native';
import RNModal from 'react-native-modal';

import { palette } from '@/utils';

export type ModalProps = PropsWithChildren<{ isVisible: boolean }>;

export const Modal = (props: ModalProps) => {
  const { width } = useWindowDimensions();

  const maxDeviceHeight = Math.max(
    Dimensions.get('window').height,
    Dimensions.get('screen').height,
  );

  return (
    <RNModal
      {...props}
      animationIn="fadeIn"
      animationOut="fadeOut"
      useNativeDriver
      statusBarTranslucent
      backdropColor={palette['gray-900']}
      deviceHeight={maxDeviceHeight}
      deviceWidth={width}
      backdropOpacity={0.8}
      style={{ margin: 0 }}
    />
  );
};
