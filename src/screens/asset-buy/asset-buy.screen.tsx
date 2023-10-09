import { Box, Stack } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import isUndefined from 'lodash/isUndefined';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Pressable } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { Header, Text, TextInput } from '@/atoms';
import { useGetReadAssetsQuery } from '@/hooks';
import { BasicLayout, LoadingPage } from '@/layouts';
import { addCommasToNumber, palette } from '@/utils';

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
  const [buyValue, setBuyValue] = useState('');
  const { t } = useTranslation();

  const {
    params: { key, assetId },
  } = useRoute<AssetBuyScreenNavigationRouteProps>();

  const { isLoading, data } = useGetReadAssetsQuery({ key });

  if (isLoading || isUndefined(data)) {
    return <LoadingPage />;
  }

  const currentAssetData = data.data.find(asset => asset.assetId === assetId);

  if (isUndefined(currentAssetData)) {
    return null;
  }

  const { logoUrl, price, maxAmount } = currentAssetData;

  return (
    <>
      <Header
        title="토큰 증권 장외 거래소 (매수)"
        titleColor="primary"
        leftIconColor="primary"
        backgroundColor="white"
      />
      <BasicLayout>
        <Stack space={28} paddingTop={10}>
          <Stack space={20}>
            <Stack space={10} align="center">
              <Image
                source={{ uri: logoUrl }}
                style={{ width: 48, height: 48 }}
                resizeMode="contain"
              />
              <Text
                fontWeight="700"
                fontSize="20"
                lineHeight={24}
                color="primary">
                {t(`SingleAsset_id${assetId}_name`)}
              </Text>
            </Stack>
            <Box
              direction="row"
              alignX="between"
              paddingX={10}
              paddingY={10}
              style={{
                borderTopWidth: 1,
                borderTopColor: palette['gray-700'],
                borderBottomWidth: 1,
                borderBottomColor: palette['gray-700'],
              }}>
              <Text
                fontWeight="500"
                fontSize="20"
                lineHeight={20}
                color="gray-700">
                현재가
              </Text>
              <Stack horizontal space={4} align="bottom">
                <Text
                  fontWeight="600"
                  fontSize="20"
                  lineHeight={20}
                  color="primary">
                  {addCommasToNumber(price)}
                </Text>
                <Text
                  fontWeight="300"
                  fontSize="12"
                  lineHeight={20}
                  color="gray-700">
                  ₩
                </Text>
              </Stack>
            </Box>
          </Stack>
          <TextInput
            label={`매도 가능 수량 ${maxAmount} Token`}
            value={buyValue}
            onChangeText={setBuyValue}
            error={false}
            errorMsg={'매수 가능한 수량이 초과되었습니다'}
          />
        </Stack>
      </BasicLayout>
      <Box
        style={{ backgroundColor: palette['white'] }}
        paddingX={16}
        paddingBottom={32}>
        <Pressable>
          <Box
            style={{ backgroundColor: palette['primary'], borderRadius: 5 }}
            alignX="center"
            paddingY={16}>
            <Text fontWeight="700" fontSize="18" lineHeight={20} color="white">
              매수
            </Text>
          </Box>
        </Pressable>
      </Box>
    </>
  );
};
