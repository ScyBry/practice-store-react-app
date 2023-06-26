export const CATEGORIES = ['Все', 'Телефоны', 'Планшеты', 'Дроны'];

export const SORT_OPTIONS = [
  { name: 'популярности (DESC)', sortProperty: 'rating' },
  { name: 'популярности (ASC)', sortProperty: '-rating' },
  { name: 'цене (DESC)', sortProperty: 'price' },
  { name: 'цене (ASC)', sortProperty: '-price' },
  { name: 'алфавиту (DESC)', sortProperty: 'name' },
  { name: 'алфавиту (ASC)', sortProperty: '-name' },
];

export const ROUTES = [
  {
    name: 'Главная',
    route: '/',
  },
  {
    name: 'Каталог',
    route: '/catalog',
  },
];
