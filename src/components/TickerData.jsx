import react, { useState,useEffect } from 'react'

function TickerData({index, coinTicker}){
    const [coinData, setCoinData] = useState('');

    useEffect(() => {
        const getCoinPaprikaLogo = async () => {
            try {
                const response = await fetch(`https://api.coinpaprika.com/v1/tickers/${coinTicker.id}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`)
                }
                const result = await response.json();
                setCoinData(result);
            }
            catch (err) {
                console.error(err.message);
            }
        }
        getCoinPaprikaLogo();
    }, [])
    

    return(
        <>
            <tr>
                <td>{coinTicker.rank}</td>
                <td><span className='coin-logo'>{coinData.logo}</span>{coinTicker.name}</td>
                <td>{coinTicker.quotes.USD.ath_price}</td>
                <td>{coinTicker.quotes.USD.percent_change_1h}</td>
                <td>{coinTicker.quotes.USD.percent_change_12h}</td>
                <td>{coinTicker.quotes.USD.percent_change_7d}</td>
                <td>{coinTicker.quotes.USD.volume_24h}</td>
                <td>{coinTicker.quotes.USD.market_cap}</td>
            </tr>
        </>
    )
}

export default TickerData