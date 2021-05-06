import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  baseInput: {
    paddingVertical: 6,
  },
});

const BaseInput = ({children, label}) => (
  <View style={styles.baseInput}>
    <Text>{label}</Text>
    {children}
  </View>
);

export default BaseInput;
