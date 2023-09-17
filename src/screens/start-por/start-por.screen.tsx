import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import { RootStackParamList } from '../root.navigator';

import { Header } from '@/atoms';
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
      <BasicLayout></BasicLayout>
    </>
  );
};
