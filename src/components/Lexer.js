import React from 'react';
import './lexer.css'
import Container2 from './Container2'
import Container1 from './Container1'
import Container3 from './Container3'
import Container4 from './Container4'
function Lexer(){

    return (
        <div className="lexer1">
            <div>
                <div className="lexer">
                    <div>
                        <Container1/>
                    </div>
                    <div className="cntflex"> 
                            <Container2/>
                            <Container3/>
                    </div>
                </div>
            </div>
            <div>
                <Container4/>
            </div>
        </div>
    )
}

export default Lexer;