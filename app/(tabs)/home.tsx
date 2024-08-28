import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { images } from '../../constants'
import SearchInput from '@/components/SearchInput'
const Home = () => {
    return (
        <SafeAreaView className='bg-primary h-full'>
            <FlatList
                data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
                ListHeaderComponent={() =>
                    <View className='my-6  px-4 space-y-6 text-3xl text-white'>
                        <View className='flex flex-row justify-between items-center mb-6'>
                            <View>
                                <Text className='font-pmedium text-white text-sm'>
                                    Welcome Back
                                </Text>
                                <Text className='text-white text-3xl font-psemibold'>
                                    JsMastery
                                </Text>
                            </View>
                            <View className='mt-1.5'>
                                <Image
                                    className='w-9 h-10'
                                    resizeMode='contain'
                                    source={images.logoSmall}
                                />
                            </View>
                        </View>
                        <SearchInput />
                    </View>}
                renderItem={({ item }) => <Text className='text-3xl text-white'>{item.id}</Text>}
            // keyExtractor={item => item.id}
            />
            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})