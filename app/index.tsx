import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function RootLayout() {

    return (
        <View className="flex-1 items-center justify-center bg-primary">
            <Text className='text-white font-pblack'>Welcome To Auro </Text>
            <Link href={'/home' as any} style={{ color: 'red' }}>Go to home</Link>
        </View>
    );
}

