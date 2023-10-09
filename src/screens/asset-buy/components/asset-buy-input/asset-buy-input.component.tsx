import { Stack, Box } from '@mobily/stacks';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Image } from 'react-native';

import { AssetBuyForm } from '../../hooks';

import { Text, TextInput } from '@/atoms';
import { BasicLayout } from '@/layouts';
import { palette, addCommasToNumber } from '@/utils';

type AssetBuyInputProps = {
  logoUrl: string;
  assetId: string;
  price: number;
  maxAmount: number;
};

export const AssetBuyInput = memo<AssetBuyInputProps>(
  ({ logoUrl, assetId, price, maxAmount }) => {
    const { control } = useFormContext<AssetBuyForm>();
    const {
      field: { value, onChange },
      fieldState,
    } = useController({
      control,
      name: 'value',
      rules: {
        required: '매수 분량을 입력해주세요',
        max: {
          value: maxAmount,
          message: '매수 가능한 수량이 초과되었습니다',
        },
        validate: value => {
          if (isNaN(value)) {
            return '숫자만 입력해주세요.';
          }

          if (value < 0) {
            return '음수는 입력할 수 없습니다.';
          }

          // 3. 소수점 두 자리까지만 허용 (부동소수점 오차 고려)
          const roundedValue = Math.round(value * 100) / 100;

          if (Math.abs(value - roundedValue) > 0.001) {
            // 부동소수점 오차를 고려한 비교
            return '소수점 두 자리까지 입력해주세요.';
          }

          return true; // 유효한 경우
        },
      },
    });

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
            value={value?.toString()}
            onChangeText={onChange}
            error={!isUndefined(fieldState.error)}
            errorMsg={fieldState.error?.message as string}
          />
        </Stack>
      </BasicLayout>
    );
  },
);
