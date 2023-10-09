import { BuyAssetModalStep } from './asset-buy-modal.type';
import { BUY_ASSET_LOTTIE, CHECK_CONFIRM_LOTTIE } from './assets';

export const getTextByModalStep = (step: BuyAssetModalStep) => {
  switch (step) {
    case 'BUY_ASSET':
      return '관리기관에 있는 귀하의 잔고에\n정상적인 매수 거래가 이루어졌는지\n확인중입니다.';

    case 'CONFIRM_ASSET':
      return '귀하의 잔고에 정상적으로\n매수처리 되었습니다.';
  }
};

export const getTextColorByStep = (step: BuyAssetModalStep) => {
  switch (step) {
    case 'BUY_ASSET':
      return 'white';

    case 'CONFIRM_ASSET':
      return 'green-check';
  }
};

export const getButtonTextByModalStep = (step: BuyAssetModalStep) => {
  switch (step) {
    case 'BUY_ASSET':
      return ' ';

    case 'CONFIRM_ASSET':
      return '홈으로 가기';
  }
};

export const getLottieSourceByModalStep = (step: BuyAssetModalStep) => {
  switch (step) {
    case 'BUY_ASSET':
      return BUY_ASSET_LOTTIE;

    case 'CONFIRM_ASSET':
      return CHECK_CONFIRM_LOTTIE;
  }
};
