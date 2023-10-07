import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

import {
  PrimaryNavigatorParamLists,
  PrimaryNavigatorProps,
} from '../primary.navigator';

import { Text } from '@/atoms';

export type PrimaryNewSecurityTokenScreenNavigatorProp =
  CompositeNavigationProp<
    PrimaryNavigatorProps,
    BottomTabNavigationProp<
      PrimaryNavigatorParamLists,
      'PrimaryNewSecurityToken'
    >
  >;

export type PrimaryNewSecurityTokenScreenRouteProp = RouteProp<
  PrimaryNavigatorParamLists,
  'PrimaryNewSecurityToken'
>;

type PrimaryNewSecurityTokenScreenProps = {};

export const PrimaryNewSecurityTokenScreen =
  ({}: PrimaryNewSecurityTokenScreenProps) => {
    return (
      <Text fontSize="14" fontWeight="400" lineHeight={16} color="primary">
        장외거래소
      </Text>
    );
  };
