import { Box, Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Pressable } from 'react-native';

import { PrimaryOverTheCounterMarketScreenNavigatorProp } from '../../primary-over-the-counter-market.screen';
import { PrimaryOverTheCounterMarketCheckAssetModal } from '../primary-over-the-counter-market-check-asset-modal';

import { Text } from '@/atoms';
import { getReadAssetsResponseData } from '@/hooks';
import { addCommasToNumber, palette } from '@/utils';

type PrimaryOverTheCounterMarketItemProps =
  getReadAssetsResponseData['data'][0];

const ItemPriceContent = ({
  title,
  num,
  unit,
}: {
  title: string;
  num: string;
  unit: string;
}) => {
  return (
    <Stack horizontal space={6} align="center">
      <Text fontSize="16" fontWeight="300" lineHeight={20} color="primary">
        {title}
      </Text>
      <Text fontSize="16" fontWeight="600" lineHeight={20} color="primary">
        {addCommasToNumber(num)}
        <Text fontSize="12" fontWeight="300" lineHeight={20} color="gray-700">
          {'  ' + unit}
        </Text>
      </Text>
    </Stack>
  );
};

export const PrimaryOverTheCounterMarketItem =
  memo<PrimaryOverTheCounterMarketItemProps>(
    ({ name, logoUrl, unit, myAsset, assetId, balance, price, maxAmount }) => {
      const [isBuyModalVisible, setIsBuyModalVisible] = useState(false);
      const [isSellModalVisible, setIsSellModalVisible] = useState(false);

      const navigation =
        useNavigation<PrimaryOverTheCounterMarketScreenNavigatorProp>();

      const { t } = useTranslation();

      const handlePressAssetPoRConfirmScreen = () => {
        navigation.navigate('AssetPoRConfirmScreen', {
          assetId,
        });
      };

      const onNavigateBuyScreen = () => {
        setIsBuyModalVisible(false);
      };

      const onNavigateSellScreen = () => {
        setIsSellModalVisible(false);
      };

      const handlePressBuyButton = () => {
        setIsBuyModalVisible(true);
      };

      const handlePressSellButton = () => {
        setIsSellModalVisible(true);
      };

      return (
        <>
          {isBuyModalVisible && (
            <PrimaryOverTheCounterMarketCheckAssetModal
              assetId={assetId}
              isVisible={isBuyModalVisible}
              type="BUY"
              onNavigate={onNavigateBuyScreen}
            />
          )}
          {isSellModalVisible && (
            <PrimaryOverTheCounterMarketCheckAssetModal
              assetId={assetId}
              isVisible={isSellModalVisible}
              type="SELL"
              onNavigate={onNavigateSellScreen}
            />
          )}

          <Box
            style={{
              borderRadius: 5,
              borderColor: palette['primary'],
              borderWidth: 0.5,
            }}>
            <Stack
              horizontal
              space={10}
              paddingX={10}
              paddingY={20}
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: palette['primary'],
              }}>
              <Image
                source={{ uri: logoUrl }}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
              <Stack space={18} marginTop={5}>
                <Text
                  fontWeight="700"
                  fontSize="18"
                  lineHeight={18}
                  color="primary">
                  {t(`SingleAsset_id${assetId}_name`)}
                  <Text
                    fontWeight="500"
                    fontSize="18"
                    lineHeight={18}
                    color="primary">
                    {`(투자계약 증권 ${assetId}호)`}
                  </Text>
                </Text>
                <Stack space={4}>
                  <ItemPriceContent title="발행량" num={balance} unit={unit} />
                  <ItemPriceContent
                    title="현재가"
                    num={price.toString()}
                    unit={'₩'}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Box
              direction="row"
              alignX="between"
              alignY="center"
              paddingX={12}
              paddingY={12}>
              <ItemPriceContent title="내 자산" num={myAsset} unit={unit} />
              <Pressable onPress={handlePressAssetPoRConfirmScreen}>
                {({ pressed }) => (
                  <Box
                    paddingX={16}
                    paddingY={3}
                    style={[
                      {
                        borderRadius: 50,
                        borderColor: palette['primary'],
                        borderWidth: 0.5,
                      },
                      pressed && {
                        backgroundColor: palette['greenBackground'],
                        borderColor: palette['greenBackground'],
                      },
                    ]}>
                    <Text
                      fontWeight="600"
                      fontSize="14"
                      lineHeight={20}
                      color={pressed ? 'white' : 'primary'}>
                      데이터 확인
                    </Text>
                  </Box>
                )}
              </Pressable>
            </Box>
            <Box direction="row">
              <Pressable style={{ flex: 1 }} onPress={handlePressSellButton}>
                {({ pressed }) => (
                  <Box
                    alignX="center"
                    flex="fluid"
                    paddingY={14}
                    style={[
                      {
                        borderBottomLeftRadius: 5,
                        borderRightWidth: 1,
                        borderRightColor: palette['white'],
                        backgroundColor: palette['gray-700'],
                      },
                      pressed && {
                        backgroundColor: palette['greenBackground'],
                      },
                    ]}>
                    <Text
                      fontSize="14"
                      fontWeight="600"
                      color="white"
                      lineHeight={20}>
                      매도
                    </Text>
                  </Box>
                )}
              </Pressable>
              <Pressable style={{ flex: 1 }} onPress={handlePressBuyButton}>
                {({ pressed }) => (
                  <Box
                    alignX="center"
                    flex="fluid"
                    paddingY={14}
                    style={[
                      {
                        borderBottomRightRadius: 5,
                        backgroundColor: palette['primary'],
                      },
                      pressed && {
                        backgroundColor: palette['greenBackground'],
                      },
                    ]}>
                    <Text
                      fontSize="14"
                      fontWeight="600"
                      color="white"
                      lineHeight={20}>
                      매수
                    </Text>
                  </Box>
                )}
              </Pressable>
            </Box>
          </Box>
        </>
      );
    },
  );
