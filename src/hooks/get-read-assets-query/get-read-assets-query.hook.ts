import { useQuery } from 'react-query';

export type getReadAssetsParams = {
  key: string;
};

export type getReadAssetsResponseData = {
  data: {
    name: string;
    logoUrl: string;
    unit: string;
    myAsset: string;
    assetId: string;
  }[];
};

export const useGetReadAssetsQuery = ({ key }: getReadAssetsParams) => {
  return useQuery<getReadAssetsResponseData>(['/api/assets', { key }]);
};
