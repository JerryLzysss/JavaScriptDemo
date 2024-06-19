<template>
    <div>
        <dv-capsule-chart :config="config" class="picture0"/>
        <dv-capsule-chart :config="config0" class="picture00"/>
        <dv-capsule-chart :config="config1" class="picture1"/>
        <dv-capsule-chart :config="config2" class="picture2"/>
    </div>
</template>
<script>
import Charts from '@jiaminghi/charts'
    export default{
        
        data()
        {
            return{
               config:{
                data:[{name:'南阳',value:123},
                {name:'周口',value:111},
                {name:'漯河',value:345},
                {name:'西峡',value:62},
                {name:'郑州',value:182}]
               
               },
               config0:{
                data:[{name:'南阳',value:123},
                {name:'周口',value:111},
                {name:'漯河',value:345},
                {name:'西峡',value:62},
                {name:'郑州',value:182}],
                colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
               },
               config1:{
                data:[{name:'南阳',value:123},{name:'周口',value:111},{name:'漯河',value:345},{name:'西峡',value:62},{name:'郑州',value:182}],
                unit:'个'
                },
               config2:{
                data:[{name:'南阳',value:123},{name:'周口',value:111},{name:'漯河',value:345},{name:'西峡',value:62},{name:'郑州',value:182}],
                showValue: true
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
.picture0{
    position:absolute;
    width:300px;
    height:200px;
    top:20px;
    left:50px;
}
.picture00{
    position:absolute;
    width:300px;
    height:200px;
    top:200px;
    left:50px;
}
.picture1{
    position:absolute;
    width:300px;
    height:200px;
    top:400px;
    left:50px;
}
.picture2{
    position:absolute;
    width:300px;
    height:200px;
    top:600px;
    left:50px;
}
</style>