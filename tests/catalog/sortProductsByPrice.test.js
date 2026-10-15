const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары с 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(sortProductsByPrice(products, 'asc').map(({ id }) => id)).toEqual([
      3, 6, 5, 4, 2, 1,
    ]);
  });

  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    expect(sortProductsByPrice(products).map(({ id }) => id)).toEqual([
      3, 6, 5, 4, 2, 1,
    ]);
  });

  test("товары [1, 3, 4] с 'asc' сортируются как [3, 4, 1]", () => {
    const selectedProducts = products.filter(({ id }) =>
      [1, 3, 4].includes(id),
    );

    expect(
      sortProductsByPrice(selectedProducts, 'asc').map(({ id }) => id),
    ).toEqual([3, 4, 1]);
  });

  test("все товары с 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    expect(sortProductsByPrice(products, 'desc').map(({ id }) => id)).toEqual([
      1, 2, 4, 5, 6, 3,
    ]);
  });

  test("товары [3, 1, 4] с 'desc' сортируются как [1, 4, 3]", () => {
    const selectedProducts = products.filter(({ id }) =>
      [3, 1, 4].includes(id),
    );

    expect(
      sortProductsByPrice(selectedProducts, 'desc').map(({ id }) => id),
    ).toEqual([1, 4, 3]);
  });

  test("товары [5, 2, 6] с 'desc' сортируются как [2, 5, 6]", () => {
    const selectedProducts = products.filter(({ id }) =>
      [5, 2, 6].includes(id),
    );

    expect(
      sortProductsByPrice(selectedProducts, 'desc').map(({ id }) => id),
    ).toEqual([2, 5, 6]);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const selectedProducts = products.filter(({ id }) =>
      [1, 3, 4].includes(id),
    );
    const originalProducts = [...selectedProducts];

    sortProductsByPrice(selectedProducts, 'asc');

    expect(selectedProducts).toEqual(originalProducts);
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const selectedProducts = products.filter(({ id }) =>
      [1, 3, 4].includes(id),
    );
    const originalProducts = [...selectedProducts];

    sortProductsByPrice(selectedProducts, 'desc');

    expect(selectedProducts).toEqual(originalProducts);
  });

  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const originalProducts = [...products];

    sortProductsByPrice(products);

    expect(products).toEqual(originalProducts);
  });
});
