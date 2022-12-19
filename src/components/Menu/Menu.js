import './Menu.scss';
import O from '../../assets/icons/o.svg';
import X from '../../assets/icons/x.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    const [symbolPlayer, setSymbolPlayer] = useState("O");
    const [symbolOpponent, setSymbolOpponent] = useState("X");

    function chooseSymbol(symbolPlayer, symbolOpponent) {
        setSymbolPlayer(symbolPlayer);
        setSymbolOpponent(symbolOpponent)
    }

    return (
        <div className="container central-container d-flex justify-content-center align-items-center flex-column">
            <div className="container__top">
                <div className="container__top__icon d-flex flex-row">
                    <div className="container__top__icon__x">
                        <img src={X} alt="symbol-x" />
                    </div>
                    <div className="container__top__icon__o">
                        <img src={O} alt="symbol-o" />
                    </div>
                </div>
            </div>
            <div className="container__body">
                <div className="container__body__shadow">
                    <div className="container__body__shadow__top-layer">
                        <div className="container__body__shadow__top-layer__title d-flex justify-content-center align-items-center">
                            <span>PICK PLAYER 1'S MARK</span>
                        </div>
                        <div className="container__body__shadow__top-layer__choice d-flex flex-row justify-content-se align-items-center">
                            <div onClick={() => chooseSymbol("X", "O")} className={symbolPlayer === "X" ? `container__body__shadow__top-layer__choice__x d-flex justify-content-center align-items-center active` : `container__body__shadow__top-layer__choice__x d-flex justify-content-center align-items-center`}>
                                <img src={X} alt="symbol-x" />
                            </div>
                            <div onClick={() => chooseSymbol("O", "X")} className={symbolPlayer === "O" ? `container__body__shadow__top-layer__choice__o d-flex justify-content-center align-items-center active` : `container__body__shadow__top-layer__choice__o d-flex justify-content-center align-items-center`}>
                                <img src={O} alt="symbol-o" />
                            </div>
                        </div>
                        <div className="container__body__shadow__top-layer__message d-flex justify-content-center align-items-center">
                            <span>REMEMBER : O GOES FIRST</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container__bottom">
                <div className="container__bottom__button d-flex justify-content-se flex-column">
                    <div className="container__bottom__button__cpu">
                        <div className='container__bottom__button__cpu__top-layer d-flex justify-content-center align-items-center'>
                            <Link to={'/game'} state={{ symbolPlayer, symbolOpponent, playWithCpu: true }}><span>NEW GAME (VS CPU)</span></Link>
                        </div>
                    </div>
                    <div className="container__bottom__button__player">
                        <div className='container__bottom__button__player__top-layer d-flex justify-content-center align-items-center'>
                            <Link to={'/game'} state={{ symbolPlayer, symbolOpponent, playWithCpu: false }}><span>NEW GAME (VS PLAYER)</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;