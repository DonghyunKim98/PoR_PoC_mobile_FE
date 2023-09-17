import { Box, Stack } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { useWindowDimensions } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { getRandomCommitments } from './asset-por-confirm.util';
import {
  AssetPoRConfirmMyCommitment,
  AssetPoRConfirmMyInfoComponent,
  AssetPoRConfirmTotalInfoComponent,
  AssetPorConfirmAllCommitmentItem,
} from './components';

import { Header, Text } from '@/atoms';
import { useGetPoRForUserQuery } from '@/hooks';
import { LoadingPage, ScrollView } from '@/layouts';
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
  const { t } = useTranslation();
  const { width: windowWidth } = useWindowDimensions();
  const {
    params: { key, assetId },
  } = useRoute<AssetPoRConfirmScreenNavigationRouteProps>();

  const { isLoading, data } = useGetPoRForUserQuery({ key, assetId });

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

  const selectedCommitments = getRandomCommitments(commitments, myCommitment);

  return (
    <>
      <Header
        title="이더리움"
        titleColor="gray-500"
        leftIconColor="white"
        backgroundColor="primary"
      />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Stack
          space={20}
          align="center"
          paddingTop={10}
          paddingBottom={20}
          paddingX={24}
          style={{ backgroundColor: palette['primary'] }}>
          <AssetPoRConfirmTotalInfoComponent {...data} />
          <Box
            direction="row"
            style={{
              width: windowWidth - 48,
              height: 1,
              backgroundColor: palette['gray-700'],
            }}
          />
          <AssetPoRConfirmMyInfoComponent {...data} />
        </Stack>
        <Stack paddingY={30} paddingX={24}>
          <AssetPoRConfirmMyCommitment {...data} />
          <Box>
            <Text
              fontWeight="700"
              fontSize="16"
              lineHeight={16}
              color="primary">
              {t('assetPorConfirmScreen_allCommitments')}
            </Text>
            {selectedCommitments.map(commitment => {
              const isMyAsset =
                commitment[0] === myCommitment[0] &&
                commitment[1] === myCommitment[1];

              return (
                <AssetPorConfirmAllCommitmentItem
                  key={commitment[0]}
                  isMyAsset={isMyAsset}
                  commitment={commitment}
                />
              );
            })}
          </Box>
        </Stack>
      </ScrollView>
    </>
  );
};
