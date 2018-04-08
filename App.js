import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoinView from './components/CoinView';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CoinView></CoinView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
