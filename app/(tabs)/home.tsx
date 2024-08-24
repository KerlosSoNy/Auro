import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView className='p-3'>
                <Text className='text-white'>Home</Text>
                <StatusBar backgroundColor='#161622' style='light' />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})