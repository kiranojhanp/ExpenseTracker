import React from 'react';
import {Image, StyleSheet} from 'react-native';

export default function Logo() {
  return (
    <Image
      source={{
        uri:
          'https://www.pureprocesstechnology.com/wp-content/uploads/2019/02/cost-effective-icon.png',
      }}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
});
