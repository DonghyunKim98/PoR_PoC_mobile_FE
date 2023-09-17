import { Column, Columns, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type AssetPoRConfirmMyCommitmentProps = {
  myCommitment: [string, string];
};

export const AssetPoRConfirmMyCommitment =
  memo<AssetPoRConfirmMyCommitmentProps>(({ myCommitment }) => {
    const { t } = useTranslation();

    return (
      <Stack space={8}>
        <Text fontWeight="700" fontSize="16" lineHeight={16} color="primary">
          {t('assetPorConfirmScreen_myCommitment')}
        </Text>
        <TouchableOpacity>
          <Columns
            space={8}
            style={{ backgroundColor: palette['gray-200'], borderRadius: 4 }}
            padding={12}
            alignY="bottom">
            <Column width="fluid">
              <Text
                fontWeight="300"
                fontSize="12"
                lineHeight={12}
                color="gray-800">
                {myCommitment[0] + ',' + myCommitment[1]}
              </Text>
            </Column>
            <Column width="content">
              <Icon name="content-copy" size={16} color={palette['primary']} />
            </Column>
          </Columns>
        </TouchableOpacity>
      </Stack>
    );
  });
