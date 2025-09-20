import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import bookImage from '../assets/Crimen y castigo.png';
export default function component1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📖 Bienvenido a Tu Mundo de Lectura📖</Text>
      <Text style={styles.quote}>
        “Un libro abierto es un cerebro que habla; cerrado, un amigo que espera.”
      </Text>
      <Text style={styles.subtitle}>✨ Recomendación de hoy✨</Text>
      <Text style={styles.book}>Crimen y castigo – Fiódor Dostoyevski</Text>
        <Image source={bookImage} style={styles.bookEstilo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5DC',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 25,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  book: {
    fontSize: 16,
    color: '#333',
  },
  bookEstilo: {
    width: 150,
    height: 220,        
    marginTop: 20,
  }
});
