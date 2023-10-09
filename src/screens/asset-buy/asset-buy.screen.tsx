import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import isUndefined from 'lodash/isUndefined';
import { FormProvider } from 'react-hook-form';

import { RootStackParamList } from '../root.navigator';

import { AssetBuyInput, AssetBuySubmit } from './components';
import { useAssetBuyForm } from './hooks';

import { Header } from '@/atoms';
import { useGetReadAssetsQuery } from '@/hooks';
import { LoadingPage, ScrollView } from '@/layouts';

type AssetBuyScreenProps = {};

export type AssetBuyScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'AssetBuyScreen'
>;

export type AssetBuyScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'AssetBuyScreen'
>;

export const AssetBuyScreen = ({}: AssetBuyScreenProps) => {
  const {
    params: { key, assetId },
  } = useRoute<AssetBuyScreenNavigationRouteProps>();

  const { isLoading, data } = useGetReadAssetsQuery({ key });
  const methods = useAssetBuyForm();

  if (isLoading || isUndefined(data)) {
    return <LoadingPage />;
  }

  const currentAssetData = data.data.find(asset => asset.assetId === assetId);

  if (isUndefined(currentAssetData)) {
    return null;
  }

  const { logoUrl, price, maxAmount } = currentAssetData;

  return (
    <FormProvider {...methods}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header
          title="토큰 증권 장외 거래소 (매수)"
          titleColor="primary"
          leftIconColor="primary"
          backgroundColor="white"
        />
        <AssetBuyInput
          logoUrl={logoUrl}
          price={price}
          maxAmount={parseInt(maxAmount)}
          assetId={assetId}
        />
        <AssetBuySubmit />
      </ScrollView>
    </FormProvider>
  );
};
