import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Alert from './components/Alert';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => (
  <View style={styles.container}>
    <Text>Articles</Text>
    <Alert />
  </View>
);