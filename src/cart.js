function addToCart(cart, product, quantity) {
  if (quantity < 1 || quantity > product.stock) {
    throw new RangeError('Некорректное количество товара');
  }

  const existingProduct = cart.find((item) => item.id === product.id);
  const newQuantity = (existingProduct?.quantity ?? 0) + quantity;

  if (newQuantity > product.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }

  if (existingProduct) {
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item,
    );
  }

  return [...cart, { ...product, quantity }];
}

function changeQuantity() {
  throw new Error('Пока не реализована');
}

function removeFromCart() {
  throw new Error('Пока не реализована');
}

function calculateCartSubtotal() {
  throw new Error('Пока не реализована');
}

function calculateOrderTotal() {
  throw new Error('Пока не реализована');
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
