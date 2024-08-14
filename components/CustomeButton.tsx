import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomeButtonProps {
    title?: string
    containerStyle?: string
    textStyle?: string
    isLoading?: boolean
    onPress?: () => void
}

const CustomeButton = ({ title, isLoading, textStyle, containerStyle, onPress }: CustomeButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            className={`bg-yellow-500 rounded-xl min-h-[62px] justify-center items-center mt-10 ${containerStyle} 
            ${isLoading ? 'opacity-50' : ''}
            `}>
            <Text className={`font-psemibold text-primary text-xl ${textStyle}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomeButton
