import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
    {
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: "12999",
        imageUrl: "/img/sneakers/1.png"
    },
    {
        title: "Мужские Кроссовки Nike Air Max 270 ",
        price: "12999",
        imageUrl: "/img/sneakers/2.jpg"
    },
    {
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: "8499",
        imageUrl: "/img/sneakers/3.jpg"
    },
    {
        title: "Кроссовки Puma X Aka Boku Future Rider",
        price: "8999",
        imageUrl: "/img/sneakers/4.jpg"
    },
    {
        title: "Мужские Кроссовки Under Armour Curry 8",
        price: "15199 ",
        imageUrl: "/img/sneakers/5.jpg"
    },
    {
        title: "Мужские Кроссовки Nike Kyrie 7",
        price: "11299",
        imageUrl: "/img/sneakers/6.jpg"
    },
    {
        title: "Мужские Кроссовки Jordan Air Jordan 11",
        price: "10799",
        imageUrl: "/img/sneakers/7.jpg"
    },
    {
        title: "Мужские Кроссовки Nike LeBron XVIII",
        price: "16499",
        imageUrl: "/img/sneakers/8.jpg"
    },
    {
        title: "Мужские Кроссовки Nike Lebron XVIII Low",
        price: "13999",
        imageUrl: "/img/sneakers/9.jpg"
    },
    {
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: "8699",
        imageUrl: "/img/sneakers/10.png"
    },
    {
        title: "Кроссовки Puma X Aka Boku Future Rider",
        price: "8999",
        imageUrl: "/img/sneakers/11.jpg"
    },
    {
        title: "Мужские Кроссовки Nike Kyrie Flytrap IV ",
        price: "12299",
        imageUrl: "/img/sneakers/12.jpg"
    }


];

function App() {
    return (
        <div className="wrapper clear">

            <Header/>
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1 className="">Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="search"/>
                        <input type="text" placeholder="Поиск..."/>
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {arr.map((obj) => (
                        <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
