import { useQuery } from 'react-query';

export type getPorForUserParams = {
  key: string;
  assetId: string;
  enabled?: boolean;
};

export type getPorForUserResponseData = {
  name: string;
  logoUrl: string;
  unit: string;
  isIncluded: boolean;
  isCoincided: boolean;
  totalAsset: string;
  myCommitment: [string, string];
  myAsset: string;
  commitments: [string, string][];
};

export const useGetPoRForUserQuery = ({
  key,
  assetId,
  enabled = true,
}: getPorForUserParams) => {
  return useQuery<getPorForUserResponseData>(['/api/por', { key, assetId }], {
    cacheTime: 0,
    suspense: false,
    enabled,
  });
};
