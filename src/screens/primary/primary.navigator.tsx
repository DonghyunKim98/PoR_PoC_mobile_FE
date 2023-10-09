import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { PrimaryNewSecurityTokenScreen } from './primary-new-security-token';
import { PrimaryOverTheCounterMarketScreen } from './primary-over-the-counter-market';
import { PrimaryTabBarIcon } from './primary-tab-bar-icon.component';

import { palette } from '@/utils';

export type PrimaryNavigatorParamLists = {
  PrimaryOverTheCounterMarketScreen: undefined;
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
          lineHeight: 16,
          letterSpacing: -12 * 0.04,
        },
        tabBarStyle: {
          height: 80,
          paddingBottom: 20,
          backgroundColor: palette['white'],
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarItemStyle: {
          marginHorizontal: 15,
          flex: 0,
        },
        tabBarActiveTintColor: palette['primary'],
        tabBarInactiveTintColor: palette['primary'],
        headerShown: false,
      }}>
      <Tab.Screen
        name="PrimaryOverTheCounterMarketScreen"
        component={PrimaryOverTheCounterMarketScreen}
        options={{
          tabBarLabel: '장외거래소',
          tabBarIcon: ({ focused }) => <PrimaryTabBarIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="PrimaryNewSecurityToken"
        component={PrimaryNewSecurityTokenScreen}
        options={{
          tabBarLabel: '신규토큰증권',
          tabBarIcon: ({ focused }) => <PrimaryTabBarIcon focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};
