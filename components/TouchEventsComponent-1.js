import React, { useState } from 'react';
import { View, Text, Pressable, Alert, StyleSheet } from 'react-native';

const TouchEventsComponent = () => {
  const [eventLog, setEventLog] = useState('');

  const logEvent = (eventName) => {
    setEventLog(prev => `${prev}${eventName}\n`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos de Touch con Pressable</Text>
      
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}
        onPress={() => {
          logEvent('onPress: Botón presionado');
          Alert.alert('Presión', 'Botón presionado normalmente');
        }}
        onLongPress={() => {
          logEvent('onLongPress: Botón mantenido');
          Alert.alert('Long Press', 'Mantuviste presionado el botón');
        }}
        onPressIn={() => logEvent('onPressIn: Comenzó presión')}
        onPressOut={() => logEvent('onPressOut: Terminó presión')}
        delayLongPress={2000}
      >
        {({ pressed }) => (
          <Text style={styles.buttonText}>
            {pressed ? 'Presionando...' : 'Presióname'}
          </Text>
        )}
      </Pressable>
      
      <Text style={styles.logTitle}>Registro de Eventos:</Text>
      <Text style={styles.log}>{eventLog || 'Presiona el botón...'}</Text>
      
      <Pressable
        style={[styles.button, styles.clearButton]}
        onPress={() => setEventLog('')}
      >
        <Text style={styles.buttonText}>Limpiar Registro</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonPressed: {
    backgroundColor: '#0056CC',
    transform: [{ scale: 0.95 }],
  },
  clearButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  logTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  log: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    minHeight: 120,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 14,
    color: '#666',
  },
});

export default TouchEventsComponent;