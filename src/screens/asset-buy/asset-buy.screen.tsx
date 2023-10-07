import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { Header } from '@/atoms';

type AssetBuyScreenProps = {};

export type AssetBuyScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'AssetBuyScreen'
>;

export type AssetBuyScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'AssetBuyScreen'
>;

export const AssetBuyScreen = ({}: AssetBuyScreenProps) => {
  return (
    <>
      <Header
        title="토큰 증권 장외 거래소 (매수)"
        titleColor="primary"
        leftIconColor="primary"
        backgroundColor="white"
      />
    </>
  );
};
