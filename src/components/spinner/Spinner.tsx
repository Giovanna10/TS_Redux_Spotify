import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import styles from './spinnerStyles'

export const Spinner = () => (
    <View style={styles.container}>
        <ActivityIndicator size='large' color='#1DB954' />
    </View>
)

