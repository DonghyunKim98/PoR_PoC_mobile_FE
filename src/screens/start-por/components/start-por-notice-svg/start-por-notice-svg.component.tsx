import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';

export const StartPoRNoticeSVG = memo(() => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M9 5.25V9.75V5.25ZM9 12.7575L9.0075 12.7493L9 12.7575ZM9 16.5C13.1423 16.5 16.5 13.1423 16.5 9C16.5 4.85775 13.1423 1.5 9 1.5C4.85775 1.5 1.5 4.85775 1.5 9C1.5 13.1423 4.85775 16.5 9 16.5Z"
        fill="#404E56"
      />
      <Path
        d="M9 5.24805V9.74805V5.24805ZM9 12.7555L9.0075 12.7473L9 12.7555Z"
        fill="white"
      />
      <Path
        d="M9 5.24805V9.74805M9 12.7555L9.0075 12.7473"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
});
