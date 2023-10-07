import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

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
  return null;
};
