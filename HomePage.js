import React from 'react';
import { StyleSheet, Text, View, SearchBar } from 'react-native';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { State } from 'react-native-gesture-handler';

function HomePage() {
    return (
        <View>
            <Text>đây là trang web bán hàng</Text>
        </View>
    )
}
export default HomePage;