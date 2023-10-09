import { useRoute } from '@react-navigation/native';
import { useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';

import { AssetPoRConfirmScreenNavigationRouteProps } from '../../../../asset-por-confirm.screen';

import { $userKeyState } from '@/states';
import { defaultAxios } from '@/utils';

type postReportResponseData = {
  success: boolean;
  reportId: string;
};

export const usePostReportMutation = () => {
  const {
    params: { assetId },
  } = useRoute<AssetPoRConfirmScreenNavigationRouteProps>();

  const { key } = useRecoilValue($userKeyState);

  return useMutation(async () => {
    const data = await defaultAxios.post<postReportResponseData>(
      '/api/report',
      { key, assetId },
    );

    return { data };
  });
};
