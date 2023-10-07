import { Stack } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Image } from 'react-native';

import {
  PrimaryOverTheCounterMarketScreenNavigatorProp,
  PrimaryOverTheCounterMarketScreenRouteProp,
} from '../../primary-over-the-counter-market.screen';

import { Text } from '@/atoms';
import { getReadAssetsResponseData } from '@/hooks';

type PrimaryOverTheCounterMarketItemProps =
  getReadAssetsResponseData['data'][0];

export const PrimaryOverTheCounterMarketItem =
  memo<PrimaryOverTheCounterMarketItemProps>(
    ({ name, logoUrl, unit, myAsset, assetId, balance, price, maxAmount }) => {
      const navigation =
        useNavigation<PrimaryOverTheCounterMarketScreenNavigatorProp>();
      const {
        params: { key },
      } = useRoute<PrimaryOverTheCounterMarketScreenRouteProp>();

      const { t } = useTranslation();

      return (
        <Stack>
          <Stack horizontal space={10}>
            <Image
              source={{ uri: logoUrl }}
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
            />
            <Stack space={18}>
              <Text
                fontWeight="700"
                fontSize="20"
                lineHeight={20}
                color="primary">
                {t(`SingleAsset_id${assetId}_name`)}
                <Text
                  fontWeight="500"
                  fontSize="20"
                  lineHeight={20}
                  color="primary">{`(투자계약 증권 ${assetId}호)`}</Text>
              </Text>
            </Stack>
          </Stack>
        </Stack>
      );
    },
  );
