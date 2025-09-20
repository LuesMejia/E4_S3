// Inicio.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const libros = [
  {
    id: '1',
    titulo: 'Cien Años de Soledad',
    autor: 'Gabriel García Márquez',
    imagen: 'https://metromedia.hn/web/image/product.template/272269/image?unique=7265a2b',
  },
  {
    id: '2',
    titulo: 'Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    imagen: 'https://metromedia.hn/web/image/product.template/272855/image?unique=1f04893',
  },
  {
    id: '3',
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
    imagen: 'https://metromedia.hn/web/image/product.template/273905/image?unique=2ad656a',
  },
   {
    id: '4',
    titulo: 'Damian',
    autor: 'Alex Mirez',
    imagen: 'https://metromedia.hn/web/image/product.template/270308/image?unique=3ff955f',
  },
    {
    id: '5',
    titulo: 'Perfectos mentirosos 1',
    autor: 'Alex Mirez',
    imagen: 'https://metromedia.hn/web/image/product.template/224696/image?unique=f72b2c4',
  },
    {
    id: '6',
    titulo: 'Perfectos mentirosos 2',
    autor: 'Alex Mirez',
    imagen: 'https://metromedia.hn/web/image/product.template/224695/image?unique=22bd32c',
  },
];

export default function Inicio() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagen }} style={styles.imagen} />
      <View style={styles.info}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.autor}>{item.autor}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.encabezado}>Lista de Libros Leidos</Text>
      <FlatList
        data={libros}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F5F5F5',
  },
  encabezado: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  imagen: {
    width: 60,
    height: 90,
    borderRadius: 5,
  },
  info: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  autor: {
    fontSize: 14,
    color: '#555',
  },
});

