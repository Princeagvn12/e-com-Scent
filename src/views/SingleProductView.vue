<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const url = `https://dummyjson.com/products/${route.params.id}`

const product = ref(null)

onMounted(() => {
  async function fetchProduct() {
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      product.value = await response.json()
      console.log(product.value)
    } catch (error) {
      console.error('Error fetching product:', error)
    }
  }
  fetchProduct()
})
</script>

<template>
  <div class="product-sheet" v-if="product">
    <div class="sheet-img">
      <img :src="product.images[0]" :alt="product.title" />
    </div>
    <div class="sheet-info">
      <h1 class="sheet-title">{{ product.title }}</h1>
      <div class="sheet-rating">
        <span v-for="i in Math.round(product.rating)" :key="i" class="star">★</span>
        <span class="sheet-rating-value">{{ product.rating }}</span>
      </div>
      <div class="sheet-price-row">
        <span class="sheet-price">${{ product.price }}</span>
        <span class="sheet-promo">Promo {{ product.discountPercentage }}%</span>
        <span class="sheet-price-reduced">
          ${{ (product.price * (1 - product.discountPercentage / 100)).toFixed(2) }}
        </span>
      </div>
      <div class="sheet-guarantee">
        <span>✔ Garantie 2 ans incluse</span>
      </div>
      <div class="sheet-category">
        Catégorie : <strong>{{ product.category }}</strong>
      </div>
      <p class="sheet-desc">{{ product.description }}</p>

      <!-- Partie technique et QR code -->
      <div class="sheet-tech">
        <h2>Comment utiliser ce produit&nbsp;?</h2>
        <ul>
          <li>Lire attentivement la notice avant la première utilisation.</li>
          <li>Utiliser sur une surface propre et sèche.</li>
          <li>Respecter les consignes de sécurité indiquées sur l’emballage.</li>
          <li>Pour toute question, scanner le QR code ci-dessous.</li>
        </ul>
        <div class="qr-section">
          <img
            class="qr-code"
            src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://votre-site.com/support"
            alt="QR code support"
          />
          <span class="qr-label">Support &amp; mode d’emploi</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-sheet {
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  background: #f7fafd;
  border-radius: 18px;
  box-shadow: 0 2px 16px #e0e7ef;
  padding: 2.5rem 2rem;
  max-width: 900px;
  margin: 40px auto;
  align-items: flex-start;
}
.sheet-img img {
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 1px 8px #d1e3f7;
}
.sheet-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}
.sheet-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a2340;
  margin-bottom: 0.2rem;
}
.sheet-rating {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 0.2rem;
}
.star {
  color: #ffd700;
  font-size: 1.3em;
  filter: drop-shadow(0 0 4px #ffd700);
}
.sheet-rating-value {
  color: #888;
  font-size: 1.1em;
  margin-left: 0.5em;
}
.sheet-price-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.2rem;
}
.sheet-price {
  font-size: 2.1rem;
  font-weight: 700;
  color: #ff3e6c;
  background: #fff0f5;
  padding: 0.3rem 1.2rem;
  border-radius: 8px;
  letter-spacing: 1px;
}
.sheet-promo {
  background: #e0f7fa;
  color: #0097a7;
  font-weight: 600;
  padding: 0.2rem 0.8rem;
  border-radius: 6px;
  font-size: 1rem;
  letter-spacing: 0.5px;
}
.sheet-price-reduced {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2e7d32;
  background: #e8f5e9;
  padding: 0.2rem 0.8rem;
  border-radius: 6px;
  margin-left: 0.5rem;
}
.sheet-guarantee {
  color: #2e7d32;
  background: #e8f5e9;
  padding: 0.2rem 0.8rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  width: fit-content;
}
.sheet-category {
  color: #1976d2;
  font-size: 1.05rem;
  margin-bottom: 0.2rem;
}
.sheet-desc {
  color: #444;
  font-size: 1.08rem;
  margin-top: 0.5rem;
  line-height: 1.6;
}

/* Partie technique et QR code */
.sheet-tech {
  margin-top: 2.2rem;
  background: #e3f2fd;
  border-radius: 10px;
  padding: 1.2rem 1.2rem 1.5rem 1.2rem;
  box-shadow: 0 1px 6px #cfd8dc;
}
.sheet-tech h2 {
  font-size: 1.15rem;
  color: #1976d2;
  font-weight: 700;
  margin-bottom: 0.7rem;
}
.sheet-tech ul {
  margin: 0 0 1.2rem 1.2rem;
  padding: 0;
  color: #234;
  font-size: 1rem;
  line-height: 1.6;
}
.qr-section {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin-top: 0.5rem;
}
.qr-code {
  width: 90px;
  height: 90px;
  border-radius: 8px;
  border: 1.5px solid #b3e5fc;
  background: #fff;
}
.qr-label {
  color: #1976d2;
  font-size: 1rem;
  font-weight: 600;
}
@media (max-width: 700px) {
  .product-sheet {
    flex-direction: column;
    align-items: center;
    padding: 1.2rem 0.5rem;
  }
  .sheet-img img {
    width: 100%;
    max-width: 320px;
    height: 220px;
  }
  .sheet-info {
    padding: 0 0.5rem;
  }
  .sheet-title {
    font-size: 1.7rem;
  }
  .sheet-rating-value {
    font-size: 1rem;
  }
  .sheet-price {
    font-size: 1.8rem;
  }
  .sheet-promo,
  .sheet-price-reduced,
  .sheet-guarantee {
    font-size: 0.9rem;
    padding: 0.2rem 0.6rem;
  }
  .sheet-category {
    font-size: 0.9rem;
  }
  .sheet-desc {
    font-size: 0.95rem;
  }
  .sheet-tech {
    width: 100%;
    padding: 1rem;
  }
  .qr-code {
    width: 80px;
    height: 80px;
  }
}
</style>
