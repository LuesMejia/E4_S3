import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, Alert, StyleSheet } from 'react-native';

const LayoutToggleComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [layoutInfo, setLayoutInfo] = useState({});

  const handleLayout = (event) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setLayoutInfo({
      x: Math.round(x),
      y: Math.round(y),
      width: Math.round(width),
      height: Math.round(height)
    });
  };

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos de Layout y Toggle</Text>
      
      <View 
        style={[styles.layoutBox, isEnabled && styles.layoutBoxActive]}
        onLayout={handleLayout}
      >
        <Text style={styles.boxText}>Caja de Layout</Text>
        <Text style={styles.dimensions}>
          {layoutInfo.width ? `${layoutInfo.width}x${layoutInfo.height}` : 'Sin medir'}
        </Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.button, isEnabled && styles.buttonActive]}
          onPress={() => Alert.alert('Info', `Estado: ${isEnabled ? 'Activado' : 'Desactivado'}`)}
          onLongPress={() => Alert.alert('Long Press', 'Mantuviste presionado')}
        >
          <Text style={styles.buttonText}>Ver Estado</Text>
        </TouchableOpacity>

        <View style={styles.switchContainer}>
          <Text>Toggle: {isEnabled ? 'ON' : 'OFF'}</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      <View style={styles.info}>
        <Text>Datos de Layout:</Text>
        <Text>X: {layoutInfo.x}, Y: {layoutInfo.y}</Text>
        <Text>Ancho: {layoutInfo.width}, Alto: {layoutInfo.height}</Text>
      </View>
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
  },
  layoutBox: {
    padding: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  layoutBoxActive: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
    borderWidth: 2,
  },
  boxText: {
    fontWeight: '600',
  },
  dimensions: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonActive: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  info: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default LayoutToggleComponent;