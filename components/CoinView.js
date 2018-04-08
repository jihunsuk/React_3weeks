import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CoinDetail from './CoinDetail';
import { getCoinIconUri } from '../libs/Constants';

const sampleData = [
    {
        "id": "bitcoin", 
        "name": "Bitcoin", 
        "symbol": "BTC", 
        "rank": "1", 
        "price_usd": "6965.45", 
        "price_btc": "1.0", 
        "24h_volume_usd": "3800210000.0", 
        "market_cap_usd": "118167292024", 
        "available_supply": "16964775.0", 
        "total_supply": "16964775.0", 
        "max_supply": "21000000.0", 
        "percent_change_1h": "-0.42", 
        "percent_change_24h": "1.41", 
        "percent_change_7d": "1.01", 
        "last_updated": "1523167466"
    }, 
    {
        "id": "ethereum", 
        "name": "Ethereum", 
        "symbol": "ETH", 
        "rank": "2", 
        "price_usd": "388.814", 
        "price_btc": "0.0559943", 
        "24h_volume_usd": "913623000.0", 
        "market_cap_usd": "38370409742.0", 
        "available_supply": "98685772.0", 
        "total_supply": "98685772.0", 
        "max_supply": null, 
        "percent_change_1h": "-0.53", 
        "percent_change_24h": "1.93", 
        "percent_change_7d": "-0.23", 
        "last_updated": "1523167454"
    }, 
    {
        "id": "ripple", 
        "name": "Ripple", 
        "symbol": "XRP", 
        "rank": "3", 
        "price_usd": "0.489639", 
        "price_btc": "0.00007051", 
        "24h_volume_usd": "164705000.0", 
        "market_cap_usd": "19142201983.0", 
        "available_supply": "39094520623.0", 
        "total_supply": "99992405149.0", 
        "max_supply": "100000000000", 
        "percent_change_1h": "-0.28", 
        "percent_change_24h": "-0.08", 
        "percent_change_7d": "-2.42", 
        "last_updated": "1523167441"
    }, 
    {
        "id": "bitcoin-cash", 
        "name": "Bitcoin Cash", 
        "symbol": "BCH", 
        "rank": "4", 
        "price_usd": "648.761", 
        "price_btc": "0.0934299", 
        "24h_volume_usd": "208976000.0", 
        "market_cap_usd": "11068843911.0", 
        "available_supply": "17061513.0", 
        "total_supply": "17061513.0", 
        "max_supply": "21000000.0", 
        "percent_change_1h": "-0.37", 
        "percent_change_24h": "2.61", 
        "percent_change_7d": "-3.97", 
        "last_updated": "1523167451"
    }, 
    {
        "id": "litecoin", 
        "name": "Litecoin", 
        "symbol": "LTC", 
        "rank": "5", 
        "price_usd": "116.454", 
        "price_btc": "0.0167708", 
        "24h_volume_usd": "201269000.0", 
        "market_cap_usd": "6519885285.0", 
        "available_supply": "55986787.0", 
        "total_supply": "55986787.0", 
        "max_supply": "84000000.0", 
        "percent_change_1h": "-0.59", 
        "percent_change_24h": "-1.22", 
        "percent_change_7d": "1.06", 
        "last_updated": "1523167441"
    }, 
    {
        "id": "eos", 
        "name": "EOS", 
        "symbol": "EOS", 
        "rank": "6", 
        "price_usd": "5.87564", 
        "price_btc": "0.00084617", 
        "24h_volume_usd": "191627000.0", 
        "market_cap_usd": "4575260280.0", 
        "available_supply": "778682880.0", 
        "total_supply": "900000000.0", 
        "max_supply": "1000000000.0", 
        "percent_change_1h": "-0.43", 
        "percent_change_24h": "-1.24", 
        "percent_change_7d": "0.13", 
        "last_updated": "1523167451"
    }, 
    {
        "id": "cardano", 
        "name": "Cardano", 
        "symbol": "ADA", 
        "rank": "7", 
        "price_usd": "0.151518", 
        "price_btc": "0.00002182", 
        "24h_volume_usd": "43165400.0", 
        "market_cap_usd": "3928417874.0", 
        "available_supply": "25927070538.0", 
        "total_supply": "31112483745.0", 
        "max_supply": "45000000000.0", 
        "percent_change_1h": "0.17", 
        "percent_change_24h": "2.14", 
        "percent_change_7d": "-1.12", 
        "last_updated": "1523167454"
    }, 
    {
        "id": "stellar", 
        "name": "Stellar", 
        "symbol": "XLM", 
        "rank": "8", 
        "price_usd": "0.201748", 
        "price_btc": "0.00002905", 
        "24h_volume_usd": "23826500.0", 
        "market_cap_usd": "3742619524.0", 
        "available_supply": "18550962212.0", 
        "total_supply": "103827633055", 
        "max_supply": null, 
        "percent_change_1h": "-0.54", 
        "percent_change_24h": "-0.51", 
        "percent_change_7d": "-2.04", 
        "last_updated": "1523167444"
    }, 
];

class CoinView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          coinDatas: [],
          isLoaded: false,
        };
        // Toggle the state every second
      }

      componentDidMount() { // After component loaded
        this._getCoinDatas(30);
        setInterval(() => {
          this._getCoinDatas(30);
          console.log('toggled!');
        }, 10000);
      }

      _getCoinDatas(limit) {
        this.setState({
          isLoaded: false,
        });
    
        fetch(
          `https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`
        )
        .then(response => response.json())
        .then(data => {
          let date = new Date();
          let now = date.toLocaleString()
    
          if (this.props.refreshDate != null) {
            this.props.refreshDate(now);
          }
    
          this.setState({
            coinDatas: data,
            isLoaded: true,
          });
        });
      }

    render () {
        // let detailCells = [];
        // for (var i=0; i< sampleData.length; i++){
        //     let data = sampleData[i];
        //     let coinDetail = (
        //         <CoinDetail
        //             key={data.index}
        //             rank={data.rank}
        //             name={data.name}
        //             price={data.price_usd}
        //             volumn={data.market_cap_usd}
        //         />
        //     );
        //     detailCells.push(coinDetail);
        // 
        let detailCells = this.state.coinDatas.map( (data, index) => {
            const {rank, name, price_usd, market_cap_usd, last_updated} = data; // Destructuring
            return (
            <CoinDetail
                iconUri={getCoinIconUri(name)}
                key={index}
                rank={rank}
                name={name}
                price={price_usd}
                volumn={market_cap_usd}
                time={last_updated}
            />
            );
        });
          
        return (
            <ScrollView style={this.props.style}>
                {detailCells}
            </ScrollView>
        );
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