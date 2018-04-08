import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

class CoinView extends React.Component {
    render () {
        return (
            <View style={this.props.style}>
                <Text style={{color: 'red'}}>코인뷰가 나올것입니다.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        backgroundColor : 'white',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})

export default CoinView;