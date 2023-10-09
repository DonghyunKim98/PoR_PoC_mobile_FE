import { useMutation } from 'react-query';

import { defaultAxios } from '@/utils';

type postAssetBuyMutationParams = {
  key: string;
  assetId: string;
  amount: string;
};

type postAssetBuyMutationReturnData = {
  success: boolean;
};

export const usePostAssetBuyMutation = ({
  key,
  assetId,
  amount,
}: postAssetBuyMutationParams) => {
  return useMutation(async () => {
    const { data } = await defaultAxios.post<postAssetBuyMutationReturnData>(
      'api/assets/buy',
      { key, assetId, amount },
    );

    return data;
  });
};
