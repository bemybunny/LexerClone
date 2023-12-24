import React,{useState} from 'react'
import './liquidity.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Liquidity(){
    const [btn,setBtn] = useState('mxlp');
    const [btn1,setBuy] = useState('buy');

    const handlebtn=(e)=>{
        if(e==='mxlp')setBtn('mxlp')
        else setBtn('sxlp')
    }
    const handlebtn1=(e)=>{
        if(e==='buy')setBuy('buy')
        else setBuy('sell')
    }
    
    return(
        <div className="liquidity">
            <div className="liquidity_heading">
                <span>Purchase{" "}<span className="underline">mXLP</span> to earn ETH fees from swaps and leverages trading.</span>
            </div>
            <div className="liquidity_btn">
                <div className={btn === 'mxlp' ? 'active' : 'notactive'} onClick={()=>handlebtn('mxlp')}>
                    <span>mXLP</span>
                    <div className="liquidity_btn1img">
                        <img src="white_btc-11c02e0c.svg"/>
                        <img src="white_eth-915be383.svg"/>
                        <img src="white_usdc-aa53735a.svg"/>
                        <img src="white_usdt-c4042a86.svg"/>
                    </div>
                </div>
                <div className={btn === 'sxlp' ? 'active' : 'notactive'} onClick={()=>handlebtn('sxlp')}>
                    <span>sXLP</span>
                </div>
            </div>
            <div className="liquidity_container">
                <div className="liquidity_4cnt">
                    <div className="liquidity_4cntflex">
                        <div className="total_staked stakedcnt "> 
                            <div className>APR</div>
                            <div className="centerstaked centerstakedcnt liquid">
                                <span className="green">27.60% </span>
                            </div>
                        </div>
                        <div className="total_staked stakedcnt"> 
                            <div className>Price</div>
                            <div className="centerstaked centerstakedcnt liquid">
                                <span>1.0212</span>
                            </div>
                        </div>
                    </div>
                    <div className="liquidity_4cntflex">
                        <div className="total_staked stakedcnt"> 
                            <div className>Wallet</div>
                            <div className="centerstaked centerstakedcnt liquid">
                                <span>0.00 mXLP($0.00) </span>
                            </div>
                        </div>
                        <div className="total_staked stakedcnt"> 
                            <div className>Staked</div>
                            <div className="centerstaked centerstakedcnt liquid">
                                <span>0.00 mXLP($0.00)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="liquidity_cnt">
                    <div className="liquidity_btn">
                        <button className={btn1 === 'buy' ? 'active' : 'notactive'} onClick={()=>handlebtn1('buy')}>Buy</button>
                        <button className={btn1 === 'sell' ? 'active' : 'notactive'} onClick={()=>handlebtn1('sell')}>Sell</button>
                    </div>
                    <div className="longliquidity">
                        <div className="long_container1">
                            <p>Pay:$0.00</p>
                            <p>Balance:0.0000</p>
                        </div>
                        <div className="long_container2">
                            <p>0.0</p>
                            <div className="ethcontainer">
                                <span className="maxcnt">MAX</span>
                                <button>ETH</button>
                                <KeyboardArrowDownIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="longliquidity">
                        <div className="long_container1">
                            <p>Receive:$0.00</p>
                            <p>Balance:0.0000</p>
                        </div>
                        <div className="long_container2">
                            <p>0.0</p>
                            <div className="ethcontainer">
                                <button>mXLP</button>
                            </div>
                        </div>
                    </div>
                    <div className="liquidity_span">
                        <span>Total Supply</span>
                        <span>51,608.7930 mXLP ($52,734.05)</span>
                    </div>
                    <div className="box1_btn">
                        <span>Connect Wallet</span>
                    </div>
                </div>
            </div>
            <div className="token_liquidity">
                <div className="token_flex">
                    <span className="heading_grey">SYMB0LS</span>
                    <span className="heading_grey">TOKEN</span>
                    <span className="heading_grey">PRICE</span>
                    <span className="heading_grey">POOL</span>
                    <span className="heading_grey">WEIGHT</span>
                    <span className="heading_grey">UTILIZATION</span>
                    <span className="heading_grey">AVAILABLE</span>
                    <span className="heading_grey">FEES</span>
                </div>
                <div className="token_flex">
                    <img src="white_btc-11c02e0c.svg" />
                    <span>BITCOIN<span className="small">{" "}BTC</span></span>
                    <span>$43,774.01</span>
                    <span>$13,518</span>
                    <span>24.76%/25.00%</span>
                    <span>5.40%</span>
                    <span>$237,310.08</span>
                    <span>-</span>
                </div>
                <div className="token_flex">
                    <img src="white_eth-915be383.svg" />
                    <span>
                        <span>Ethereum</span>{" "}
                        <span className="small">ETH</span>
                    </span>
                    <span>$2,286.88</span>
                    <span>$10,643</span>
                    <span>19.60%/25.00%</span>
                    <span>0.00%</span>
                    <span>$239,954.22</span>
                    <span>-</span>
                </div>
                <div className="token_flex">
                    <img src="white_usdc-aa53735a.svg" />
                    <span className="usdc">
                        <span>Bridged USDC</span>
                        <spna className="small">USDC.e</spna>
                    </span>
                    <span>$0.9999</span>
                    <span>$14,173</span>
                    <span>27.62%/25.00%</span>
                    <span>0.00%</span>
                    <span>$235,844.34</span>
                    <span>-</span>
                </div>
                <div className="token_flex">
                    <img src="white_usdt-c4042a86.svg" />
                    <span>Tether{" "}<span className="small">USDT</span></span>
                    <span>$1.0005</span>
                    <span>$14,351</span>
                    <span>27.99%/25.00%</span>
                    <span>0.00%</span>
                    <span>$235,656.35</span>
                    <span>-</span>
                </div>
            </div>
        </div>
    )
}

export default Liquidity;