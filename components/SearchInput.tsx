import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

import { icons } from '@/constants'
interface FormFieldProps {
    title?: string
    value?: string
    handleChange?: (value: any) => void
    otherStyles?: string
    keyboardType?: string
    placHolder?: string
}

export default function SearchInput({ title, value, handleChange, placHolder, otherStyles, keyboardType, ...props }: FormFieldProps) {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className='w-full h-16 px-4 bg-black-200 flex items-center flex-row border-2 border-black-200 rounded-2xl focus:border-yellow-500 space-y-6'>
            <TextInput
                className='text-base mt-0.5 text-white flex-1 font-pregular'
                value={value}
                onChangeText={handleChange}
                placeholder={placHolder}
                placeholderTextColor='#7b7b8b'
                secureTextEntry={title == 'Password' && !showPassword}
            />
            <TouchableOpacity className='absolute right-4'>
                <Image source={icons.search} className='w-6 h-6 my-auto' resizeMode='contain' />
            </TouchableOpacity>
        </View>
    )
}


