import React from 'react'
import './lexstake.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Lexstake(){
    return(
        <div className="lexstake">
            <div className="lexstake_heading">
                <span>Stake{" "} <span className="underline">LEX</span>{" "} and {" "} <span className="underline">esLEX</span>{" "} to earn rewards from variant LP pools.</span>
            </div>
            <div className="lexstake_rewards classblue"> 
                <div className="lexstake_rewards_container">
                    <div className="lexstake_rewards1">Claimable Rewards: <span className="green">$0.00</span>
                    </div>
                </div>
                <div className="arrow">{<KeyboardArrowDownIcon/>}</div>
            </div>
            <div className="lexstakeboxcnt">
                <div className="box1">
                    <div className="box1_logo">
                        <img src="lex-40b73a15.svg"/>
                        <div className="box1logo_heading">
                            <span>LEX</span>
                            <span>$0.0040</span>
                        </div>
                    </div>
                    <div className="box1_gap">
                        <div className="box1_span">
                            <span>Wallet</span>
                            <span>0.00 LEX ($0.00)</span>
                        </div>
                        <div className="box1_span">
                            <span>Staked</span>
                            <span>0.00 LEX ($0.00)</span>
                        </div>
                        <div><hr/></div>
                        <div className="box1_span">
                            <span>APR</span>
                            <span>71.94%</span>
                        </div>
                        <div className="box1_span">
                            <span>Rewards</span>
                            <span>$0.00</span>
                        </div>
                        <div className="box1_span">
                            <span>Multiplier Points APR</span>
                            <span>100.00%</span>
                        </div>
                        <div className="box1_span">
                            <span>Boost Percentage</span>
                            <span>$0.00</span>
                        </div>
                    </div>
                    <div className="total_staked classblue"> 
                      <div className="flex-start">Total Staked</div>
                      <div className="centerstaked">
                        <span>10,995,430.26 LEX ($44,916.33)</span>
                    </div>
                    </div>
                    <div className="box1_btn">
                        <span>Buy LEX</span>
                    </div>
                </div>
                <div className="box1">
                    <div className="box1_logo">
                        <img src="lex-40b73a15.svg"/>
                        <div className="box1logo_heading">
                            <span>esLEX</span>
                            <span>$0.0040</span>
                        </div>
                    </div>
                    <div className="box1_gap">
                        <div className="box1_span">
                            <span>Wallet</span>
                            <span>0.00 LEX ($0.00)</span>
                        </div>
                        <div className="box1_span">
                            <span>Staked</span>
                            <span>0.00 LEX ($0.00)</span>
                        </div>
                        <div><hr/></div>
                        <div className="box1_span">
                            <span>APR</span>
                            <span>71.97%</span>
                        </div>
                        <div className="box1_span">
                            <span>Multiplier Points APR</span>
                            <span>100.00%</span>
                        </div>
                    </div>
                    <div className="totalstaked_cnt">
                        <div className="total_staked stakedcnt classblue"> 
                        <div className>Total Staked</div>
                        <div className="centerstaked centerstakedcnt">
                            <span>2,515,055.07 esLEX </span>
                            <span>($10,273.99)</span>
                        </div>
                        </div>
                        <div className="total_staked stakedcnt classblue"> 
                        <div className>Total Supply</div>
                        <div className="centerstaked">
                            <span>7,153,991 esLEX ($29,224)</span>
                        </div>
                        </div>
                    </div>
                    <div className="box1_btn">
                        <span>Connect Wallet</span>
                    </div>
                </div>
            </div>
            <div className="lexstake_heading">
                <span>Convert esLEX tokens to LEX tokens.</span>
                <span>Please read the{" "}<span className="underline">vesting details</span>{" "} before using the vaults.</span>
            </div>
            <div className="box1">
                <div><span>LEX Vault</span></div>
                <div className="box1_gap">
                    <div className="box1_span">
                        <span>Staked Tokens</span>
                        <span>0.00</span>
                    </div>
                    <div className="box1_span">
                        <span>Reserved for Vesting</span>
                        <span>0.00/0.00</span>
                    </div>
                    <div className="box1_span">
                        <span>Vesting Status</span>
                        <span>0.0000/0.0000</span>
                    </div>
                    <div className="box1_span">
                        <span>Claimable</span>
                        <span>0.0000 LEX</span>
                    </div>
                </div>
                <div className="box1_btn">
                        <span>Connect Wallet</span>
                </div>
            </div>
        </div>
    )
}

export default Lexstake;