// Inicio.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const libros = [
    {
        id: '1',
        titulo: 'Caída libre',
        autor: 'Ali Hazelwood',
        imagen: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS1D63PyPtQlbxnIcgGFygGzyhDZqwph9oa6hFv3-sys4FyylXL',
        progress: '50%',
    },
    {
        id: '2',
        titulo: 'Las Rosas de Mayo',
        autor: 'Dot Hutchison',
        imagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/bf/df/bfdfedbedfc51a4003b8c0d6e993dc60.jpg',
        progress: '20%',
    },

];

export default function component3() {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imagen }} style={styles.imagen} />
            <View style={styles.info}>
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Text style={styles.autor}>{item.autor}</Text>
                <View style={styles.progresoContainer}>
                    <View style={[styles.progresoBarra, { width: item.progress }]} />
                </View>
                <Text style={styles.progresoTexto}>{item.progress}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.encabezado}>Lecturas Actuales</Text>
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
    progresoContainer: {
        height: 8,
        width: '100%',
        backgroundColor: '#E0E0E0',
        borderRadius: 5,
        marginTop: 5,
    },
    progresoBarra: {
        height: '100%',
        backgroundColor: '#2196F3',
        borderRadius: 5,
    },
    progresoTexto: {
        fontSize: 12,
        color: '#555',
        marginTop: 3,
    },

});

