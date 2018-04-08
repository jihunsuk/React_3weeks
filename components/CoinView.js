import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

class CoinView extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>New View</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        backgroundColor : 'skyblue',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})

export default CoinView;