import { Box, Stack } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useWindowDimensions } from 'react-native';
import { useCountdown } from 'rooks';

import { RootStackParamList } from '../root.navigator';

import { getRandomCommitments } from './asset-por-confirm.util';
import {
  AssetPoRConfirmLoading,
  AssetPoRConfirmMyCommitment,
  AssetPoRConfirmMyInfoComponent,
  AssetPoRConfirmTotalInfoComponent,
  AssetPorConfirmAllCommitmentItem,
} from './components';

import { Header, Text } from '@/atoms';
import { useGetPoRForUserQuery } from '@/hooks';
import { ScrollView } from '@/layouts';
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

  const endTimeRef = useRef(new Date(Date.now() + 6000));
  const count = useCountdown(endTimeRef.current, {
    interval: 1000,
  });

  const {
    params: { key, assetId },
  } = useRoute<AssetPoRConfirmScreenNavigationRouteProps>();

  const { isLoading, data } = useGetPoRForUserQuery({ key, assetId });

  if (isLoading || !data || count !== 0) {
    // TODO : 전용 Loading Page 제작
    return <AssetPoRConfirmLoading />;
  }

  const { myCommitment, commitments } = data;

  const selectedCommitments = getRandomCommitments(commitments, myCommitment);

  return (
    <>
      <Header
        title="이더리움"
        titleColor="gray-500"
        leftIconColor="white"
        backgroundColor="primary"
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
        <Stack paddingY={30} space={30}>
          <AssetPoRConfirmMyCommitment {...data} />
          <Stack space={10}>
            <Box paddingX={24}>
              <Text
                fontWeight="700"
                fontSize="16"
                lineHeight={16}
                color="primary">
                {t('assetPorConfirmScreen_allCommitments')}
              </Text>
            </Box>
            <Box>
              {selectedCommitments.map((commitment, index) => {
                const isMyAsset =
                  commitment[0] === myCommitment[0] &&
                  commitment[1] === myCommitment[1];

                return (
                  <AssetPorConfirmAllCommitmentItem
                    key={index}
                    isMyAsset={isMyAsset}
                    commitment={commitment}
                  />
                );
              })}
            </Box>
          </Stack>
        </Stack>
      </ScrollView>
    </>
  );
};
