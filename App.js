import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomePage from './screen/HomePage';
import AboutUs from './screen/AboutUs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./image/fashion.jpg')} style={{ width: '100%', height: 400 }}></ImageBackground>
      <View style={styles.footer}>
        <Text style={styles.title}>HHM STORE</Text>
        <Pressable onPress={() => navigation.navigate('HomePage')}
          style={styles.button}>
          <Text style={styles.textButton}>Home page</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('AboutUs')}
          style={styles.button}>
          <Text style={styles.textButton}>About us</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'lavender',
  },
  title: {
    color: 'orangered',
    fontSize: 50,
    fontWeight: 'bold',
    marginLeft: 40,
  },
  button: {
    margin: 10,
    width: 340,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightskyblue',
  },
  textButton: {
    fontSize: 25,
  },
});


