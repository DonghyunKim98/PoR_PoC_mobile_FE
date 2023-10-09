import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export type AssetBuyForm = {
  value: number;
};

const assetBuySchema: yup.ObjectSchema<AssetBuyForm> = yup.object().shape({
  value: yup.number().required('매수 분량을 입력해주세요'),
});

export const useAssetBuyForm = () => {
  const methods = useForm<AssetBuyForm>({
    defaultValues: {
      value: undefined,
    },
    resolver: yupResolver(assetBuySchema),
    reValidateMode: 'onChange',
    mode: 'all',
  });

  return methods;
};
