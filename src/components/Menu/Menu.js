import './Menu.scss';
import O from '../../assets/icons/o.svg';
import X from '../../assets/icons/x.svg';

function Menu() {
    return (
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <div className="container__top">
                <div className="container__top__icon">
                    <div className="container__top__icon__x">
                        <img src="" alt="symbol-x" />
                    </div>
                    <div className="container__top__icon__o">
                        <img src="" alt="symbol-o" />
                    </div>
                </div>
            </div>
            <div className="container__body">
                <div className="container__body__shadow">
                    <div className="container__body__shadow__top-layer">
                        <div className="container__body__shadow__top-layer__title">
                            <span>PICK PLAYER 1'S MARK</span>
                        </div>
                        <div className="container__body__shadow__top-layer__choice">
                            <div className="container__body__shadow__top-layer__choice__x">
                                <img src="" alt="" />
                            </div>
                            <div className="container__body__shadow__top-layer__choice__o">
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className="container__body__shadow__top-layer__message">
                            <span>REMEMBER : X GOES FIRST</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container__bottom">
                <div className="container__bottom__button">
                    <div className="container__bottom__button__cpu">
                        <span>NEW GAME (VS CPU)</span>
                    </div>
                    <div className="container__bottom__button__player">
                        <span>NEW GAME (VS PLAYER)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;