import React from 'react';
import './Form.css';

const Form = (props) => {


    function onChangeForm(event) {
        switch (event.className) {
            case 'form__input title':
                return props.store.dispatch({type: 'ADD-TITLE', title: event.value});
            case 'form__input desc':
                return props.store.dispatch({type: 'ADD-DESC', desc: event.value});
            case 'form__input img':
                return props.store.dispatch({type: 'ADD-IMG', img: event.value});
            case 'form__input price':
                return props.store.dispatch({type: 'ADD-PRICE', price: event.value});
        }
    }

    function addProduct() {
        props.store.dispatch({type: 'ADD-PRODUCT'});
    }

    return (
        <form className='form'>
            <label><span>Наименование товара</span>
                <input className='form__input title' onChange={(e) => onChangeForm(e.target)} type="text"
                       value={props.state.title} placeholder='Введите наименование товара'/>
            </label>
            <label><span>Описание товара</span>
                <textarea className='form__input desc' onChange={(e) => onChangeForm(e.target)} type="text"
                       value={props.state.desc} placeholder='Введите описание товара'/>
            </label>
            <label><span>Ссылка на изображение товара</span>
                <input className='form__input img' onChange={(e) => onChangeForm(e.target)} type="text"
                       value={props.state.img} placeholder='Введите ссылку'/>
            </label>
            <label><span>Цена товара</span>
                <input className='form__input price' onChange={(e) => onChangeForm(e.target)} type="number"
                       value={props.state.price} placeholder='Введите цену'/>
            </label>
            <input className='form__input btn' type="button" name="data" onClick={addProduct} value="Добавить товар"/>
        </form>
    )
}

export default Form;