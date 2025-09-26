import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Detalles</Text>
      <Text style={styles.text}>¡Navegación exitosa!</Text>
      <Button
        title="Volver al Inicio"
        onPress={() => navigation.goBack()}
        color="#FF3B30"
      />
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
        color="#007AFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default DetailsScreen;