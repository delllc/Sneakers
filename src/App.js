function App() {
    return (
        <div className="wrapper clear">
            <div className="overlay">
                <div className="drawer">
                    <h2 className="mb-30">Корзина</h2>

                    <div className="cartItem d-flex align-center mb-20">

                        <div style={{backgroundImage: 'url(/img/sneakers/1.png'}} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/krest.svg" alt="Remove"/>
                    </div>
                    <div className="cartItem d-flex align-center">

                        <div style={{backgroundImage: 'url(/img/sneakers/1.png'}} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/krest.svg" alt="Remove"/>
                    </div>
                </div>
            </div>


            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center">
                    <img width={40} height={40} src="/img/logo.png" alt="logo"/>
                    <div>
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="d-flex">
                    <li className="mr-30">
                        <img width={18} height={18} src="/img/cart.svg" alt="cart"/>
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img width={18} height={18} src="/img/profile.svg" alt="profile"/>
                    </li>
                </ul>
            </header>
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1 className="">Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="search"/>
                        <input type="text" placeholder="Поиск..."/>
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    <div className="card">
                        <div className="favorite">
                            <img src="/img/heart-empty.svg" alt="heart"/>
                        </div>
                        <img width={133} height={112} src="/img/sneakers/1.png" alt="Sneakers"/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers"/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers"/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers"/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                            </button>
                        </div>
                    </div>
                    {/*<div className="card">*/}
                    {/*    <img width={133} height={112} src="/img/sneakers/5.jpg" alt="Sneakers"/>*/}
                    {/*    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>*/}
                    {/*    <div className="d-flex justify-between align-center">*/}
                    {/*        <div className="d-flex flex-column">*/}
                    {/*            <span>Цена:</span>*/}
                    {/*            <b>12 999 руб.</b>*/}
                    {/*        </div>*/}
                    {/*        <button className="button">*/}
                    {/*            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="card">*/}
                    {/*    <img width={133} height={112} src="/img/sneakers/6.jpg" alt="Sneakers"/>*/}
                    {/*    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>*/}
                    {/*    <div className="d-flex justify-between align-center">*/}
                    {/*        <div className="d-flex flex-column">*/}
                    {/*            <span>Цена:</span>*/}
                    {/*            <b>12 999 руб.</b>*/}
                    {/*        </div>*/}
                    {/*        <button className="button">*/}
                    {/*            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="card">*/}
                    {/*    <img width={133} height={112} src="/img/sneakers/7.jpg" alt="Sneakers"/>*/}
                    {/*    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>*/}
                    {/*    <div className="d-flex justify-between align-center">*/}
                    {/*        <div className="d-flex flex-column">*/}
                    {/*            <span>Цена:</span>*/}
                    {/*            <b>12 999 руб.</b>*/}
                    {/*        </div>*/}
                    {/*        <button className="button">*/}
                    {/*            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="card">*/}
                    {/*    <img width={133} height={112} src="/img/sneakers/8.jpg" alt="Sneakers"/>*/}
                    {/*    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>*/}
                    {/*    <div className="d-flex justify-between align-center">*/}
                    {/*        <div className="d-flex flex-column">*/}
                    {/*            <span>Цена:</span>*/}
                    {/*            <b>12 999 руб.</b>*/}
                    {/*        </div>*/}
                    {/*        <button className="button">*/}
                    {/*            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="card">*/}
                    {/*    <img width={133} height={112} src="/img/sneakers/9.jpg" alt="Sneakers"/>*/}
                    {/*    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>*/}
                    {/*    <div className="d-flex justify-between align-center">*/}
                    {/*        <div className="d-flex flex-column">*/}
                    {/*            <span>Цена:</span>*/}
                    {/*            <b>12 999 руб.</b>*/}
                    {/*        </div>*/}
                    {/*        <button className="button">*/}
                    {/*            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="card">*/}
                    {/*    <img width={133} height={112} src="/img/sneakers/10.png" alt="Sneakers"/>*/}
                    {/*    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>*/}
                    {/*    <div className="d-flex justify-between align-center">*/}
                    {/*        <div className="d-flex flex-column">*/}
                    {/*            <span>Цена:</span>*/}
                    {/*            <b>12 999 руб.</b>*/}
                    {/*        </div>*/}
                    {/*        <button className="button">*/}
                    {/*            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="card">*/}
                    {/*    <img width={133} height={112} src="/img/sneakers/11.jpg" alt="Sneakers"/>*/}
                    {/*    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>*/}
                    {/*    <div className="d-flex justify-between align-center">*/}
                    {/*        <div className="d-flex flex-column">*/}
                    {/*            <span>Цена:</span>*/}
                    {/*            <b>12 999 руб.</b>*/}
                    {/*        </div>*/}
                    {/*        <button className="button">*/}
                    {/*            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="card">*/}
                    {/*    <img width={133} height={112} src="/img/sneakers/12.jpg" alt="Sneakers"/>*/}
                    {/*    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>*/}
                    {/*    <div className="d-flex justify-between align-center">*/}
                    {/*        <div className="d-flex flex-column">*/}
                    {/*            <span>Цена:</span>*/}
                    {/*            <b>12 999 руб.</b>*/}
                    {/*        </div>*/}
                    {/*        <button className="button">*/}
                    {/*            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default App;
