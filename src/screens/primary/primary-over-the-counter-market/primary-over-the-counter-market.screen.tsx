import { Box } from '@mobily/stacks';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';

import {
  PrimaryNavigatorParamLists,
  PrimaryNavigatorProps,
} from '../primary.navigator';

import { PrimaryOverTheCounterMarketBanner } from './components';

import { Header } from '@/atoms';
import { palette } from '@/utils';

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
    const { t } = useTranslation();

    return (
      <>
        <Header
          title={t('primaryOverTheCounterMarketScreen_header_title')}
          titleColor="primary"
          leftIconColor="primary"
          backgroundColor="white"
        />
        <FlatList
          data={[{ title: '1' }, { title: '2' }]}
          style={{
            width: '100%',
            backgroundColor: palette['white'],
            paddingHorizontal: 24,
            paddingTop: 10,
          }}
          renderItem={({ item }) => {
            return <Box />;
          }}
          ListHeaderComponent={<PrimaryOverTheCounterMarketBanner />}
          ListFooterComponent={<Box style={{ height: 40 }} />}
          ItemSeparatorComponent={() => <Box style={{ height: 20 }} />}
        />
      </>
    );
  };
