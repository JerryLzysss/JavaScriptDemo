<template>
    <div>
        <dv-active-ring-chart 
        :config="config"
        
        class="pic pic0" />
        <dv-active-ring-chart 
        :config="config1"
        
        class="pic pic1" />
        <dv-active-ring-chart 
        :config="config2"
       
        class="pic pic2" />
    </div>
</template>
<script>
import Charts from '@jiaminghi/charts'
    export default{
        
        data()
        {
            return{
               config:{
                data:[{name:'南阳',value:123},{name:'周口',value:111},{name:'漯河',value:345},{name:'西峡',value:62},{name:'郑州',value:182}]
               
               },
               config1:{
                data:[{name:'南阳',value:123},{name:'周口',value:111},{name:'漯河',value:345},{name:'西峡',value:62},{name:'郑州',value:182}],
                lineWidth:10
               },
               config2:{
                data:[{name:'南阳',value:123},{name:'周口',value:111},{name:'漯河',value:345},{name:'西峡',value:62},{name:'郑州',value:182}],
                showOriginValue:true
               },
            }
        },
        mounted() {
          
        },
        methods:{
          
        }
    }
</script>
<style scoped>
.pic{
    position:absolute;
    width:250px;
    height:190px;
    top:-15px;
    zoom:1.5;      
}
.pic0{
    
    left:-20px;  
}
.pic1{
 
    left:180px;
}
.pic2{
   
    left:380px;
}
</style>