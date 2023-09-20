import { useRoute } from '@react-navigation/native';
import { useMutation } from 'react-query';

import { AssetPoRConfirmScreenNavigationRouteProps } from '../../../../asset-por-confirm.screen';

import { defaultAxios } from '@/utils';

type postReportResponseData = {
  success: boolean;
  reportId: string;
};

export const usePostReportMutation = () => {
  const {
    params: { key, assetId },
  } = useRoute<AssetPoRConfirmScreenNavigationRouteProps>();

  return useMutation(async () => {
    const data = await defaultAxios.post<postReportResponseData>(
      '/api/report',
      { key, assetId },
    );

    return { data };
  });
};
