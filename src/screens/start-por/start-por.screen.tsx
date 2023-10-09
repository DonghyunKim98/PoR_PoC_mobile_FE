import { Box, Row, Rows, Stack } from '@mobily/stacks';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Image, TouchableOpacity } from 'react-native';
import { useRecoilState } from 'recoil';
import { useDidUpdate } from 'rooks';

import { $userKeyState } from '../../states';
import { RootStackParamList } from '../root.navigator';

import { usePostNewAssetMutation } from './hooks';
import WarningCircleSVG from './warning-circle 2.svg';

import { START_SCREEN_BANNER_IMG } from '@/assets';
import { Header, Text } from '@/atoms';
import { BasicLayout, ScrollView } from '@/layouts';
import { useMutationIndicator } from '@/providers';
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
  const { t } = useTranslation();

  const { mutateAsync, isLoading: isPostingNewAsset } =
    usePostNewAssetMutation();
  const navigation = useNavigation<StartPoRScreenNavigationProps>();
  const [{ key }, setUserKeyState] = useRecoilState($userKeyState);

  useMutationIndicator([isPostingNewAsset]);

  useDidUpdate(() => {
    navigation.navigate('PrimaryStack', {
      screen: 'PrimaryOverTheCounterMarketScreen',
    });
  }, [key]);

  const handlePressCTAButton = async () => {
    const { key } = await mutateAsync();

    setUserKeyState({ key });
  };

  return (
    <>
      <Header
        title={t('StartPoRScreen_header_title')}
        titleColor="primary"
        leftIconColor="black"
        backgroundColor="white"
      />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <BasicLayout>
          <Rows>
            <Row height="fluid">
              <Stack space={40} align="center" paddingTop={50}>
                <Text
                  fontWeight="300"
                  fontSize="25"
                  lineHeight={36}
                  color="primary"
                  textAlignment="center">
                  {t('StartPoRScreen_content_title')}
                </Text>
                <Image
                  source={START_SCREEN_BANNER_IMG}
                  style={{ width: 240, height: 140 }}
                />
              </Stack>
            </Row>
            <Row height="content">
              <Stack space={20}>
                <Stack space={20} align="center">
                  <Stack horizontal space={4} align="center">
                    <WarningCircleSVG width={16} height={16} />
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
                      borderRadius: 5,
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
                      {t('StartPoRScreen_content_CTA')}
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
