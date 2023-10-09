import { Box, Stack } from '@mobily/stacks';
import { TextInput as RNTextInput } from 'react-native';

import { Text } from '../text';

import { palette } from '@/utils';

type TextInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error: boolean;
  errorMsg?: string;
};

export const TextInput = ({
  label,
  value,
  onChangeText,
  error,
  errorMsg,
}: TextInputProps) => {
  return (
    <Stack space={8}>
      <Text
        style={{ marginLeft: 8 }}
        fontWeight="500"
        fontSize="12"
        lineHeight={14}
        color="gray-700">
        {label}
      </Text>
      <Box
        direction="row"
        alignX="right"
        alignY="bottom"
        paddingX={20}
        style={{
          borderColor: error ? palette['error'] : palette['gray-700'],
          borderWidth: 1,
          borderRadius: 6,
        }}>
        <RNTextInput
          textAlign="right"
          value={value}
          onChangeText={onChangeText}
          style={{
            width: '100%',
            fontFamily: 'Pretendard-Normal',
            fontSize: 40,
            lineHeight: 48,
            color: error ? palette['error'] : palette['primary'],
          }}
          keyboardType="number-pad"
        />
        <Text
          style={{ marginBottom: 24 }}
          fontWeight="500"
          fontSize="12"
          lineHeight={14}
          color="gray-700">
          Token
        </Text>
      </Box>
      {error && (
        <Text fontWeight="500" fontSize="12" lineHeight={14} color="error">
          {errorMsg}
        </Text>
      )}
    </Stack>
  );
};
