import { Box } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { FlatList, TouchableOpacity } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { Header } from '@/atoms';
import { BasicLayout } from '@/layouts';
import { palette } from '@/utils';

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
            const { name, logoUrl, unit, myAsset } = item;

            return (
              <TouchableOpacity>
                <Box
                  paddingX={12}
                  paddingY={16}
                  style={{
                    borderColor: palette['primary'],
                    borderWidth: 0.5,
                    borderRadius: 5,
                  }}></Box>
              </TouchableOpacity>
            );
          }}
          ItemSeparatorComponent={() => <Box style={{ height: 10 }} />}
        />
      </BasicLayout>
    </>
  );
};
