import { Box } from '@mobily/stacks';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  RouteProp,
  useFocusEffect,
  useRoute,
} from '@react-navigation/native';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';

import {
  PrimaryNavigatorParamLists,
  PrimaryNavigatorProps,
} from '../primary.navigator';

import {
  PrimaryOverTheCounterMarketBanner,
  PrimaryOverTheCounterMarketItem,
} from './components';

import { Header } from '@/atoms';
import { useGetReadAssetsQuery } from '@/hooks';
import { LoadingPage } from '@/layouts';
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
    const {
      params: { key },
    } = useRoute<PrimaryOverTheCounterMarketScreenRouteProp>();

    const {
      isLoading,
      data,
      refetch: refetchReadAssetsQuery,
    } = useGetReadAssetsQuery({ key });
    const { t } = useTranslation();

    useFocusEffect(
      useCallback(() => {
        refetchReadAssetsQuery();
      }, []),
    );

    if (isLoading) {
      return <LoadingPage />;
    }

    return (
      <>
        <Header
          title={t('primaryOverTheCounterMarketScreen_header_title')}
          titleColor="primary"
          leftIconColor="primary"
          backgroundColor="white"
        />
        <FlatList
          data={data?.data}
          style={{
            width: '100%',
            backgroundColor: palette['white'],
            paddingHorizontal: 24,
            paddingTop: 10,
          }}
          ListHeaderComponent={<PrimaryOverTheCounterMarketBanner />}
          renderItem={({ item }) => {
            return <PrimaryOverTheCounterMarketItem {...item} />;
          }}
          ListFooterComponent={<Box style={{ height: 40 }} />}
          ItemSeparatorComponent={() => <Box style={{ height: 20 }} />}
        />
      </>
    );
  };
