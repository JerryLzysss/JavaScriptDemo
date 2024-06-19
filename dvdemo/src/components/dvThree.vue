
<template>
    <div>
     <dv-full-screen-container class="background">
        <div style="display:inline-flex;justify-content: center;">
             <dv-border-box-7 class="btn btn01">
              <span @click="nav(1)">图表演示</span>
             </dv-border-box-7>
             <dv-border-box-7 class="btn btn02">
              <span @click="nav(2)">边框演示</span>
              </dv-border-box-7>
           </div>
           <div style="display:inline-flex">
             <dv-decoration-8 class="title-left"/>
             <span class="top-title">DataV</span>
             <dv-decoration-8 class="title-right":reverse="true"/>
           </div>
           <div style="display:inline-flex;justify-content: center;">
             <dv-border-box-7  class="btn btn03">
                <span>装饰演示</span>
            </dv-border-box-7>
             <dv-border-box-7  class="btn btn04">
               <span @click="nav(4)">其他演示</span> 
            </dv-border-box-7>
           </div>
        <div>
            <div class="decoration">
                <div class="dec-1">
                    <dv-decoration-1 class="dv-1"></dv-decoration-1>
                </div>
                <div class="dec-2" style="animation-delay:0s">
                    <dv-decoration-2 class="dv-2"></dv-decoration-2>
                </div>
                <div class="dec-2" style="animation-delay:1s">
                    <dv-decoration-2 class="dv-2"></dv-decoration-2>
                </div>
                <div class="dec-2" style="animation-delay:2s">
                    <dv-decoration-2 class="dv-2"></dv-decoration-2>
                </div>
                <div class="dec-2" style="animation-delay:3s">
                    <dv-decoration-2 class="dv-2"></dv-decoration-2>
                </div>
                <div class="dec-3">
                    <dv-decoration-3 class="dv-3"></dv-decoration-3>
                </div>
                <div class="dec-4">
                    <dv-decoration-4 class="dv-4"></dv-decoration-4>
                </div>
                <div class="dec-4v">
                    <dv-decoration-4 :reverse="true" class="dv-4v"></dv-decoration-4>
                </div>
                <div class="dec-5">
                    <dv-decoration-5 class="dv-5"></dv-decoration-5>
                </div>
                <div class="dec-6">
                    <dv-decoration-6 class="dv-6"></dv-decoration-6>
                </div>
                <div class="dec-7">
                    <dv-decoration-7 class="dv-7">Decoration</dv-decoration-7>
                </div>
                <div class="dec-9">
                    <dv-decoration-9 class="dv-9">{{value}}</dv-decoration-9>
                </div>
                <div class="dec-10">
                    <dv-decoration-10 class="dv-10"></dv-decoration-10>
                </div>
                <div class="dec-11">
                    <dv-decoration-11 class="dv-11">{{value}}</dv-decoration-11>
                </div>
            </div>
            <div class="chart">
                <div class="water">
                  <dv-water-level-pond :config="config">

                  </dv-water-level-pond>
                </div>
                <div class="progress">
                    <dv-percent-pond :config="config2" style="width:400px;height:200px"/>
                </div>
                <div class="conical">
                    <dv-conical-column-chart :config="config3" style="width:400px;height:200px;" />
                </div>
            </div>
            
            <div class="number">
                <div class="num">
                    <dv-digital-flop :config="config4" style="width:200px;height:50px;" />
                </div>
            </div>
        </div>
     </dv-full-screen-container>
    
    </div>
    
 </template>
 
 <script>

 export default {
   data() {
     return {
        value:'10%',
        timer:null,
        config:{
            data:[10],
            shape:'rect',
            colors:['#00BAFF','#3DE7C9'],
            formatter:'{value}%'
        },
        config2:{
            value:10,
            borderWidth:5,
            borderRadius:10,
            borderGap:5,
            localGradient:true,
            colors: ['#01c4f9', '#c135ff'],
            
        },
        config3:{
            data:[
                {name:'rocket',value:100},
                {name:'plane',value:92},
                {name:'helicopter',value:78},
                {name:'ship',value:65},
                {name:'car',value:43},
                {name:'bike',value:28},
                {name:'run',value:13}
            ],
            img:[require('../assets/rocket.png'),
            require('../assets/plane.png'),
            require('../assets/helicopter.png'),
            require('../assets/ship.png'),
            require('../assets/car.png'),
            require('../assets/bike.png'),
            require('../assets/run.png')]
        },
        config4:{
            number:[10]
        }
       
        

     }
   },
   components:{
   
   },
   mounted()
   {
       if(this.timer==null){
            this.timer=setInterval(()=>{
            let number=this.value
                
            this.config.data[0]=(this.config.data[0]+1)%101
            this.config={...this.config}
            this.config2.value=(this.config2.value+1)%101
            this.config2={...this.config2}
            this.value=(parseInt(this.value)+1)+'%'
            this.config4.number[0]=(this.config4.number[0]+1)%101
            this.config4={...this.config4}
            },1000)
        }
   },
   beforeDestory(){
        clearInterval(this.timer)
        this.timer=null
   },
   methods:{
        
        nav(value)
        {
            switch(value)
            {
                case 1:this.$router.push('/dvOne');break;
                case 2:this.$router.push('/dvTwo');break;
                case 3:this.$router.push('/dvThree');break;
                case 4:this.$router.push('/dvFour');break;
            }
        }
   }
 }
  
 </script>
 
 <style scoped>
   .background{
     background-image:url("../assets/bg.png")
   }
    .btn{
      font-family:Arial;
      font-weight:bold;
      position:relative;
      top:-100px;
      left:0px;
      width:150px;
      height:50px;
      color:#ffffff;
      font-size:25px;
      text-align:center;
    }
    
    .btn02{
    left:10px;
   
    }
    .btn03{
    left:30px;
    color:#FFD700;
    }
    .btn04{
    left:40px;
    }
    .top-title{
    color:#FFFFFF;
    font-size:45px;
    position:absolute;
    left:900px;

    }
    .title-left{
    position:relative;
    width:330px;
    height:150px;
    left:20px;
    }
    .title-right{
    position:relative;
    width:330px;
    height:150px;
    left:20px;
    }
    .dec1{
        position:absolute;
        top:300px;
        left:300px;
        width:300px;
        height:300px;
        
    }
    .dec-1{
        position:absolute;
        top:500px;
        left:-200px;
        width:500px;
        height:100px;
        transform:rotate(90deg)
    }
    .dec-2
    {
        position:absolute;
        top:100px;
        left:100px;
        width:300px;
        height:300px;
        animation:around 8s infinite;
    }
    @keyframes around{
        0%{
            transform:rotate(0deg)
        }
        12.5%{
            transform:rotate(90deg)
        }
        25%{
            transform:rotate(180deg)
        }
        37.5%{
            transform:rotate(270deg)
        }
        50%{
            transform:rotate(360deg)
        }
        62.5%{
            transform:rotate(450deg)
        }
        75%{
            transform:rotate(540deg)
        }
        87.5%{
            transform:rotate(630deg)
        }
        100%{
            transform:rotate(720deg)
        }
    }
    .dec-3{
        position:absolute;
        top:40px;
        left:1500px;
        width:300px;
        height:300px;
    }
    .dec-4{
        position:absolute;
        top:100px;
        left:1850px;
        width:100px;
        height:828px;
    }
    .dec-4v{
        position:absolute;
        top:500px;
        left:100px;
        width:1800px;
        height:850px;
    }
    .dec-5{
        position:absolute;
        top:150px;
        left:630px;
        width:700px;
        height:100px;
    }
    .dec-6{
        position:absolute;
        top:100px;
        left:881px;
        width:200px;
        height:100px;
    }
    .dec-7{
        position:absolute;
        top:150px;
        left:830px;
        width:300px;
        height:0px;
        color:gold;
        font-size:40px;
    }
    .dec-9{
        position:absolute;
        top:600px;
        left:800px;
        width:300px;
        height:300px;
        color:silver;
        font-size:50px;
    }
    .dec-10{
        position:absolute;
        top:400px;
        left:800px;
        width:300px;
        height:300px;
    }
    .dec-11{
        position:absolute;
        top:240px;
        left:840px;
        width:300px;
        height:100px;
        font-size:50px;
    }
    .water{
        position:absolute;
        top:650px;
        left:400px;
        width:300px;
        height:300px;
    }
    .progress{
        position:absolute;
        top:650px;
        left:1200px;
        width:300px;
        height:300px;
    }
    .conical{
        position:absolute;
        top:350px;
        left:1400px;
        width:300px;
        height:300px;
    }
    .number{
        position:absolute;
        top:400px;
        left:850px;
        width:300px;
        height:300px;
    }
 </style>