import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const AuthLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack >
                <Stack.Screen name='sign-in' options={{ headerShown: false }} />
                <Stack.Screen name='sign-up' options={{ headerShown: false }} />
            </Stack>
            <StatusBar style="dark" backgroundColor='#161622' />
        </GestureHandlerRootView>
    )
}

export default AuthLayout

const styles = StyleSheet.create({})