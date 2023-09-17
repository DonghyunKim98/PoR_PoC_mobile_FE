import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { FlatList, Image, Pressable } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { Header, Text } from '@/atoms';
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
              <Pressable>
                {({ pressed }) => {
                  return (
                    <Box
                      style={{
                        borderColor: palette['primary'],
                        borderWidth: 0.5,
                        borderRadius: 5,
                      }}>
                      <Columns
                        paddingX={12}
                        paddingY={16}
                        style={{
                          borderColor: pressed
                            ? palette['primary']
                            : palette['white'],
                          borderWidth: 1,
                          borderRadius: 5,
                        }}>
                        <Column width="fluid">
                          <Stack horizontal space={8}>
                            <Image
                              source={{ uri: logoUrl }}
                              style={{ width: 30, height: 30 }}
                              resizeMode="contain"
                            />
                            <Stack space={12}>
                              <Text
                                style={{ marginTop: 5 }}
                                fontWeight="500"
                                fontSize="20"
                                lineHeight={20}
                                color="primary">
                                {name}
                              </Text>
                              <Stack space={6} horizontal>
                                <Text
                                  fontWeight="500"
                                  fontSize="20"
                                  lineHeight={20}
                                  color="gray-900">
                                  {myAsset}
                                </Text>
                                <Text
                                  fontWeight="400"
                                  fontSize="12"
                                  lineHeight={20}
                                  color="gray-300">
                                  {unit}
                                </Text>
                              </Stack>
                            </Stack>
                          </Stack>
                        </Column>
                        <Column width="content">
                          <Box
                            paddingY={5}
                            alignX="center"
                            style={{
                              width: 100,
                              borderColor: palette['primary'],
                              borderWidth: 0.5,
                              borderRadius: 50,
                              ...(pressed && {
                                backgroundColor: palette['primary'],
                              }),
                            }}>
                            <Text
                              fontWeight="600"
                              fontSize="14"
                              lineHeight={20}
                              color={pressed ? 'white' : 'primary'}>
                              더보기
                            </Text>
                          </Box>
                        </Column>
                      </Columns>
                    </Box>
                  );
                }}
              </Pressable>
            );
          }}
          ItemSeparatorComponent={() => <Box style={{ height: 10 }} />}
        />
      </BasicLayout>
    </>
  );
};
