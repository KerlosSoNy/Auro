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

export default function FormField({ title, value, handleChange, placHolder, otherStyles, keyboardType, ...props }: FormFieldProps) {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles} w-full`}>
            <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
            <View className='w-full h-16 px-4 bg-black-200 flex items-center flex-row border-2 border-black-200 rounded-2xl focus:border-yellow-500'>
                <TextInput
                    className='flex-1 text-white font-psemibold text-base'
                    value={value}
                    onChangeText={handleChange}
                    placeholder={placHolder}
                    placeholderTextColor='#7b7b8b'
                    secureTextEntry={title == 'Password' && !showPassword}
                />
                {
                    title == 'Password' && (
                        <TouchableOpacity className='absolute right-4' onPress={() => setShowPassword(!showPassword)}>
                            <Image source={showPassword ? icons.eye : icons.eyeHide} className='w-6 h-6 my-auto' resizeMode='contain' />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}


