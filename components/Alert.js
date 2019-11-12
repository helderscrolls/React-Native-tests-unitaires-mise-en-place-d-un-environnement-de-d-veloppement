import React from 'react';
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4ba37b',
    width: 150,
    height: 30,
    lineHeight: 30,
    borderRadius: 50,
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});

const AlertExample = () => {
  const showAlert = () => {
    Alert.alert('Touché');
  };
  return (
    <TouchableOpacity onPress={showAlert} style={styles.button}>
      <Text>Ajouter un article</Text>
    </TouchableOpacity>
  );
};
export default AlertExample;
