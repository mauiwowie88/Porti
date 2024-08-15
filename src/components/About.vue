<template>
  <div class="container">
    <header>
      <p>scroll down</p>
      <button @click="scrollDown" aria-label="Scroll down">
        <img
          src="../../public/images/down.png"
          alt="Scroll down button"
          class="down-btn"
          loading="lazy"
        />
      </button>
    </header>

    <section class="about-section">
      <div class="about-image">
        <img
          src="/images/me.png"
          alt="Mauricio's profile image"
          class="profile-image"
          loading="lazy"
        />
      </div>
      <div class="about-text">
        <h1>About</h1>
        <p>
          Hi! I'm Mauricio, a passionate developer based in Austin, TX. I
          graduated from the Codesmith program in NYC back in 2020 and am
          looking to contribute my skills to a team focused on innovative AI/ML
          solutions and modern web development.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
const scrollDown = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: black;
  color: white;
}

button {
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
}

.down-btn {
  width: 3rem;
  height: auto;
}

.about-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-text {
  flex: 1;
  text-align: start;
}

.about-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image {
  width: 10rem;
  height: auto;
  border-radius: 50%;
}
</style>
