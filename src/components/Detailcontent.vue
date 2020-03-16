<template>
<div>
  <Detailtop />
  <router-view/>

</div>


</template>

<script>
import Detailtop from "./Detailtop.vue";

export default {
  components: {
    Detailtop

  }
};
</script>
