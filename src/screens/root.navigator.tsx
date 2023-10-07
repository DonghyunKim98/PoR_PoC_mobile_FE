import { useFlipper } from '@react-navigation/devtools';
import {
  NavigationContainer,
  NavigatorScreenParams,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AssetPoRConfirmScreen } from './asset-por-confirm';
import { PrimaryNavigator, PrimaryNavigatorParamLists } from './primary';
import { StartPoRScreen } from './start-por';

import { LoadingPage } from '@/layouts';

export type RootStackParamList = {
  StartPoRScreen: undefined;
  AssetPoRConfirmScreen: { key: string; assetId: string };
  PrimaryStack: NavigatorScreenParams<PrimaryNavigatorParamLists>;
};

type RootNavigatorProps = {};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = ({}: RootNavigatorProps) => {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <NavigationContainer fallback={<LoadingPage />}>
      <Stack.Navigator
        initialRouteName="StartPoRScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartPoRScreen" component={StartPoRScreen} />

        <Stack.Screen
          name="AssetPoRConfirmScreen"
          component={AssetPoRConfirmScreen}
        />
        <Stack.Screen name="PrimaryStack" component={PrimaryNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
