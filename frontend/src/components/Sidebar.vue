<template>
    <div class="container">
        <div class="items" :key="title" v-for="title in titles">
            <span @dashboard-title="$emit('dashboard-title',title)" class="indItems" @click="info(title)" >{{title}}</span>
        </div>
        <span class="indItems" v-if="dashboards == undefined">No data found</span>
    </div>
</template>

<script>
export default {
    name:'Sidebar',
    props:{
       dashboards:Object
    },
    data(){
        return{
            titles:[]
        }
    },
    methods:{
        info(title){
           this.$emit('dashboard-title', title)
        }
       
    },
    mounted(){
       
        this.titles = Object.keys(this.dashboards)
    }

}
</script>

<style scoped>

.container{
  min-height: 100vh;
  background-color:#C41A11;
  
}

.innerText{
  margin: auto;
}

.items{
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    justify-items: start;
    color:white;
}

.indItems{
    padding: 10px;
    min-width: 228px;
}

.indItems:hover{
    background-color: black;
    cursor: pointer;
}

.dash{
   
    padding-bottom: 20px;
    padding-left: 10px;
    color:black;
}


@media only screen and (max-width: 792px){
  .container{
    min-height: 80px;
    display: flex;
    position: fixed;
    bottom:0;
    min-width: 100%;
  }

  .items{
      flex-direction: row;
      margin:auto;
      padding-top:0px;
  }

  .indItems{
    padding: 10px;
    min-width: 0px;
}

.dash{
    display: none;
}
}

</style>