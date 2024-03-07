import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import WellnessScreen from '../screens/WellnessScreen';
import CommunityScreen from '../screens/CommunityScreen';
import Colors from '../utils/Colors.js';
import LoginScreen from '../screens/LoginScreen.jsx';
import DashboardScreen from '../screens/DashboardScreen.jsx';


const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.PRIMARY }} initialRouteName='Login'>
            <Tab.Screen name="Login" component={LoginScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="people" size={24} color={color} />
                    ),
                    tabBarLabel: ({ color, size }) => (
                        <Text style={{ color: color, }}>Login Screen</Text>
                    )
                }} />


            <Tab.Screen name="home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={24} color={color} />
                    ),
                    tabBarLabel: ({ color, size }) => (
                        <Text style={{ color: color, }}>Home</Text>
                    )
                }} />

            <Tab.Screen name="wellness" component={WellnessScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" size={24} color={color} />
                    ),
                    tabBarLabel: ({ color, size }) => (
                        <Text style={{ color: color, }}>Wellness</Text>
                    )
                }} />


            <Tab.Screen name="Community" component={CommunityScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="people" size={24} color={color} />
                    ),
                    tabBarLabel: ({ color, size }) => (
                        <Text style={{ color: color, }}>Community</Text>
                    )
                }} />


        </Tab.Navigator>
    )
}

export default TabsNavigation