import React from 'react'
import { View, Text } from 'react-native'

const Label = ({style}) => {
    return (
        <View>
            <Text style={{...style}}>This is styles label</Text>
        </View>
    )
}

export default Label
