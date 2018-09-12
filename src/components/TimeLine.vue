<template lang="html">
  <div class="wrapper">
    <div class="line"></div>
    <label>{{ formattedDate }}</label>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'TimeLine',
  props: {
    date: Number
  },
  computed: {
    formattedDate: function(){
      return new Date(this.date).toLocaleString(navigator.languages[0], {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapper {
    margin: 18px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .line {
    width: 3px;

    background-color: var(--clr-gray-5);
    height: 2px;
  }
  label {
    margin: 0 8px;

    font-size: .7em;
    font-weight: bold;
    color: var(--clr-gray-5);
  }
</style>
