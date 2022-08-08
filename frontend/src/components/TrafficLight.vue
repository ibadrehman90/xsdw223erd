<template>

  <div class="main-container">
      <div class="lightbox">
          <div class="box">
            <div :class="[mystatus == 0 ? 'red-dimmed' : mystatus != 200 ? 'red' :'red-dimmed', 'red-dimmed']"></div>
            <div :class="[mystatus == 200 ? 'green' : 'green-dimmed', 'green-dimmed']"></div>
          </div>
        <span class="descp">{{lightDescp[2]}}</span>
      </div>
  
  </div>
  
 
</template>

<script>
export default {
    name: 'TrafficLight',
    props:{
        status:Number,
        lightDescp: Object
    },
    data(){
        return{
            mystatus: 0
        }
    },
    methods:{
        getData(){
        const data = {lightId:this.lightDescp[0]}
         axios.post('http://localhost:3000/status',data)
            .then((response)=>{
                this.mystatus = response.status            
            }
            ).catch(err=>{
                this.mystatus = err.response.request.status
            })
        }
    },
    mounted: function () {
        this.newtimer = setInterval(() => {
            this.mystatus = 0
        }, 2000)
        this.timer = setInterval(() => {
            this.getData();
        }, 10000)
    },
    beforeDestroy() {
        clearInterval(this.timer)
        clearInterval(this.newtimer)
    }
}
</script>

<style scoped>

.main-container{
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  
}

.lightbox{
    height: auto;
    width: 120px;
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
}

.box{
    width: 80px;
    background-color: black;
    height: 120px;
    display: flex;
    flex-direction: column;
    
}

.red-dimmed{
    margin: auto;
    height: 40px;
    width: 40px;
    background-color:rgb(92, 2, 2);
    border-radius:50px;
}

.red{
    margin: auto;
    height: 40px;
    width: 40px;
    background-color: red;
    border-radius:50px;
}

.green-dimmed{
    margin: auto;
    height: 40px;
    width: 40px;
    background-color:rgb(1, 88, 1);
    border-radius:50px;
}

.green{
    margin: auto;
    height: 40px;
    width: 40px;
    background-color:rgb(77, 235, 77);
    border-radius:50px;
}

.descp{
   text-align: center;
}

</style>