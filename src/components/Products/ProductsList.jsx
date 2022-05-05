import React from 'react';
import classes from './ProductsList.module.css';
import deleteIcon from '../../assets/deleteIcon.png';


const ProductsList = (props) => {

    function deleteProduct(id) {
        props.store.dispatch({type: 'DELETE-PRODUCT', cardId: id})
    }
    return (
        <div className={classes.products__row}>
            {props.state.products.map(elem => {
                return (
                    <div className={classes.products__column} key={elem.id}>
                        <div className={classes.products__column__top}>
                            <img src={elem.value.img} />
                        </div>
                        <div className={classes.products__column__bottom}>
                            <p className={classes.products__column__title}>{elem.value.title}</p>
                            <p className={classes.products__column__desc}>{elem.value.desc}</p>
                            <p className={classes.products__column__price}>{elem.value.price} руб.</p>
                        </div>
                        <button  className={classes.products__delete} onClick={() => deleteProduct(elem.id)}>
                            <img src={deleteIcon} alt=""/>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductsList;