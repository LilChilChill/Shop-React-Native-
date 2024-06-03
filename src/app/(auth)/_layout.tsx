import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import Signin from './Signin';
import Signup from './Signup';
import { Header } from 'react-native/Libraries/NewAppScreen';

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name="Signin" options={{ headerShown: false }} />
            <Stack.Screen name="Signup" options={{ headerShown: false }}/>
        </Stack>
      );
    }

export default _layout