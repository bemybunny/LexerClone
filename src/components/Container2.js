import React from 'react';
import './lexer.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Container2(){
    return(
        <div className="container-2 classblue">
            <div className="ethcnt2">
                <span>ETH/USD</span>
                <KeyboardArrowDownIcon/>
            </div>
            <div className="usdcnt">
                <span>$2,240.123</span>
                <span className="heading2 headinggrey">$2,238.11</span>
            </div>
            <div className="usdcnt">
                <span className="heading1">24h Change</span>
                <span className="heading2 greenheading">+2.16%</span>
            </div>
            <div className="usdcnt">
                <span className="heading1">24h High</span>
                <span className="heading2">2,273.06</span>
            </div>
            <div className="usdcnt">
                <span className="heading1">24h Low</span>
                <span className="heading2">2,190.09</span>
            </div>
        </div>
    )
}

export default Container2;