import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

const ScrollInputComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [inputText, setInputText] = useState('');
  const [focusStatus, setFocusStatus] = useState('Sin foco');

  const handleScroll = (event) => {
    const y = event.nativeEvent.contentOffset.y;
    setScrollPosition(Math.round(y));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos de Scroll y Input</Text>
      
      <View style={styles.statusContainer}>
        <Text>Posición de Scroll: {scrollPosition}px</Text>
        <Text>Estado: {focusStatus}</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
        value={inputText}
        onChangeText={(text) => {
          setInputText(text);
          setFocusStatus('Escribiendo...');
        }}
        onFocus={() => setFocusStatus('Input con foco')}
        onBlur={() => setFocusStatus('Input sin foco')}
        onSubmitEditing={() => setFocusStatus('Texto enviado')}
      />

      <ScrollView
        style={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onScrollBeginDrag={() => setFocusStatus('Comenzó scroll')}
        onScrollEndDrag={() => setFocusStatus('Terminó scroll')}
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <View key={index} style={styles.scrollItem}>
            <Text>Elemento {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    height: 400,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  statusContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  scrollItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: 'white',
  },
});

export default ScrollInputComponent;