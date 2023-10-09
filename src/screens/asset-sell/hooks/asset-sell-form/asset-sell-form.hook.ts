import { useForm } from 'react-hook-form';

export type AssetSellForm = {
  value: number;
};

export const useAssetSellForm = () => {
  const methods = useForm<AssetSellForm>({
    defaultValues: {
      value: undefined,
    },
    reValidateMode: 'onChange',
    mode: 'all',
  });

  return methods;
};
