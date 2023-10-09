import { Box } from '@mobily/stacks';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import isUndefined from 'lodash/isUndefined';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { useRecoilValue } from 'recoil';

import {
  PrimaryNavigatorParamLists,
  PrimaryNavigatorProps,
} from '../primary.navigator';

import { PrimaryNewSecurityTokenItem } from './components';

import { Header } from '@/atoms';
import { useGetReadAssetsQuery } from '@/hooks';
import { LoadingPage } from '@/layouts';
import { $userKeyState } from '@/states';
import { palette } from '@/utils';

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
    const { key } = useRecoilValue($userKeyState);

    const { isLoading, data } = useGetReadAssetsQuery({ key });
    const { t } = useTranslation();

    if (isLoading || isUndefined(data)) {
      return <LoadingPage />;
    }

    return (
      <>
        <Header
          title="신규 토큰 증권"
          titleColor="primary"
          leftIconColor="primary"
          backgroundColor="white"
        />
        <FlatList
          style={{
            width: '100%',
            backgroundColor: palette['white'],
            paddingHorizontal: 24,
            paddingTop: 10,
          }}
          data={data.data
            .sort((a, b) => parseInt(a.assetId) - parseInt(b.assetId))
            .slice(0, 3)}
          renderItem={({ item }) => <PrimaryNewSecurityTokenItem {...item} />}
          ListFooterComponent={<Box style={{ height: 40 }} />}
          ItemSeparatorComponent={() => <Box style={{ height: 20 }} />}
        />
      </>
    );
  };
