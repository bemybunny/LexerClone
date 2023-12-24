import React,{useState} from 'react'

function Container4(){

    const [btn,setBtn] = useState('positions');
    const handlebtn=(e)=>{
        if(e==='positions')setBtn('positions')
        else if(e==='order')setBtn('order')
        else setBtn('trades')
    }
    return (
        <div className="Container-4">
            <div className="container4_btn">
                <button className={btn === 'positions' ? 'active' : 'notactive'} onClick={()=>handlebtn('positions')}>Positions</button>
                <button className={btn === 'order' ? 'active' : 'notactive'} onClick={()=>handlebtn('order')}>Order</button>
                <button className={btn === 'trades' ? 'active' : 'notactive'} onClick={()=>handlebtn('trades')}>Trades</button>
            </div>
            <div className="cnt4_span">
                <span>Position</span>
                <span>Net Value</span>
                <span>Size</span>
                <span>Collateral</span>
                <span>Entry Price</span>
                <span>Mark Price</span>
                <span>Liq. Price</span>
            </div>
            <div>
                <hr/>
                <span>No open positions</span>
            </div>
        </div>
    )
}

export default Container4;