import random from 'lodash/random';
import sampleSize from 'lodash/sampleSize';

export const getRandomCommitments = (
  commitments: [string, string][],
  myCommitment: [string, string],
): [string, string][] => {
  // myCommitment를 제외한 나머지 commitments 배열을 만듭니다.
  const otherCommitments = commitments.filter(
    commitment =>
      commitment[0] !== myCommitment[0] && commitment[1] !== myCommitment[1],
  );

  // 2, 3, 4번째 위치 중 랜덤으로 하나 선택합니다.
  const randomIndex = random(1, 3); // 1, 2, 3 중 하나가 선택됩니다.

  // myCommitment와 랜덤으로 선택된 7개의 commitments를 조합하여 최종 배열을 만듭니다.
  const selectedCommitments = [...sampleSize(otherCommitments, 10)];

  // 랜덤으로 선택한 위치에 myCommitment를 삽입합니다.
  selectedCommitments.splice(randomIndex, 0, myCommitment);

  return selectedCommitments;
};
