import Card from "../components/Card";

function Favorites({items, onAddToBasket}) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="">Мои закладки</h1>
            </div>


            <div className="d-flex flex-wrap">
                {
                    items.map((item, id) => (
                        <Card
                            key={id}
                            onAddToBasket={onAddToBasket}
                            isFavorited={true}
                            {...item}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Favorites;