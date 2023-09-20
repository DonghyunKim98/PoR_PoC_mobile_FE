export const getPorConfirmLoadingText = (copy: number) => {
  if (copy > 4) {
    return '내 자산 데이터를\n확인하고 있습니다.';
  }
  if (copy > 2) {
    return '내 자산 데이터 포함 여부를\n확인하고 있습니다.';
  }
  return '공표된 자산이 실제 총자산과 일치하는지\n확인하고 있습니다.';
};
