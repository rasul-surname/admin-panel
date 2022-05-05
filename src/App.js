import React from 'react';
import Form from "./components/Form/Form";
import ProductsList from "./components/Products/ProductsList";

function App(props) {
    return (
        <div>
            <div className='page'>
                <header className="header">
                    <h2 className="header__title">Добавление товара</h2>
                    <select  className="header__btn">
                        <option>По умолчанию</option>
                        <option>Пункт 1</option>
                        <option>Пункт 2</option>
                        <option>Пункт 3</option>
                    </select>
                </header>
                <main className='main'>
                    <section className="sidebar">
                        <Form state={props.state.productPage} store={props.store}/>
                    </section>
                    <section className="products">
                        <ProductsList state={props.state.productPage} store={props.store}/>
                    </section>
                </main>
            </div>
            <div className='warning'>Предусмотрено для экранов шире 740px</div>
        </div>
    );
}

export default App;
