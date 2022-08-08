<template>
  <div class="container">
       <Header class="header"/>
       <div class="main">
          <Sidebar @dashboard-title="getTitle" v-if="dataLoaded == 'yes'" class="sidebar" :dashboards="dashboards"/>
          <!-- <DashboardView v-if="showComponentOne" class="dashboard" :lightsData="dashboardData"/> -->
          <DashboardView :key="componentKey" class="dashboard" :lightsData="dashboardData"/>
       </div>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import DashboardView from './components/DashboardView.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    DashboardView
},
data() {
    return {
      dashboards: [],
      dataLoaded: 'no',
      dashboardData: [],
      showComponentOne:false,
    }
},
methods:{
  getTitle(name){
    // console.log(this.dashboards[name])
    this.dashboardData = this.dashboards[name].lights
    this.componentKey += 1; 
  }
},
mounted(){
  axios.get('http://localhost:3000/dashboards')
  .then((response)=>{
    this.dashboards = response.data
    this.dataLoaded = 'yes'
  }
  ).catch(err=>{console.log(err)})
}
}
</script>

<style>

.main{
  display: flex;
}

.sidebar{
  min-width: 250px;
  background-color: lightgray;
}

/* .dashboard{
  flex-grow: 1;
} */

@media only screen and (max-width: 792px){
  .main{
    flex-direction: column-reverse;
  }

}
</style>
