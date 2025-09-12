<script setup></script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>
        <span class="highlight">Black Frida<span class="y">y</span></span> is coming this November!
      </h1>
      <p>
        Get ready for <strong>unbeatable deals</strong> on your favorite products.<br />
        <span class="sub">Exclusive offers, huge discounts, and surprises you can't miss!</span>
      </p>
      <a href="#" class="hero-btn">Get notified &rarr;</a>
    </div>
    <div class="hero-img">
      <img
        src="/laura-chouette-4sKdeIMiFEI-unsplash.jpg"
        alt="Perfume bottle"
      />
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 340px;
  background: linear-gradient(90deg, #ff006e 0%, #fbbf24 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 38px 0 28px 0;
  gap: 40px;
  box-sizing: border-box;
  overflow: hidden;
}
.hero-content {
  max-width: 600px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 18px;
  z-index: 2;
}
.hero-content h1 {
  font-size: 2.7rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 8px;
  letter-spacing: 1px;
}
.highlight {
  background: linear-gradient(90deg, #fff 30%, #ff006e 100%);
  color: #ff006e;
  padding: 0 10px;
  border-radius: 8px;
  font-weight: 900;
  box-shadow: 0 2px 12px #fff3;
}
.hero-content p {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 10px;
  color: #fffbe7;
}
.sub {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  display: block;
  margin-top: 6px;
}
.hero-btn {
  display: inline-block;
  margin-top: 10px;
  background: #fff;
  color: #ff006e;
  font-weight: bold;
  font-size: 1.15rem;
  padding: 12px 32px;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 2px 16px #ff006e44;
  transition:
    background 0.2s,
    color 0.2s,
    transform 0.2s;
}
.hero-btn:hover {
  background: #ff006e;
  color: #fff;
  transform: scale(1.05);
}
.hero-img {
  flex: 0 0 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.hero-img img {
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 22px;
  box-shadow: 0 4px 32px #ff006e55;
  border: 4px solid #fff;
}
@media (max-width: 900px) {
  .hero {
    flex-direction: column-reverse;
    gap: 18px;
    padding: 18px 0 10px 0;
  }
  .hero-img img {
    width: 90vw;
    max-width: 340px;
    height: 160px;
  }
  .hero-content h1 {
    font-size: 2.2rem;
  }
  .hero-content p {
    font-size: 1.1rem;
  }
  .hero-btn {
    padding: 10px 24px;
    font-size: 1rem;
  }
}
</style>
