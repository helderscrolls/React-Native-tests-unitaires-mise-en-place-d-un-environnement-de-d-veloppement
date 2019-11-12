import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Alert from './components/Alert';

export default () => (
  <View style={styles.container}>
    <Text>Articles</Text>
    <Alert />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
