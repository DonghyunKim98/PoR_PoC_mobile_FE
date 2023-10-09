import { Box } from '@mobily/stacks';
import { memo, useState } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';

import { AssetBuyForm } from '../../hooks';
import { AssetBuyModal } from '../asset-buy-modal';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type AssetBuySubmitProps = {};

export const AssetBuySubmit = memo<AssetBuySubmitProps>(() => {
  const [isVisibleBuyModal, setIsVisibleBuyModal] = useState(false);

  const { handleSubmit, formState, watch } = useFormContext<AssetBuyForm>();
  const { isDirty, isValid } = formState;
  const isAssetBuyPossible = isDirty && isValid;

  const buyAsset: SubmitHandler<AssetBuyForm> = async ({ value }) => {
    setIsVisibleBuyModal(true);
  };

  const handlePressBuyButton = () => {
    handleSubmit(buyAsset)();
  };

  const value = watch('value');

  const onNavigatePrimaryOverTheCounterMarketScreen = () => {
    setIsVisibleBuyModal(false);
  };

  return (
    <>
      {isVisibleBuyModal && (
        <AssetBuyModal
          value={value}
          isVisible={isVisibleBuyModal}
          onNavigate={onNavigatePrimaryOverTheCounterMarketScreen}
        />
      )}
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
    </>
  );
});
