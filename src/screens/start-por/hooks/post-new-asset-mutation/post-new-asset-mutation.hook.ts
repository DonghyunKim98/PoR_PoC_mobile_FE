import { useMutation } from 'react-query';

import { defaultAxios } from '@/utils';

type postNewAssetReturnData = {
  success: boolean;
  key: string;
};

export const usePostNewAssetMutation = () => {
  return useMutation(async () => {
    const { data } = await defaultAxios.post<postNewAssetReturnData>(
      'api/new-assets',
    );

    return data;
  });
};
