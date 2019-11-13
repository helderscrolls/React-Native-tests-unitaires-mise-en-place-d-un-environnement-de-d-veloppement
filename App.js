import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  const showAlert = () => {
    Alert.alert('Touché');
  };

  return (
    <View style={styles.container}>
      <Text>Articles</Text>
      <Button onPress={showAlert} title="Ajouter un article" />
    </View>
  );
};
