import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

import {
  PrimaryNavigatorParamLists,
  PrimaryNavigatorProps,
} from '../primary.navigator';

import { Text } from '@/atoms';

export type PrimaryOverTheCounterMarketScreenNavigatorProp =
  CompositeNavigationProp<
    PrimaryNavigatorProps,
    BottomTabNavigationProp<
      PrimaryNavigatorParamLists,
      'PrimaryOverTheCounterMarketScreen'
    >
  >;

export type PrimaryOverTheCounterMarketScreenRouteProp = RouteProp<
  PrimaryNavigatorParamLists,
  'PrimaryOverTheCounterMarketScreen'
>;

type PrimaryOverTheCounterMarketScreenProps = {};

export const PrimaryOverTheCounterMarketScreen =
  ({}: PrimaryOverTheCounterMarketScreenProps) => {
    return (
      <Text fontSize="14" fontWeight="400" lineHeight={16} color="primary">
        장외거래소
      </Text>
    );
  };
