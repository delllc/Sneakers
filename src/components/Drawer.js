function Drawer(props) {
    return (
        <div className="overlay ">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between">Корзина <img className="removeBtn cu-p"
                                                                          src="/img/krest.svg"
                                                                          alt="Remove"/></h2>
                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={props.imageUrl} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <p className="mb-5">{props.title}</p>
                            <b>{props.price} руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/krest.svg" alt="Remove"/>
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;