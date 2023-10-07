import {
  CheckAssetModalStep,
  CheckAssetModalType,
} from './primary-over-the-counter-market-check-asset-modal.type';

export const getTextByModalTypeAndStep = (
  type: CheckAssetModalType,
  step: CheckAssetModalStep,
) => {
  if (type === 'BUY') {
    switch (step) {
      case 'CHECK_ASSET':
        return '관리기관에 매수 가능 잔고가\n존재하는지 확인중에 있습니다';

      case 'CONFIRM_ASSET':
        return '매수 가능 잔고가 정상적으로\n확인되었습니다';

      case 'NOT_COINCIDED':
        return '매수 가능 잔고가 공표된 자산과\n일치하지 않습니다.';
    }
  }
  switch (step) {
    case 'CHECK_ASSET':
      return '관리기관에 매도 가능 잔고가\n존재하는지 확인중에 있습니다';

    case 'CONFIRM_ASSET':
      return '매도 가능 잔고가 정상적으로\n확인되었습니다.';

    case 'NOT_COINCIDED':
      return '매도 가능 잔고가 공표된 자산과\n일치하지 않습니다.';
  }
};

export const getButtonTextByModalTypeAndStep = (
  type: CheckAssetModalType,
  step: CheckAssetModalStep,
) => {
  if (type === 'BUY') {
    switch (step) {
      case 'CHECK_ASSET':
        return ' ';

      case 'CONFIRM_ASSET':
        return '매수하기';

      case 'NOT_COINCIDED':
        return '홈으로 가기';
    }
  }
  switch (step) {
    case 'CHECK_ASSET':
      return ' ';

    case 'CONFIRM_ASSET':
      return '매도하기';

    case 'NOT_COINCIDED':
      return '홈으로 가기';
  }
};
