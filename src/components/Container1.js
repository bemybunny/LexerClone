import React,{useState} from 'react';
import './lexer.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Container1(){

    const [btn,setBtn] = useState('long');
    const [btn2,setBtn2] = useState('market');
    const handlebtn=(e)=>{
        if(e==='long')setBtn('long')
        else if(e==='short')setBtn('short')
        else setBtn('swap')
    }
    
    const handlebtn2=(e)=>{
        if(e==='market')setBtn2('market')
        else setBtn2('limit')
    }
    return (
                <div className="container-1">
                    <div className="container_btn">
                        <button className={btn === 'long' ? 'active' : 'notactive'} onClick={()=>handlebtn('long')}>Long</button>
                        <button className={btn === 'short' ? 'active' : 'notactive'} onClick={()=>handlebtn('short')}>Short</button>
                        <button className={btn === 'swap' ? 'active' : 'notactive'} onClick={()=>handlebtn('swap')}>Swap</button>
                    </div>
                    <div className="container_btn2">
                        <button className={btn2=== 'market' ? 'active' : 'notactive'} onClick={()=>handlebtn2('market')}>Market</button>
                        <button className={btn2 === 'limit' ? 'active' : 'notactive'} onClick={()=>handlebtn2('limit')}>Limit</button>
                    </div>
                    <div className="pay">
                        <p>Pay</p>
                        <div className="pay_container">
                            <p>0.0</p>
                            <div className="ethcontainer">
                                <button>ETH</button>
                                <KeyboardArrowDownIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="long">
                        <div className="long_container1">
                            <p>Long</p>
                            <p>Leverage: 1.10x</p>
                        </div>
                        <div className="long_container2">
                            <p>0.0</p>
                            <div className="ethcontainer">
                                <button>ETH</button>
                                <KeyboardArrowDownIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="leverage">
                        <div >
                            <span>Collateral In</span>
                            <span>USD</span>
                        </div>
                        <div>
                            <span>Leverage</span>
                            <span>-</span>
                        </div>
                        <div>
                            <span>Entry Price</span>
                            <span>$2,228.16</span>
                        </div>
                        <div>
                            <span>Liq. Price</span>
                            <span>-</span>
                        </div>
                        <div>
                            <span>Open Fees</span>
                            <span>-</span>
                        </div>
                        <div>
                            <span>Dynamic Fees</span>
                            <span>0.0008%/1h</span>
                        </div>
                        <div>
                            <span>Available Liquidity</span>
                            <span>$11,267.70</span>
                        </div>
                    </div>
                    <div className="btndiv">
                        <button className="smart_router">Smart Router</button>
                        <button className="connect_wallet">Connect Wallet</button>
                    </div>
                </div>
    )
}

export default Container1;