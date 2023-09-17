import { Box } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { AssetListAssetItem } from './components';

import { Header } from '@/atoms';
import { BasicLayout } from '@/layouts';

type AssetListScreenProps = {};

export type AssetListScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'AssetListScreen'
>;

export type AssetListScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'AssetListScreen'
>;

const tempData = [
  {
    name: 'STO1',
    logoUrl:
      'https://res.cloudinary.com/nuri/image/upload/v1694680280/por/fqnl7edbqiqzrwhlpfrj.png',
    unit: 'Token',
    myAsset: '3',
  },
  {
    name: 'STO2',
    logoUrl:
      'https://res.cloudinary.com/nuri/image/upload/v1694680280/por/fqnl7edbqiqzrwhlpfrj.png',
    unit: 'Token',
    myAsset: '3',
  },
];

export const AssetListScreen = ({}: AssetListScreenProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Header
        title={t('assetListScreen_header_title')}
        titleColor="primary"
        leftIconColor="primary"
      />
      <BasicLayout>
        <FlatList
          data={tempData}
          renderItem={({ item }) => {
            return <AssetListAssetItem {...item} />;
          }}
          ItemSeparatorComponent={() => <Box style={{ height: 10 }} />}
        />
      </BasicLayout>
    </>
  );
};
