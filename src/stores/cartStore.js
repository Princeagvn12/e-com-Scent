import { ref, computed } from 'vue'
export const cart = ref([])

export function addToCart(product) {
  const found = cart.value.find((item) => item.id === product.id)
  if (found) {
    found.qty++
  } else {
    cart.value.push({ ...product, qty: 1 })
  }
}

export function removeFromCart(product) {
  const found = cart.value.find((item) => item.id === product.id)
  if (found) {
    found.qty--
    if (found.qty <= 0) {
      cart.value = cart.value.filter((item) => item.id !== product.id)
    }
  }
}

export function getProductQty(productId) {
  const found = cart.value.find((item) => item.id === productId)
  return found ? found.qty : 0
}

export const cartCount = computed(() => cart.value.reduce((sum, item) => sum + item.qty, 0))
