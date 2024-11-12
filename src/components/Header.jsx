import React, { useState } from "react";
import SearchField from "./SearchField";

function Header() {
    const [mobMenu, setMobMenu] = useState(false);

    
    function handleMobMenu(){
        setMobMenu(!mobMenu);
    }

    return (
        <>
            <section className="header">
                <div className="container">
                    <div className="header-block">
                        <div className="logo">
                            <span className="logo-block">TokenShastra</span>
                        </div>
                        <div className="navbar-wrap">
                            <nav className={`navbar ${mobMenu ? 'active' : ''}`}>
                                <ul>
                                    <li><a href="#">Coins</a></li>
                                    <li><a href="#">Exchanges</a></li>
                                </ul>
                            </nav>
                            <div className="mob-search">
                                <SearchField/>
                                <button type="button" className= {`mob-menu ${mobMenu ? 'active' : ''}`} onClick={handleMobMenu}>
                                    <span className="menu-line">&nbsp;</span>
                                    <span className="menu-line">&nbsp;</span>
                                    <span className="menu-line">&nbsp;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header