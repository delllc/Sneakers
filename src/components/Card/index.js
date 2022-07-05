import React from 'react';
import styles from './Card.module.scss';

function Card({id, title, imageUrl, price, addLike, addBasket, isFavorited = false}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isBasket, setIsBasket] = React.useState(isFavorited);

    const onClickPlus = () => {
        addLike({id, title, imageUrl, price});
        setIsAdded(!isAdded);
    }

    const onAddBasket = () => {
        addBasket({id, title, imageUrl, price});
        setIsBasket(!isBasket);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onAddBasket}>
                <img src={isBasket ? '/img/heart-liked.svg' : '/img/heart-empty.svg'} alt="heart"/>
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? "/img/btn-checked.svg" : "/img/btn-unchecked.svg"}
                    alt="plus"/>
            </div>
        </div>
    );
}

export default Card;