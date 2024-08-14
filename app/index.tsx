import CustomeButton from '@/components/CustomeButton';
import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';

export default function RootLayout() {
    return (
        <SafeAreaView className="bg-primary w-full h-screen">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center items-center h-full px-4">
                    <Image
                        source={require('../assets/images/logo.png')}
                        resizeMode="contain"
                        className='w-[130px] h-[84px]' // Add width and height as required
                    />
                    <Image
                        source={require('../assets/Onboarding-img.png')}
                        resizeMode="contain"
                        className='max-w-[380px] w-full h-[300px]' // Add width and height as required
                    />
                    <View className='relative mt-5 text-[40px]'>
                        <Text className='text-white text-center font-bold text-3xl'>Discover Endless Possibilities with
                            <Text className='text-yellow-500 font-bold text-3xl'> Aora</Text>
                        </Text>
                        <Image className='absolute -bottom-2  -right-0 w-[76px] h-[15px]' source={require('../assets/images/path.png')} />
                    </View>
                    <Text className='text-white font-pregular text-center text-sm mt-4'>Aora is a platform that provides you with the best experience for learning.
                    </Text>
                    <CustomeButton
                        title='Continue with Email'
                        onPress={() => router.push('/sign-in')}
                        containerStyle='w-full'
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    );
}


