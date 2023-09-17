import { Box } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { AssetListAssetItem } from './components';

import { Header } from '@/atoms';
import { useGetReadAssetsQuery } from '@/hooks';
import { BasicLayout, LoadingPage } from '@/layouts';

type AssetListScreenProps = {};

export type AssetListScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'AssetListScreen'
>;

export type AssetListScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'AssetListScreen'
>;

export const AssetListScreen = ({}: AssetListScreenProps) => {
  const {
    params: { key },
  } = useRoute<AssetListScreenNavigationRouteProps>();

  const { isLoading, data } = useGetReadAssetsQuery({ key });
  const { t } = useTranslation();

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <Header
        title={t('assetListScreen_header_title')}
        titleColor="primary"
        leftIconColor="primary"
        backgroundColor="white"
      />
      <BasicLayout>
        <FlatList
          data={data?.data}
          renderItem={({ item }) => {
            return <AssetListAssetItem {...item} />;
          }}
          ItemSeparatorComponent={() => <Box style={{ height: 10 }} />}
        />
      </BasicLayout>
    </>
  );
};
