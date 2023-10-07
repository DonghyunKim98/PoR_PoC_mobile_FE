import { Text as RNText, TextProps as RNTextProps } from 'react-native';

import { getColorStyle, getTextAlignStyle, getTextStyle } from './text.util';

import { palette } from '@/utils';

export type textAligns = 'auto' | 'left' | 'right' | 'center' | 'justify';
export type fontWeightType =
  | '950'
  | '900'
  | '800'
  | '700'
  | '600'
  | '500'
  | '400'
  | '300'
  | '350'
  | '200'
  | '100';
export type fontSizeType =
  | '8'
  | '10'
  | '12'
  | '14'
  | '16'
  | '18'
  | '20'
  | '23'
  | '25'
  | '28';
export type fontColorType = keyof typeof palette;

type TextProps = RNTextProps & {
  fontWeight: fontWeightType;
  fontSize: fontSizeType;
  lineHeight: number;
  color: fontColorType;
  letterSpacing?: number;
  textAlignment?: textAligns;
};

export const Text = ({
  children,
  fontWeight,
  fontSize,
  color,
  lineHeight,
  letterSpacing,
  textAlignment,
  style,
  ...props
}: TextProps) => {
  const categoryStyle = getTextStyle(
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
  );
  const colorStyle = getColorStyle(color);
  const textAlignmentStyle = getTextAlignStyle(textAlignment);

  return (
    <RNText
      style={[categoryStyle, colorStyle, textAlignmentStyle, style]}
      {...props}>
      {children}
    </RNText>
  );
};
