<template>
     <HeroComponent/>
  <div class="ecom-login-wrapper">
    <!-- Transition pour la carte -->
    <transition name="slide-fade">
      <div class="ecom-login-card" v-if="showCard">
        <!-- Logo / Icon -->
        <transition name="fade">
          <div class="logo-container">
            <i class="fas fa-shopping-bag"></i>
          </div>
        </transition>

        <h2 class="title">Welcome Back <img src="/bag.png" alt="" width="23"></h2>
        <p class="subtitle">Login to continue shopping</p>

        <form @submit.prevent="handleLogin">
          <!-- Email -->
          <transition name="fade-up" mode="out-in">
            <div class="input-group" key="email">
              <input
                v-model="email"
                type="email"
                required
                placeholder=" "
              />
              <label>Email</label>
            </div>
          </transition>

          <!-- Password -->
          <transition name="fade-up" mode="out-in">
            <div class="input-group" key="password">
              <input
                v-model="password"
                type="password"
                required
                placeholder=" "
              />
              <label>Password</label>
            </div>
          </transition>

          <transition name="fade">
            <button type="submit" class="btn">Login</button>
          </transition>
        </form>

        <p class="footer">
          Don’t have an account?
          <router-link to="/register">Sign up</router-link>
        </p>
      </div>
    </transition>
  </div>
</template>

<script setup>
 import HeroComponent from '@/components/HeroComponent.vue';

import { ref, onMounted } from "vue"
import Swal from "sweetalert"

const email = ref("")
const password = ref("")
const showCard = ref(false)

onMounted(() => {
  // Affiche la carte avec un petit délai pour déclencher l'animation
  setTimeout(() => (showCard.value = true), 200)
})

function handleLogin() {
  const users = JSON.parse(localStorage.getItem("users")) || []
  const found = users.find(
    (u) => u.email === email.value && u.password === password.value
  )

  if (found) {
    Swal.fire({
      icon: "success",
      title: "Login successful 🎉",
      text: `Welcome back, ${email.value}!`,
    })
  } else {
    Swal.fire({
      icon: "error",
      title: "Login failed ❌",
      text: "Invalid email or password",
    })
  }
}
</script>

<style scoped>
/* Wrapper */
.ecom-login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
}

/* Card */
.ecom-login-card {
  background: #fff;
  padding: 2rem 2.5rem;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  width: 350px;
  text-align: center;
}

/* Logo */
.logo-container {
  background: #ff6f61;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(255, 111, 97, 0.4);
}

/* Inputs */
.input-group {
  position: relative;
  margin-bottom: 1.3rem;
}
.input-group input {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background: transparent;
  outline: none;
  transition: all 0.3s ease;
}
.input-group label {
  position: absolute;
  left: 14px;
  top: 12px;
  color: #777;
  font-size: 0.9rem;
  transition: 0.2s ease;
  pointer-events: none;
}
.input-group input:focus {
  border-color: #ff6f61;
  box-shadow: 0 0 0 3px rgba(255, 111, 97, 0.2);
}
.input-group input:focus + label,
.input-group input:not(:placeholder-shown) + label {
  top: -8px;
  left: 12px;
  font-size: 0.75rem;
  background: #fff;
  padding: 0 4px;
  color: #ff6f61;
}

/* Button */
.btn {
  width: 100%;
  padding: 12px;
  background: #ff6f61;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}
.btn:hover {
  background: #e65b50;
  transform: translateY(-2px);
}

/* Footer */
.footer {
  margin-top: 1.2rem;
  font-size: 0.85rem;
}
.footer a {
  color: #ff6f61;
  font-weight: bold;
  text-decoration: none;
}

/* === Vue Transitions === */
.slide-fade-enter-active {
  transition: all 0.6s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-up-enter-active {
  transition: all 0.5s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
</style>
