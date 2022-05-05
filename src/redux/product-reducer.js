import defaultImg from '../assets/defaultImg.jpg'
import defaultYellow from '../assets/defaultYellow.jpg'

let initialState = {
    id: 2,
    title: '',
    desc: '',
    img: '',
    price: '',
    products: [
        {
            id: 1,
            value: {
                title: 'Наименование товара',
                desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                img: defaultImg,
                price: '10 000',
            }
        },
        {
            id: 2,
            value: {
                title: 'Наименование товара',
                desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                img: defaultImg,
                price: '10 000',
            }
        },
    ],
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-TITLE':
            return {
                ...state,
                title: action.title
            }
        case 'ADD-DESC':
            return {
                ...state,
                desc: action.desc
            }
        case 'ADD-IMG':
            return {
                ...state,
                img: action.img
            }
        case 'ADD-PRICE':
            return {
                ...state,
                price: action.price
            }
        case 'ADD-PRODUCT':
            if(!state.img) {
                state.img = defaultYellow;
            }
            const card = {
                id: state.id + 1,
                value: {
                    title: state.title,
                    desc: state.desc,
                    img: state.img,
                    price: state.price,
                }
            }
            return {
                ...state,
                id: card.id,
                title: '',
                desc: '',
                img: '',
                price: '',
                products: [...state.products, card],
            }
        case 'DELETE-PRODUCT':
            return {
                ...state,
                products: state.products.filter(elem => {
                    if(elem.id !== action.cardId) {
                        return true;
                    } else {
                        return false;
                    }
                })
            }
        default:
            return state;
    }
}

export default productReducer;