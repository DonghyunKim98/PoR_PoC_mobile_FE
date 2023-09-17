import { useFlipper } from '@react-navigation/devtools';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AssetListScreen } from './asset-list';
import { AssetPoRConfirmScreen } from './asset-por-confirm';
import { StartPoRScreen } from './start-por';

export type RootStackParamList = {
  StartPoRScreen: undefined;
  AssetListScreen: { key: string };
  AssetPorConfirmScreen: { key: string; assetId: string };
};

type RootNavigatorProps = {};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = ({}: RootNavigatorProps) => {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartPoRScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartPoRScreen" component={StartPoRScreen} />
        <Stack.Screen name="AssetListScreen" component={AssetListScreen} />
        <Stack.Screen
          name="AssetPorConfirmScreen"
          component={AssetPoRConfirmScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
