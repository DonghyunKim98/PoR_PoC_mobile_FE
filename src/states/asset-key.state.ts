import { atom } from 'recoil';

type userKeyState = {
  key: string;
};

export const $userKeyState = atom<userKeyState>({
  key: 'userKeyState',
  default: {
    key: '',
  },
});
