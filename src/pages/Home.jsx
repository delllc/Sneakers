import Card from "../components/Card";


function Home({searchValue, setSearchValue, onChangeSearchInput, items, onAddToBasket, onAddToCart}) {
    return (
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
                            addBasket={(obj) => onAddToBasket(obj)}
                            addLike={(obj) => onAddToCart(obj)}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Home;