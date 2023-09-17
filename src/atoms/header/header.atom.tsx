import { Box } from '@mobily/stacks';
import { useBackHandler } from '@react-native-community/hooks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { Icon } from '../icon';
import { Text } from '../text';

import { palette } from '@/utils';

type HeaderProps = {
  title: string;
  titleColor: keyof typeof palette;
  leftIconColor: keyof typeof palette;
};

export const Header = memo<HeaderProps>(
  ({ title, leftIconColor, titleColor }: HeaderProps) => {
    const navigation = useNavigation();

    useBackHandler(() => {
      return false;
    });

    const renderLeft = () => {
      const handlePressLeftButton = () => {
        navigation.goBack();
      };

      if (!navigation.canGoBack()) {
        return <Box flex="content" style={{ width: 24 }} />;
      }

      return (
        <Box flex="content">
          <TouchableOpacity onPress={handlePressLeftButton}>
            <Icon name="arrow-left" size={24} color={palette[leftIconColor]} />
          </TouchableOpacity>
        </Box>
      );
    };

    return (
      <Box
        style={{ height: 40, backgroundColor: palette['white'] }}
        direction="row"
        alignY="center"
        alignX="between"
        paddingX={24}>
        {renderLeft()}
        <Box flex="fluid" alignY="center" alignX="center">
          <Text
            fontWeight="700"
            fontSize="20"
            lineHeight={20}
            color={titleColor}
            textAlignment="center">
            {title}
          </Text>
        </Box>
        <Box flex="content" style={{ width: 24 }} />
      </Box>
    );
  },
);
