import { Box } from '@mobily/stacks';
import { memo, useState } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';

import { AssetSellForm } from '../../hooks';
import { AssetSellModal } from '../asset-sell-modal';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type AssetSellSubmitProps = {};

export const AssetSellSubmit = memo<AssetSellSubmitProps>(() => {
  const [isVisibleSellModal, setIsVisibleSellModal] = useState(false);

  const { handleSubmit, formState, watch } = useFormContext<AssetSellForm>();
  const { isDirty, isValid } = formState;
  const isAssetBuyPossible = isDirty && isValid;

  const sellAsset: SubmitHandler<AssetSellForm> = async ({ value }) => {
    setIsVisibleSellModal(true);
  };

  const handlePressSellButton = () => {
    handleSubmit(sellAsset)();
  };

  const value = watch('value');

  const onNavigatePrimaryOverTheCounterMarketScreen = () => {
    setIsVisibleSellModal(false);
  };

  return (
    <>
      {isVisibleSellModal && (
        <AssetSellModal
          value={value}
          isVisible={isVisibleSellModal}
          onNavigate={onNavigatePrimaryOverTheCounterMarketScreen}
        />
      )}
      <Box
        style={{ backgroundColor: palette['white'] }}
        paddingX={16}
        paddingBottom={32}>
        <TouchableOpacity
          disabled={!isAssetBuyPossible}
          onPress={handlePressSellButton}>
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
              매도
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </>
  );
});
