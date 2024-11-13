import react, { useEffect, useState } from 'react'
import Loader from './Loader';
import TickerData from './TickerData';

function Market() {
    const [coinsData, setCoinsData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    console.log(coinsData);
    
    useEffect(() => {
        const getCoinPaprika = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://api.coinpaprika.com/v1/tickers');
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`)
                }
                const result = await response.json();
                setCoinsData(result);
                setIsLoading(false);
            }
            catch (err) {
                console.error(err.message);
            }
        }
        getCoinPaprika();
    }, [])
    

    return (
        <>
            <section className="market-wrapper">
                {isLoading && (
                    <div className="loader-wrap">
                        <Loader />
                    </div>
                )}
                {!isLoading && (
                    <div className="container">
                        <h1>Cryptocurrency Prices by Market Cap</h1>
                        <div className="market-insight">
                            <table>
                                <tr>
                                    <th>S.No</th>
                                    <th>Coin</th>
                                    <th>Price</th>
                                    <th>1h</th>
                                    <th>24h</th>
                                    <th>7d</th>
                                    <th>24h Volume</th>
                                    <th>Market Cap</th>
                                </tr>
                                {coinsData ? coinsData.map((coinTicker,index)=>{
                                    return(
                                        <TickerData
                                        index = {index}
                                        coinTicker = {coinTicker}
                                    />
                                    )
                                }) : ''}
                            </table>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}

export default Market