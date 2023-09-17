import { Box, Row, Rows, Stack } from '@mobily/stacks';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Image, TouchableOpacity } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { START_SCREEN_BANNER_IMG } from '@/assets';
import { Header, Icon, Text } from '@/atoms';
import { BasicLayout, ScrollView } from '@/layouts';
import { palette } from '@/utils';

type StartPoRScreenProps = {};

export type StartPoRScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'StartPoRScreen'
>;

export type StartPoRScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'StartPoRScreen'
>;

export const StartPoRScreen = ({}: StartPoRScreenProps) => {
  const navigation = useNavigation<StartPoRScreenNavigationProps>();

  const { t } = useTranslation();

  const handlePressCTAButton = () => {
    navigation.navigate('AssetListScreen');
  };

  return (
    <>
      <Header
        title={t('StartPoRScreen_header_title')}
        titleColor="primary"
        leftIconColor="black"
      />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <BasicLayout>
          <Rows>
            <Row height="fluid">
              <Stack space={80} align="center" paddingTop={50}>
                <Text
                  fontWeight="300"
                  fontSize="28"
                  lineHeight={36}
                  color="primary"
                  textAlignment="center">
                  {t('StartPoRScreen_content_title')}
                </Text>
                <Image
                  source={START_SCREEN_BANNER_IMG}
                  style={{ width: 178, height: 186 }}
                />
              </Stack>
            </Row>
            <Row height="content">
              <Stack space={20}>
                <Stack space={20} align="center">
                  <Stack horizontal space={4} align="center">
                    <Icon
                      name="exclamation"
                      size={16}
                      color={palette['white']}
                      style={{
                        backgroundColor: palette['primary'],
                        borderRadius: 16,
                      }}
                    />
                    <Text
                      fontWeight="500"
                      fontSize="12"
                      lineHeight={14.32}
                      color="primary"
                      letterSpacing={-0.24}>
                      {t('StartPoRScreen_content_warning')}
                    </Text>
                  </Stack>
                </Stack>
                <TouchableOpacity onPress={handlePressCTAButton}>
                  <Box
                    style={{
                      backgroundColor: palette['primary'],
                      borderRadius: 6,
                    }}
                    paddingX={18}
                    paddingY={14}
                    alignX="center">
                    <Text
                      fontWeight="700"
                      fontSize="18"
                      lineHeight={19.5}
                      color="white"
                      textAlignment="center">
                      내 자산 생성
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Stack>
            </Row>
          </Rows>
        </BasicLayout>
      </ScrollView>
    </>
  );
};
