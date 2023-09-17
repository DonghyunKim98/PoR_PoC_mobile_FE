import { Row, Rows, Stack } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import { RootStackParamList } from '../root.navigator';

import { Text } from '@/atoms';
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
    <BasicLayout>
      <Rows>
        <Row height="fluid">
          <Stack align="center">
            <Text
              color="primary"
              fontWeight="700"
              fontSize="20"
              lineHeight={20}>
              {t('StartPoRScreen_header_title')}
            </Text>
          </Stack>
        </Row>
        <Row height="content"></Row>
      </Rows>
    </BasicLayout>
  );
};
