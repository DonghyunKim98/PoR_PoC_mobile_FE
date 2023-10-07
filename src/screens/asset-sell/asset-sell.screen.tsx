import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { Header } from '@/atoms';

type AssetSellScreenProps = {};

export type AssetSellScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'AssetSellScreen'
>;

export type AssetSellScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'AssetSellScreen'
>;

export const AssetSellScreen = ({}: AssetSellScreenProps) => {
  return (
    <>
      <Header
        title="토큰 증권 장외 거래소 (매도)"
        titleColor="primary"
        leftIconColor="primary"
        backgroundColor="white"
      />
    </>
  );
};
