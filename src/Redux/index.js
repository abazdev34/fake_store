import { actionTypes } from "./types";
import ChikinTaco from "./img/b4b1c524-603d-4a1f-9d37-3b2dbd740ed6.jpeg";
import Xryctaco from "./img/efc82022-fd8b-4280-8901-188e52c0d2af.jpeg";
import KartTaco from "./img/6f7e2070-2017-48dc-86fa-f81f05c38d21.jpeg"
import DyvyxTaco from "./img/df2f5a6b-a5d6-4cc6-8bae-1fdac03ac144.jpeg"
import DuvyxTaco from "./img/dc4ac934-5065-4067-ad5e-1a4d1380f1ad.jpeg";
import GricTaco from "./img/b4b1c524-603d-4a1f-9d37-3b2dbd740ed6.jpeg";
import GortovelTaco from "./img/c9b77b84-5ab4-4994-8aa3-87eb9cf92d4f.jpeg";
import Slaed from "./img/b4b1c524-603d-4a1f-9d37-3b2dbd740ed6.jpeg"


const initialState = {
  products: [
    {
      id: 1,
      title: "Чикен тако",
      description:
        "Пшеничная тортилья, курица, специи (лук, чеснок, кумин, кориандр, куркума, сахар, яблоко, тамаринд), соус «Тако», зелёный салат, сыр «Чеддер».",
      price: 448,
      countInStock: 2,
      rating: 4,
      image: ChikinTaco,
    },

    {
      id: 2,
      title: "Хрустящее тако ",
      description:
        "Пшеничная тортилья, мраморная говядина, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «Тако», зелёный салат, сыр «Чеддер».",
      price: 428,
      countInStock: 2,
      rating: 3,
      image: Xryctaco,
    },
    {
      id: 3,
      title: "Кинг тако хард ",
      description:
        "Пшеничная сырная тортилья, мраморная говядина, помидоры, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «Тако», зелёный салат, сыр Чеддер",
      price: 449,
      countInStock: 2,
      rating: 5,
      image: KartTaco,
    },
    {
      id: 4,
      title: "Двухъярусное кинг тако",
      description:
        "Пшеничная тортилья, пшеничная сырная тортилья, помидоры, мраморная говядина, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «Тако», зелёный салат, сыр «Чеддер», фасолевая паста.",
      price: 485,
      countInStock: 2,
      rating: 2,
      image: DyvyxTaco,
    },
    {
      id: 5,
      title: "Двухъярусное тако",
      description:
        "Пшеничная тортилья, пшеничная сырная тортилья, мраморная говядина, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «Тако», зелёный салат, сыр «Чеддер», фасолевая паста.",
      price: 400,
      countInStock: 2,
      rating: 1,
      image: DuvyxTaco,
    },
    {
      id: 6,
      title: "Грик тако",
      description:
        "Пшеничная тортилья, курица, помидоры, специи (лук, чеснок, кумин, кориандр, куркума, сахар, яблоко, тамаринд), соус «Тако», зелёный салат, сыр «Фета», сыр «Пармезан».",
      price: 450,
      countInStock: 2,
      rating: 3,
      image: GricTaco,
    },
    {
      id: 7,
      title: "Картофельное тако",
      description:
        "Пшеничная тортилья, картофельные дольки, специи , перец чили, лук, чеснок, имбирь, кумин, соус «Тако», зелёный салат, сыр Чеддер».",
      price: "387",
      countInStock: 2,
      rating: 3,
      image: GortovelTaco,
    },
  
  ],
  slyder:[
     {
      id: 1,
      title: "Биф слайдер",
      description:
        "",
      price: 448,
      countInStock: 2,
      rating: 4,
      image: Slaed,
    },
  ],
  basket: [],
  liked: [],
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_PRODUCTS:
      {
        return state;
      }
      break;
    case actionTypes.ADD_PRODUCTS_TO_BASKET:
      {
        const searchProduct = state.basket.find((el) => el.id === payload.id);
        if (searchProduct) {
          return {
            ...state,
            basket: state.basket.map((el) =>
              el.id === payload.id ? { ...el, guantity: el.guantity + 1 } : el
            ),
          };
        } else
          return {
            ...state,
            basket: [...state.basket, { ...payload, guantity: 1 }],
          };
      }
      break;
    case actionTypes.DECREASE_QUATITY_FROM_BASKET:
      {
        return {
          ...state,
          basket: state.basket.map((el) => {
            if (el.id === payload && el.guantity > 1) {
              return { ...el, guantity: el.guantity - 1 };
            }
            return el;
          }),
        };
      }

      break;
    case actionTypes.ROMEVE_PRODUCTS_FROM_BASKET:
      {
        return {
          ...state,
          basket: state.basket.filter((el) => el.id !== payload),
        };
      }
      break;
    case actionTypes.ADD_PRODUCTS_TO_LIKED: {
      const isLiked = state.liked.find((el) => el.id === payload.id);
      if (isLiked) {
        return {
          ...state,
          liked: state.liked.filter((el) => el.id !== payload.id),
        };
      } else {
        return { ...state, liked: [...state.liked, payload] };
      }
    }

    default:
      return state;
  }
};
