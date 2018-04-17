<template>
  <div id="app">
    <div class="test">test</div>
  </div>
</template>

<script>
export default {
  mounted(){
    axios.get('/api/test')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
</script>


<style lang="scss">
  @import './assets/css/base.scss';
  
  .test {
    display: flex;
    width: 300px;
    background: red;
    font-size: 20px;
    color:#fff;
  }
</style>