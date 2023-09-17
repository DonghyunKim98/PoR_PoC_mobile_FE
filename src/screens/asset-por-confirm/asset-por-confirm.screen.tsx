import { Box, Stack } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { AssetPorConfirmTitleComponent } from './components';

import { Header } from '@/atoms';
import { useGetPoRForUserQuery } from '@/hooks';
import { BasicLayout, LoadingPage, ScrollView } from '@/layouts';
import { palette } from '@/utils';

type AssetPoRConfirmScreenProps = {};

export type AssetPoRConfirmScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'AssetPoRConfirmScreen'
>;

export type AssetPoRConfirmScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'AssetPoRConfirmScreen'
>;

export const AssetPoRConfirmScreen = ({}: AssetPoRConfirmScreenProps) => {
  const {
    params: { key, assetId },
  } = useRoute<AssetPoRConfirmScreenNavigationRouteProps>();

  const { isLoading, data, error } = useGetPoRForUserQuery({ key, assetId });

  if (isLoading || !data) {
    // TODO : 전용 Loading Page 제작
    return <LoadingPage />;
  }

  const {
    name,
    logoUrl,
    unit,
    isIncluded,
    isCoincided,
    totalAsset,
    myCommitment,
    myAsset,
    commitments,
  } = data;

  return (
    <>
      <Header
        title="이더리움"
        titleColor="gray-500"
        leftIconColor="white"
        backgroundColor="primary"
      />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <BasicLayout backgroundColor="primary">
          <Stack space={20} align="center">
            <AssetPorConfirmTitleComponent
              logoUrl={logoUrl}
              name={name}
              myAsset={myAsset}
              unit={unit}
            />
            <Box style={{ height: 10, backgroundColor: palette['gray-700'] }} />
          </Stack>
        </BasicLayout>
      </ScrollView>
    </>
  );
};
