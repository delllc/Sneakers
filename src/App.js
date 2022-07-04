import React from 'react';
import axios from 'axios';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');


    React.useEffect(() => {
        axios.get('https://62bf18910bc9b12561676cdd.mockapi.io/items').then(res => {
            setItems(res.data);
        })
        axios.get('https://62bf18910bc9b12561676cdd.mockapi.io/cart').then(res => {
            setCartItems(res.data);
        })
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://62bf18910bc9b12561676cdd.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, obj]);
    }

    const onDeleteItem = (id) => {
        setCartItems(cartItems.filter(obj => obj.id != id));
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="wrapper clear">
            {cartOpened &&
                <Drawer items={cartItems} deleteItem={onDeleteItem} onClose={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)}/>
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1 className="">{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="search"/>
                        {searchValue ?
                            <img onClick={() => setSearchValue("")}
                                 className="removeBtn clear cu-p"
                                 src="/img/krest.svg"
                                 alt="Close"/> : null}
                        <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..."/>
                    </div>
                </div>


                <div className="d-flex flex-wrap">
                    {
                        items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, id) => (
                            <Card
                                key={id}
                                title={item.title}
                                price={item.price}
                                id={item.id}
                                imageUrl={item.imageUrl}
                                addBasket={() => console.log("Добавлено в корзину!")}
                                addLike={(obj) => onAddToCart(obj)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
