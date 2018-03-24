<template>
<div class="movie"
     v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
  <div class="content">
    <h1 class="title">{{ title }}</h1>
    <p class="description">{{ description }}</p>
    <p class="duration">{{ duration }}</p>
  </div>
</div>
</template>
<script>
export default {
  name: "movie",
  props: [
    'image',
    'title',
    'description',
    'duration'
  ],
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.movie{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
  width : 100%;
  height : 800px;
  background-color: rgba(255, 255, 255, 0.7);
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
}
.content {
  padding: 10px;
}
</style>
