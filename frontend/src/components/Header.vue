<template>
    <div class="container">
        <img class="innerText" src="../assets/nnlogo.svg" width="200" height="60"/>
       
    </div>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style scoped>

.container{
  min-height: 10vh;
  background-color:lightgray;
  display: flex;
}

.innerText{
  margin: auto;
  color:white;
}

@media only screen and (max-width: 792px){
  /* .container{
    min-height: 70px;
  } */

}

</style>