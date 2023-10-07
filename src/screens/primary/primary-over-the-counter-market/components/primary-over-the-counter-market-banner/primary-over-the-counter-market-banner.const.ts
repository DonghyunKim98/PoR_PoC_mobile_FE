import { ImageSourcePropType } from 'react-native';

import { FAST_ZK_IMG, SECURITY_IMG } from '@/assets';

type BannerItem = {
  img: ImageSourcePropType;
  title: string;
  content: string;
};

export const BANNER_ITEMS: BannerItem[] = [
  {
    img: FAST_ZK_IMG,
    title: '고속 증명',
    content:
      '초 단위 고속 증명으로\n내 자산 데이터를 실시간으로\n확인 가능합니다',
  },
  {
    img: SECURITY_IMG,
    title: '안전 확인',
    content:
      '영지식 증명 기술을 통해\n안전하게 내 자산 데이터를\n확인할 수 있습니다.',
  },
];
