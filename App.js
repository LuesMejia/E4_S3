import * as React from 'react';
import { View, StyleSheet } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './components/component1';
import Libros from './components/component2';
import Actual from './components/component3';
import Navbar from './components/Navbar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* Navbar siempre arriba */}
        <Navbar />

        {/* Contenido de navegación */}
        <View style={styles.content}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Inicio" component={Inicio} />
            <Stack.Screen name="Libros" component={Libros} />
            <Stack.Screen name="Actual" component={Actual} />
          </Stack.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
