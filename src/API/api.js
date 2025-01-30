import SHOES from '../img/shoes.png';

const sneakersList = [
  {
    id: 1,
    name: 'Nike Air Max',
    price: 5999,
    size: [39, 40],
    gender: 'male',
    img: SHOES,
  },
  {
    id: 2,
    name: 'Adidas Ultraboost',
    price: 8499,
    size: [41, 42],
    gender: 'female',
    img: SHOES,
  },
  {
    id: 3,
    name: 'Puma RS-X',
    price: 6999,
    size: [38, 39],
    gender: 'male',
    img: SHOES,
  },
  {
    id: 4,
    name: 'Reebok Classic',
    price: 4999,
    size: [37, 38],
    gender: 'female',
    img: SHOES,
  },
  {
    id: 5,
    name: 'New Balance 574',
    price: 7599,
    size: [40, 41],
    gender: 'male',
    img: SHOES,
  },
  {
    id: 6,
    name: 'Converse Chuck Taylor',
    price: 3999,
    size: [36, 37],
    gender: 'female',
    img: SHOES,
  },
  {
    id: 7,
    name: 'Vans Old Skool',
    price: 4299,
    size: [39, 40],
    gender: 'male',
    img: SHOES,
  },
  {
    id: 8,
    name: 'Asics Gel-Kayano',
    price: 9999,
    size: [42, 43],
    gender: 'male',
    img: SHOES,
  },
  {
    id: 9,
    name: 'Salomon Speedcross',
    price: 11299,
    size: [40, 41],
    gender: 'female',
    img: SHOES,
  },
];
const sizeOptions = [35, 36, 37, 38, 39, 40, 41, 42, 43];

export const sneakersAPI = {
  getSneakers() {
    return sneakersList;
  },
  getSizeOptions() {
    return sizeOptions;
  },
};
