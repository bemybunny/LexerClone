import React from 'react';
import './leaderboard.css'

function Leaderboard(){
    return(
        <div className="leaderboard">
            <img src="leaderboard_banner-f162ffcb.png"/>
            <div className="token_liquidity leadercnt">
                <h1 className="rewards">Rewards</h1>
                <div className="token_flex ">
                    <span className="heading_grey">RANK</span>
                    <span className="heading_grey">TRADER</span>
                    <span className="heading_grey">TRADING VOLUME</span>
                    <span className="heading_grey">WIN/LOSE</span>
                    <span className="heading_grey">PNL</span>
                    <span className="heading_grey rewards">REWARDS</span>
                </div>
                <div className="hradjustment"><hr/></div>
                <div className="token_flex ">
                    <img src="leaderboard_gold-e0ca022e.svg" />
                    <span>0x0a...3ce</span>
                    <span>$14,518.78</span>
                    <span>2/22</span>
                    <span className="pnl">$237,310.08</span>
                    <span className="green">$30,842,655</span>
                </div>
                <div className="token_flex">
                    <img src="leaderboard_silver-03b4ddc2.svg" />
                    <span>0xcf...337</span>
                    <span>$13,643.</span>
                    <span>19/25</span>
                    <span className="pnl">$239,954.22</span>
                    <span className="green">$28,842,955</span>
                </div>
                <div className="token_flex">
                    <img src="leaderboard_bronze-4442432a.svg" />
                    <span>0x7b...3dc</span>
                    <span>$12,173.45</span>
                    <span>1/11</span>
                    <span className="pnl">$235,844.34</span>
                    <span className="green">$27,742,855</span>
                </div>
                <div className="token_flex">
                    <span className="four">4.</span>
                    <span>0xc6...11f</span>
                    <span>$11,560.34</span>
                    <span>27/56</span>
                    <span className="pnl">$235,656.35</span>
                    <span className="green">$25,942,675</span>
                </div>
                <div className="token_flex">
                    <span className="four">5.</span>
                    <span>0xc6...11f</span>
                    <span>$11,560.34</span>
                    <span>4/23</span>
                    <span className="pnl">$235,656.35</span>
                    <span className="green">$25,942,675</span>
                </div>
                <div className="token_flex">
                    <span className="four">6.</span>
                    <span>0xc6...11f</span>
                    <span>$11,560.34</span>
                    <span>27/56</span>
                    <span className="pnl">$235,656.35</span>
                    <span className="green">$25,942,675</span>
                </div>
                <div className="token_flex">
                    <span className="four">7.</span>
                    <span>0xc6...11f</span>
                    <span>$11,560.34</span>
                    <span>3/12</span>
                    <span className="pnl">$235,656.35</span>
                    <span className="green">$25,942,675</span>
                </div>
                <div className="token_flex">
                    <span className="four">8.</span>
                    <span>0xc6...11f</span>
                    <span>$11,560.34</span>
                    <span>2/5</span>
                    <span className="pnl">$235,656.35</span>
                    <span className="green">$25,942,675</span>
                </div>
                <div className="token_flex">
                    <span className="four">9.</span>
                    <span>0xc6...11f</span>
                    <span>$11,560.34</span>
                    <span>34/23</span>
                    <span className="pnl">$235,656.35</span>
                    <span className="green">$25,942,675</span>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard;