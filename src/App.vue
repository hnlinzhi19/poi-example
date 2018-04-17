<template>
  <div id="app" v-bind:style="styleObject">
    <div class="test">test</div>
  </div>
</template>

<script>
import {isPc} from '@/Common';

export default {
  data(){
    return {
      styleObject:{}
    }
  },
  mounted(){
    // 如果是pc 则限制最大宽度 750
    if (isPc()) {
      this.styleObject = {
        maxWidth: '750px',
      };
    }
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
  #app{
    margin: 0 auto;
  }
  .test {
    display: flex;
    width: 300px;
    background: red;
    font-size: 20px;
    color:#fff;
  }
</style>