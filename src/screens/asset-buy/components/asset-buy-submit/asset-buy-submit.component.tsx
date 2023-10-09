import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';

import { AssetBuyForm } from '../../hooks';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type AssetBuySubmitProps = {};

export const AssetBuySubmit = memo<AssetBuySubmitProps>(() => {
  const { handleSubmit, formState } = useFormContext<AssetBuyForm>();
  const { isDirty, isValid } = formState;
  const isAssetBuyPossible = isDirty && isValid;

  const buyAsset: SubmitHandler<AssetBuyForm> = async ({ value }) => {};

  const handlePressBuyButton = () => {
    handleSubmit(buyAsset)();
  };

  return (
    <Box
      style={{ backgroundColor: palette['white'] }}
      paddingX={16}
      paddingBottom={32}>
      <TouchableOpacity
        disabled={!isAssetBuyPossible}
        onPress={handlePressBuyButton}>
        <Box
          style={{
            backgroundColor: isAssetBuyPossible
              ? palette['greenBackground']
              : palette['primary'],
            borderRadius: 5,
          }}
          alignX="center"
          paddingY={16}>
          <Text fontWeight="700" fontSize="18" lineHeight={20} color="white">
            매수
          </Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
});
