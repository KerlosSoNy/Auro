import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import FormField from '@/components/FormField'
import CustomeButton from '@/components/CustomeButton'
import { Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { signIn } from '../lip/appwrite'

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const submit = async () => {
        if (!form.email || !form.password) {
            Alert.alert('Error', 'Please fill in all fields')
        }
        setIsSubmitting(true)
        try {
            const result = await signIn({ data: form })
            router.replace('/home')
        } catch (error) {
            console.log(error)
            Alert.alert('Error', 'Something went wrong')
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full justify-center items-center px-4 py-6 min-h-[80vh]'>
                    <Image source={require('../../assets/images/logo.png')} resizeMode='contain'
                        className='w-[150px] h-[35px]'
                    />
                    <Text className='text-white font-psemibold text-3xl mt-10'>
                        Log in into Aora
                    </Text>
                    <FormField
                        title="Email"
                        value={form.email}
                        handleChange={(value: any) => setForm({ ...form, email: value })}
                        otherStyles='mt-7'
                        keyboardType='email-address'
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChange={(value: any) => setForm({ ...form, password: value })}
                        otherStyles='mt-7'
                    />
                    <CustomeButton
                        title='Sign in'
                        textStyle='text-xl'
                        containerStyle='mt-7 w-full'
                        onPress={submit}
                        isLoading={isSubmitting}
                    />
                    <View className='justify-center items-center pt-5 flex-row gap-2'>
                        <Text className='text-lg text-gray-100'>
                            Don't have an account?
                        </Text>
                        <Link href='/sign-up' className='text-lg text-yellow-500'>Sign up</Link>
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style="light" />
        </SafeAreaView>
    )
}

export default SignIn
