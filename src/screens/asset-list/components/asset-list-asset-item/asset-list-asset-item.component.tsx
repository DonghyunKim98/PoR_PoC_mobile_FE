import { Box, Columns, Column, Stack } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Image } from 'react-native';

import {
  AssetListScreenNavigationProps,
  AssetListScreenNavigationRouteProps,
} from '../../asset-list.screen';

import { Text } from '@/atoms';
import { getReadAssetsResponseData } from '@/hooks';
import { palette } from '@/utils';

type AssetListAssetItemProps = getReadAssetsResponseData['data'][0];

export const AssetListAssetItem = memo<AssetListAssetItemProps>(
  ({ name, logoUrl, unit, myAsset, assetId }) => {
    const navigation = useNavigation<AssetListScreenNavigationProps>();
    const {
      params: { key },
    } = useRoute<AssetListScreenNavigationRouteProps>();

    const { t } = useTranslation();

    const handlePressAssetItem = () => {
      navigation.navigate('AssetPorConfirmScreen', {
        key,
        assetId,
      });
    };

    return (
      <Pressable onPress={handlePressAssetItem}>
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
                  borderColor: pressed ? palette['primary'] : palette['white'],
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
                          fontSize="14"
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
                      {t('assetListScreen_assetItem_button')}
                    </Text>
                  </Box>
                </Column>
              </Columns>
            </Box>
          );
        }}
      </Pressable>
    );
  },
);
