<template>
    <div class="flex justify-center align-itemsflex justify-center items-center min-h-screen">
      <p>Kategory Index {{ id }}</p>
    </div>
</template>
<script>
export default {
  data(){
    return{
      id: this.$route.params.id,
    }
  },
  watch:{
    '$route'(to, from){
      this.id = to.params.id;
    }
  },
  methods:{
    fetchData(){
      axios
      .get('http://localhost:3000/products')
      .then(response => (
        console.log(response)
      ))
    },
  },
  mounted(){
    this.fetchData();
  }
  // beforeRouteEnter (to, from, next) {
  //   // ...
  // }
}
</script>