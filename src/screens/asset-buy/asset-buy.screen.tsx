import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';

import { RootStackParamList } from '../root.navigator';

import { Header, TextInput } from '@/atoms';
import { BasicLayout } from '@/layouts';

type AssetBuyScreenProps = {};

export type AssetBuyScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'AssetBuyScreen'
>;

export type AssetBuyScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'AssetBuyScreen'
>;

export const AssetBuyScreen = ({}: AssetBuyScreenProps) => {
  const [buyValue, setBuyValue] = useState('');

  return (
    <>
      <Header
        title="토큰 증권 장외 거래소 (매수)"
        titleColor="primary"
        leftIconColor="primary"
        backgroundColor="white"
      />
      <BasicLayout>
        <TextInput
          label={'매도 가능 수량 12 Token'}
          value={buyValue}
          onChangeText={setBuyValue}
          error={false}
          errorMsg={'매수 가능한 수량이 초과되었습니다'}
        />
      </BasicLayout>
    </>
  );
};
