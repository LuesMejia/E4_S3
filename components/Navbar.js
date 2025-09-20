import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
    const navigation = useNavigation();

    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
                <Text style={styles.link}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Libros')}>
                <Text style={styles.link}>Libros</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Actual')}>
                <Text style={styles.link}>Actual</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#abdbeeff',
        paddingVertical: 15,
        padding:20,
        marginTop:25,
    },
    link:
    {
        color: '#fff',
        fontSize: 16,
    },
});