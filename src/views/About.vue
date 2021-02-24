<template>
  <div class="about">
    <div class="about-body">
      <div class="about-container">
        <h2 class="mb-5">О нас</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi odio ullam
          consequatur corrupti repellendus qui optio libero quo ab eos quam, vero
          consectetur. Magni, dolor ratione aperiam odio asperiores culpa consectetur
          maiores voluptate architecto distinctio nostrum delectus in cumque blanditiis
          deserunt veniam quas quisquam dignissimos, nulla neque quia? Voluptate ad
          incidunt maxime optio a accusamus cumque, obcaecati architecto earum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi odio ullam
          consequatur corrupti repellendus qui optio libero quo ab eos quam, vero
          consectetur. Magni, dolor ratione aperiam odio asperiores culpa consectetur
          maiores voluptate architecto distinctio nostrum delectus in cumque blanditiis
          deserunt veniam quas quisquam dignissimos, nulla neque quia? Voluptate ad
          incidunt maxime optio a accusamus cumque, obcaecati architecto earum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat neque at
          dolores nulla odio maxime eum quibusdam, aperiam consectetur quas?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.about {
  background: url("../assets/img/about.jpg") no-repeat;
  background-size: cover;
  position: relative;
  height: 100%;
  padding: 100px 0 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}
.about-body {
  width: 70%;
}
@media (max-width: 768px) {
  .about-body {
    width: 90%;
  }
}
.about-container {
  padding: 15px;
  background: #fff;
  border-radius: 10px;
}
p {
  font-size: 14px;
}
</style>
