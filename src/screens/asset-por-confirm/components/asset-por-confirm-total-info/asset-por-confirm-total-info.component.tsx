import { Stack } from '@mobily/stacks';
import { Image } from 'react-native';

import { Text } from '@/atoms';

type AssetPorConfirmTotalInfoComponentProps = {
  logoUrl: string;
  name: string;
  totalAsset: string;
  unit: string;
};

export const AssetPoRConfirmTotalInfoComponent = ({
  logoUrl,
  name,
  totalAsset,
  unit,
}: AssetPorConfirmTotalInfoComponentProps) => {
  return (
    <Stack space={10} align="center">
      <Image source={{ uri: logoUrl }} width={40} height={40} />
      <Stack space={4} align="center">
        <Text
          fontWeight="700"
          fontSize="20"
          lineHeight={23.87}
          color="gray-500">
          {name}
        </Text>
        <Stack space={5} horizontal align="bottom">
          <Text
            fontWeight="400"
            fontSize="18"
            lineHeight={21.48}
            color="gray-700">
            {totalAsset}
          </Text>
          <Text
            fontWeight="400"
            fontSize="12"
            lineHeight={14.32}
            color="gray-700">
            {unit}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
