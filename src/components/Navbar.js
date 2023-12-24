import React,{useState} from 'react'
import './navbar.css'
import {Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar(){

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="navbar">
            <div className="navbar-cnt">
               <div className="menu-icon" onClick={toggleSidebar}><MenuIcon/></div>
               <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <div className="menu-icon2 " onClick={toggleSidebar}>
                        <img src="logo_LEXER-80aa9bef.svg"/>
                        <MenuIcon/>
                    </div>
                    <ul>
                    <Link to="/" className="custom-link"><li>Trade</li></Link><hr/>
                    <Link to="/dashboard" className="custom-link"><li>Dashboard</li></Link><hr/>
                    <Link to="/lexstake" className="custom-link"><li>LexStake</li></Link><hr/>
                    <Link to="/liquidity" className="custom-link"><li>Liquidity</li></Link><hr/>
                    <Link to="/leaderboard" className="custom-link"><li>Leaderboard</li></Link><hr/>
                    </ul>
                </div>
               <Link to="/"><img src="logo_LEXER-80aa9bef.svg"/></Link> 
            </div>
            <div className="container">
                <Link to="/dashboard" className="custom-link">Dashboard</Link>
                <span>Migrate V1 Assets</span>
                <Link to="/lexstake" className="custom-link"><span>LexStake</span></Link>
                <Link to="/liquidity" className="custom-link"><span>Liquidity</span></Link>
                <Link to="/" className="custom-link"><span>Trade</span></Link>
                <Link to="/leaderboard" className="custom-link"><span>Leaderboard</span></Link>
                <span>V2 Launch</span>
            </div>
            <div className="container-wallet">
                <img src="ic_wallet_24-0b87a489.svg"/>
                <span>Connect Wallet</span>
            </div>
        </div>
    )
}

export default Navbar;