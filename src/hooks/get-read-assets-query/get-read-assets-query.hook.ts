import { useQuery } from 'react-query';

export type getReadAssetsParams = {
  key: string;
};

export type getReadAssetsResponseData = {
  data: {
    assetId: string;
    name: string;
    logoUrl: string;
    unit: string;
    myAsset: string;
    balance: string;
    price: number;
    maxAmount: string;
  }[];
};

export const useGetReadAssetsQuery = ({ key }: getReadAssetsParams) => {
  return useQuery<getReadAssetsResponseData>(['/api/assets', { key }]);
};
