import { useMutation } from 'react-query';

import { defaultAxios } from '@/utils';

type postAssetSellMutationParams = {
  key: string;
  assetId: string;
  amount: string;
};

type postAssetSellMutationReturnData = {
  success: boolean;
};

export const usePostAssetSellMutation = ({
  key,
  assetId,
  amount,
}: postAssetSellMutationParams) => {
  return useMutation(async () => {
    const { data } = await defaultAxios.post<postAssetSellMutationReturnData>(
      'api/assets/sell',
      { key, assetId, amount },
    );

    return data;
  });
};
