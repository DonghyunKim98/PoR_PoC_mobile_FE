import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import isUndefined from 'lodash/isUndefined';
import { FormProvider } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

import { RootStackParamList } from '../root.navigator';

import { AssetSellInput, AssetSellSubmit } from './components';
import { useAssetSellForm } from './hooks';

import { Header } from '@/atoms';
import { useGetReadAssetsQuery } from '@/hooks';
import { LoadingPage, ScrollView } from '@/layouts';
import { $userKeyState } from '@/states';

type AssetSellScreenProps = {};

export type AssetSellScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'AssetSellScreen'
>;

export type AssetSellScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'AssetSellScreen'
>;

export const AssetSellScreen = ({}: AssetSellScreenProps) => {
  const { key } = useRecoilValue($userKeyState);

  const {
    params: { assetId },
  } = useRoute<AssetSellScreenNavigationRouteProps>();

  const { isLoading, data } = useGetReadAssetsQuery({ key });
  const methods = useAssetSellForm();

  if (isLoading || isUndefined(data)) {
    return <LoadingPage />;
  }

  const currentAssetData = data.data.find(asset => asset.assetId === assetId);

  if (isUndefined(currentAssetData)) {
    return null;
  }

  const { logoUrl, price, myAsset } = currentAssetData;

  return (
    <FormProvider {...methods}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header
          title="토큰 증권 장외 거래소 (매도)"
          titleColor="primary"
          leftIconColor="primary"
          backgroundColor="white"
        />
        <AssetSellInput
          logoUrl={logoUrl}
          price={price}
          maxAmount={parseInt(myAsset)}
          assetId={assetId}
        />
        <AssetSellSubmit />
      </ScrollView>
    </FormProvider>
  );
};
