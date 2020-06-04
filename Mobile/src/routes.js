import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

const TabBar = createBottomTabNavigator();

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home',
    },
    Settings: {
        lib: AntDesign,
        name: 'setting',
    },
    Profile: {
        lib: AntDesign,
        name: 'user',
    },
};

export default function Routes() {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <NavigationContainer>
                <TabBar.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => {
                            const { lib: Icon, name } = icons[route.name];

                            return (
                                <Icon name={name} color={color} size={size} />
                            );
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: '#fff',
                        inactiveTintColor: '#808080',
                        style: {
                            backgroundColor: '#000000',
                        },
                    }}
                >
                    <TabBar.Screen name="Home" component={Dashboard} />
                    <TabBar.Screen name="Settings" component={Dashboard} />
                    <TabBar.Screen name="Profile" component={Dashboard} />
                </TabBar.Navigator>
            </NavigationContainer>
        </>
    );
}
