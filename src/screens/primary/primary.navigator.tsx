import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { PrimaryNewSecurityTokenScreen } from './primary-new-security-token';
import { PrimaryOverTheCounterMarketScreen } from './primary-over-the-counter-market';

import { Icon } from '@/atoms';
import { palette } from '@/utils';

export type PrimaryNavigatorParamLists = {
  PrimaryOverTheCounterMarketScreen: {
    key: string;
  };
  PrimaryNewSecurityToken: undefined;
};

const Tab = createBottomTabNavigator<PrimaryNavigatorParamLists>();

export type PrimaryNavigatorProps = StackNavigationProp<
  RootStackParamList,
  'PrimaryStack'
>;
type PrimaryNavigatorRouteProps = RouteProp<RootStackParamList, 'PrimaryStack'>;

export const PrimaryNavigator = () => {
  const navigation = useNavigation<PrimaryNavigatorProps>();
  const route = useRoute<PrimaryNavigatorRouteProps>();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: 'Pretendard-Medium',
          fontSize: 12,
          fontWeight: '500',
          lineHeight: 18,
          letterSpacing: -12 * 0.04,
        },
        tabBarStyle: {
          height: 60,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: palette['white'],
        },
        tabBarActiveTintColor: palette['gray-300'],
        tabBarInactiveTintColor: palette['gray-500'],
        headerShown: false,
      }}>
      <Tab.Screen
        name="PrimaryOverTheCounterMarketScreen"
        component={PrimaryOverTheCounterMarketScreen}
        options={{
          tabBarLabel: '장외거래소',
          tabBarIcon: ({ color }) => {
            return (
              <Icon color={color} size={24} name="card-bulleted-outline" />
            );
          },
        }}
      />
      <Tab.Screen
        name="PrimaryOverTheCounterMarketScreen"
        component={PrimaryNewSecurityTokenScreen}
        options={{
          tabBarLabel: '신규토큰증권',
          tabBarIcon: ({ color }) => {
            return <Icon color={color} size={24} name="bell-outline" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
