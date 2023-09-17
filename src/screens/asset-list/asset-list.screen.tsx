import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { Header } from '@/atoms';
import { BasicLayout } from '@/layouts';

type AssetListScreenProps = {};

export type AssetListScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'AssetListScreen'
>;

export type AssetListScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'AssetListScreen'
>;

export const AssetListScreen = ({}: AssetListScreenProps) => {
  return (
    <>
      <Header
        title="내 자산 목록"
        titleColor="primary"
        leftIconColor="primary"
      />
      <BasicLayout></BasicLayout>
    </>
  );
};
