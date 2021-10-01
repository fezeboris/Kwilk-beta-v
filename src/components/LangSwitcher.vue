<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langs: ["fr", "en"],
    };
  },
};
</script>

<style scoped>
select{
  display: block;
  padding: 0;
  width: 34px;
  font-size: .9rem;
  /* margin-bottom: 10px; */
  background: #ecf4f2;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  outline: none;
  color: #555;
}
option{
  background-color: lightskyblue;
  width: 15px;
}
</style>