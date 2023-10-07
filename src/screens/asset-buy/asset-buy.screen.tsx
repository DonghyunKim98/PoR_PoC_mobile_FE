import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

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
  return null;
};
