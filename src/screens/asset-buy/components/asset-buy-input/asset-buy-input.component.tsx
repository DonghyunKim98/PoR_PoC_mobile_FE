import { Stack, Box } from '@mobily/stacks';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Image } from 'react-native';

import { Text, TextInput } from '@/atoms';
import { BasicLayout } from '@/layouts';
import { palette, addCommasToNumber } from '@/utils';

type AssetBuyInputProps = {
  logoUrl: string;
  assetId: string;
  price: number;
  maxAmount: string;
};

export const AssetBuyInput = memo<AssetBuyInputProps>(
  ({ logoUrl, assetId, price, maxAmount }) => {
    const { t } = useTranslation();

    return (
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
    );
  },
);
