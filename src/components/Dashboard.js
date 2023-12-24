import React from 'react';
import './dashboard.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Dashboard(){
    return (
        <div className="dashboard">
            <div className="divcnt1">
                <div className="box">
                    <span>Total Trading Volume</span>
                    <div className="boxcenter">$234,633.74</div>
                </div>
                <div className="box">
                    <span>Total Fees</span>
                    <div className="boxcenter">$424.68</div>
                </div>
                <div className="box">
                    <span>Total Value Locked</span>
                    <div className="boxcenter">$72,996.49</div>
                </div>
            </div>
            <div className="divcnt2">
                <div className="box2">
                    <div className="cntbox2">
                        <div className="imgcnt2">
                            <img src="corecrypto-16dfbe5b.svg"/>
                            <span>mXLP</span>
                        </div>
                        <div className="spancnt">
                            <div className="cnt2span">
                                <span>Price</span>
                                <span>$1.021</span>
                            </div>
                            <div className="cnt2span">
                                <span>TVL</span>
                                <span>$52,749.00</span>
                            </div>
                            <div className="cnt2span">
                                <span>APR</span>
                                <span>27.69%</span>
                            </div>
                            <div className="cnt2span">
                                <span>Stable Percentage</span>
                                <span>53.83%</span>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                     leena
                    </div> */}
                </div>
                <div className="box2">
                    <div className="cntbox2">
                        <div className="imgcnt2">
                            <img src="ic_usdc_24-3b8acc8e.svg"/>
                            <span>sXLP</span>
                        </div>
                        <div className="spancnt">
                        <div className="cnt2span">
                                <span>Price</span>
                                <span>$1.00</span>
                            </div>
                            <div className="cnt2span">
                                <span>TVL</span>
                                <span>$20,237.15</span>
                            </div>
                            <div className="cnt2span">
                                <span>APR</span>
                                <span>10.16%</span>
                            </div>
                            <div className="cnt2span">
                                <span>Stable Percentage</span>
                                <span>100.00%</span>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        gutpa
                    </div> */}
                </div>
            </div>
            <div className="divcnt3 classblue">
                <div className="box3">
                    <img src="lex-40b73a15.svg"/>
                    <span>LEX</span>
                </div>
                <div className="box3">
                    <span>0.0041</span>
                    <KeyboardArrowDownIcon/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;