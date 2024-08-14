import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import FormField from '@/components/FormField'

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full justify-center items-center px-4 py-6 min-h-[85vh]'>
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
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn
