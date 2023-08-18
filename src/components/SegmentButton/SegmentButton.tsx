import React, { useState } from 'react';
import { SafeAreaView , StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { SegmentButtonProps } from '../../interface/SegmentInterface/SegmentInterface';


export const SegmentButton: React.FC<SegmentButtonProps> = ({
  segments,
  containerStyle,
  theme,
  onChange,
}) => {
  const [value, setValue] = useState<string>('');

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    onChange(newValue);
  };
  
  return (
    <SafeAreaView style = {[styles.container,containerStyle]}>
      <SegmentedButtons
        value={value}
        onValueChange={handleValueChange}
        buttons={segments}
        theme={theme}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
  
    alignItems: 'center',
    justifyContent: 'center',
  },
});
