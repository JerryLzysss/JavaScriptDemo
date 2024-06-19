<template>
    <div>
        <dv-scroll-board :config="config" class="scroll1">
        </dv-scroll-board>
        <dv-scroll-board :config="config2" class="scroll2">
        </dv-scroll-board>
        <dv-scroll-ranking-board :config="config3" class="scroll3">  
        </dv-scroll-ranking-board>
    </div>
</template>
<script>
    export default{
        
        data()
        {
            return{
                config:{
                    header:['列1','列2','列3'],
                    data:[['1','2','3'],
                    ['7','8','9'],
                    ['4','5','6'],
                    ['1','2','3'],
                    ['7','8','9'],
                    ['4','5','6'],
                    ['1','2','3'],
                    ['7','8','9'],
                    ['4','5','6']],
                    index:true
                },
                config2:{
                    header:['列1','列2','列3'],
                    data:[['<span style="color:red">1</span>','2','3'],
                    ['7','<span style="color:green">3</span>','9'],
                    ['4','5','6'],
                    ['1','2','3'],
                    ['7','8','9'],
                    ['4','5','6'],
                    ['1','2','3'],
                    ['7','8','9'],
                    ['4','5','6'],
                    ['4','5','6']],
                    index:true,
                    carousel:'page'
                },
                config3:{
                    data:[{name:'南阳',value:123},
                    {name:'周口',value:111},
                    {name:'漯河',value:625},
                    {name:'西峡',value:62},
                    {name:'郑州',value:1122},
                    {name:'南阳',value:133},
                    {name:'周口',value:11},
                    {name:'漯河',value:375},
                    {name:'西峡',value:92},
                    {name:'郑州',value:182},]
                }
            }
        },
        mounted() {
          
        },
        methods:{
          
        }
    }
</script>
<style scoped>
    .scroll1{
        width:350px;
        height:200px;
        position:absolute;
        top:20px;
        left:25px;
    }
    .scroll2{
        width:350px;
        height:200px;
        position:absolute;
        top:250px;
        left:25px;
    }
    .scroll3{
        width:350px;
        height:200px;
        position:absolute;
        top:500px;
        left:25px;
    }
</style>