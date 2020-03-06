<template>
  <div class="home">
    <slideblock></slideblock>
    <p>hhhh</p>
  </div>
</template>

<script>
import slideblock from '../components/slideBlock'
export default {
  name: 'Home',
  components:{slideblock}
}
</script>
<style lang="less" scoped>
p{
  color:@color;
}
</style>
