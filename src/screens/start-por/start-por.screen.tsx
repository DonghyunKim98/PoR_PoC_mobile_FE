import { Row, Rows, Stack } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Image } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { START_SCREEN_BANNER_IMG } from '@/assets';
import { Header, Text } from '@/atoms';
import { BasicLayout } from '@/layouts';

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

  return (
    <>
      <Header
        title={t('StartPoRScreen_header_title')}
        titleColor="primary"
        leftIconColor="black"
      />
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
          <Row height="content"></Row>
        </Rows>
      </BasicLayout>
    </>
  );
};
