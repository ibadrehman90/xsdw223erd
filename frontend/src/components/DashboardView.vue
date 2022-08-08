<template>
  <div class="container" :key="lightData.id" v-for="lightData in lightsData">
    <!-- <h2 class="innerText">Dashboard view</h2> -->
    
      <TrafficLight class="trafficLights" :lightDescp="[lightData.id,lightData.name,
      lightData.description,lightData.method,lightData.url]"/>
      <!-- <TrafficLight class="trafficLights"/>
      <TrafficLight class="trafficLights"/>
      <TrafficLight class="trafficLights"/> -->
   
  </div>
  
</template>

<script>
import TrafficLight from '../components/TrafficLight.vue'
export default {

  name: 'DashboardView',
  components:{
  TrafficLight
  },
  props:{
    lightsData: Object
  },
  data(){
    return{
      data:[]
    }
  },
  created(){
    // console.log(this.lightsData.lights)
    
  }
}
</script>

<style scoped>

.container{
  min-height: 200;
  display: flex;
  flex-wrap:wrap;
  padding-top: 100px;
  padding: 80px;
}

 
.trafficLights {
  flex: 1 0 21%;
  margin: 10px;
}


@media only screen and (max-width: 792px){
.container{
  padding-top: 0px;
  padding: 0;
  flex-wrap:wrap;
}


}

</style>