import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('new card should be not empty', () => {
  const cart = new Cart();
  const film = new Movie(1002, 'Мстители', 550, 'Avengers', 2012, 'США', '"Avengers Assemble!"', 'fantasy', 137);
  cart.add(film);

  expect(cart.items[0]).toEqual(film);
});

test('summWithoutDiscount is calculated correctly', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1002, 'Мстители', 550, 'Avengers', 2012, 'США', '"Avengers Assemble!"', 'fantasy', 137));

  expect(cart.summWithoutDiscount()).toBe(3450);
});

test('summWithDiscount is calculated correctly', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1002, 'Мстители', 550, 'Avengers', 2012, 'США', '"Avengers Assemble!"', 'fantasy', 137));

  expect(cart.summWithDiscount(90)).toBe(3105);
});

test('deleteItem is correct', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1002, 'Мстители', 550, 'Avengers', 2012, 'США', '"Avengers Assemble!"', 'fantasy', 137));
  cart.deleteItem(1008);

  expect(cart.items.length).toBe(2);
});
