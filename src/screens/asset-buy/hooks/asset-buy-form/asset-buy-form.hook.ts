import { useForm } from 'react-hook-form';

export type AssetBuyForm = {
  value: number;
};

export const useAssetBuyForm = () => {
  const methods = useForm<AssetBuyForm>({
    defaultValues: {
      value: undefined,
    },

    reValidateMode: 'onChange',
    mode: 'all',
  });

  return methods;
};
