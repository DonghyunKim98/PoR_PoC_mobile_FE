import { TextStyle } from 'react-native';

import {
  fontColorType,
  fontSizeType,
  fontWeightType,
  textAligns,
} from './text.atom';

import { palette } from '@/utils';

export const getTextStyle = (
  fontWeight: fontWeightType,
  fontSize: fontSizeType,
  lineHeight: number,
  letterSpacing?: number,
): TextStyle => {
  const textStyle = {
    fontSize: parseInt(fontSize),
    lineHeight: lineHeight + 2,
    letterSpacing,
  };

  switch (fontWeight) {
    case '950': {
      return {
        ...textStyle,
        fontFamily: 'Pretendard-ExtraBlack',
      };
    }
    case '900': {
      return {
        ...textStyle,
        fontFamily: 'Pretendard-Black',
      };
    }
    case '800': {
      return {
        ...textStyle,
        fontFamily: 'Pretendard-ExtraBold',
      };
    }
    case '700': {
      return {
        ...textStyle,
        fontFamily: 'Pretendard-Bold',
      };
    }
    case '600': {
      return {
        ...textStyle,
        fontFamily: 'Pretendard-SemiBold',
      };
    }
    case '500':
      return {
        ...textStyle,
        fontFamily: 'Pretendard-Medium',
      };
    case '400':
      return {
        ...textStyle,
        fontFamily: 'Pretendard-Normal',
      };
    case '350': {
      return {
        ...textStyle,
        fontFamily: 'Pretendard-SemiLight',
      };
    }
    case '300': {
      return {
        ...textStyle,
        fontFamily: 'Pretendard-Light',
      };
    }
    case '200': {
      return {
        ...textStyle,
        fontFamily: 'Pretendard-ExtraLight',
      };
    }
    case '100': {
      return {
        ...textStyle,
        fontFamily: 'Pretendard-Thin',
      };
    }
    default:
      return {
        ...textStyle,
        fontFamily: 'Pretendard-Medium',
      };
  }
};

export const getColorStyle = (color: fontColorType): TextStyle => {
  return { color: palette[color] };
};

export const getTextAlignStyle = (
  textAlign?: textAligns,
): { textAlign: textAligns } => {
  if (!textAlign) {
    return { textAlign: 'auto' };
  }
  return { textAlign };
};
