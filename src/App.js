import React from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import favorites from "./pages/Favorites";


function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [basket, setBasket] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');


    React.useEffect(() => {
        axios.get('https://62bf18910bc9b12561676cdd.mockapi.io/items').then(res => {
            setItems(res.data);
        })
        axios.get('https://62bf18910bc9b12561676cdd.mockapi.io/cart').then(res => {
            setCartItems(res.data);
        })
        axios.get('https://62bf18910bc9b12561676cdd.mockapi.io/basket').then(res => {
            setBasket(res.data);
        })
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://62bf18910bc9b12561676cdd.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, obj]);
    }


    const onDeleteItem = (id) => {
        axios.delete(`https://62bf18910bc9b12561676cdd.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter(item => item.id !== id))

        // setCartItems(cartItems.filter(obj => obj.id != id));
    }

    const onAddToBasket = (obj) => {
        console.log(obj)
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }


    return (
        <div className="wrapper clear">
            {cartOpened &&
                <Drawer items={cartItems} deleteItem={onDeleteItem} onClose={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)}/>

            <Routes>
                <Route path="/" element={
                    <Home
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onChangeSearchInput={onChangeSearchInput}
                        items={items}
                        onAddToBasket={onAddToBasket}
                        onAddToCart={onAddToCart}
                    />} exact/>
                <Route path="/favorites" element={
                    <Favorites
                        items={basket}
                    />} exact/>
            </Routes>

        </div>
    );
}

export default App;
