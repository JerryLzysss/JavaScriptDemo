<template>
    <div>
     <dv-full-screen-container class="background">
      <div style="display:inline-flex;justify-content: center;">
             <dv-border-box-7 class="btn btn01">
              <span @click="nav(1)">图表演示</span>
             </dv-border-box-7>
             <dv-border-box-7 class="btn btn02">
              <span>边框演示</span>
              </dv-border-box-7>
           </div>
           <div style="display:inline-flex">
             <dv-decoration-8 class="title-left"/>
             <span class="top-title">DataV</span>
             <dv-decoration-8 class="title-right":reverse="true"/>
           </div>
           <div style="display:inline-flex;justify-content: center;">
             <dv-border-box-7  class="btn btn03">
                <span @click="nav(3)">装饰演示</span>
            </dv-border-box-7>
             <dv-border-box-7  class="btn btn04">
               <span @click="nav(4)">其他演示</span> 
            </dv-border-box-7>
           </div>
       <div>
        <dv-border-box-1 class="dv dv-1">box1</dv-border-box-1>
        <dv-border-box-2 class="dv dv-2">box2</dv-border-box-2>
        <dv-border-box-3 class="dv dv-3">box3</dv-border-box-3>
        <dv-border-box-4 class="dv dv-4">box4</dv-border-box-4>
        <dv-border-box-4 class="dv dv-4rev" :reverse="true">box4-rev</dv-border-box-4>
        <dv-border-box-5 class="dv dv-5">box5</dv-border-box-5>
        <dv-border-box-5 class="dv dv-5rev" :reverse="true">box5-rev</dv-border-box-5>
        <dv-border-box-6 class="dv dv-6">box6</dv-border-box-6> 
        <dv-border-box-7 class="dv dv-7">box7</dv-border-box-7>
        <dv-border-box-8 class="dv dv-8">box8</dv-border-box-8>
        <dv-border-box-9 class="dv dv-9">box9</dv-border-box-9>
        <dv-border-box-10 class="dv dv-10">box10</dv-border-box-10> 
        <dv-border-box-11 class="dv dv-11">box11</dv-border-box-11> 
        <dv-border-box-12 class="dv dv-12">box12</dv-border-box-12>  
        <dv-border-box-13 class="dv dv-13">box13</dv-border-box-13> 
      </div>
   </dv-full-screen-container>
    
    </div>
    
 </template>
 
 <script>
 

 export default {
   data() {
     return {
     }
   },
   components:{
   
   },
   mounted()
   {
     
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
    color:#FFD700;
    }
    .btn03{
    left:30px;
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
    .dv{
      position:absolute;
      width:200px;
      height:200px;
      color:#FFD700;
      font-size:45px;
    }
    .dv-1{
      top:200px;
      left:10px;
    }
    .dv-2{
      top:200px;
      left:300px; 
    }
    .dv-3{
      top:200px;
      left:600px; 
    }
    .dv-4{
      top:200px;
      left:900px; 
      
    } 
    .dv-4rev{
      top:200px;
      left:1200px; 
      
    }
    .dv-5{
      top:200px;
      left:1500px; 
    }

    .dv-5rev{
      top:450px;
      left:10px; 
    }

    .dv-6{
      top:450px;
      left:300px; 
    }
    .dv-7{
      top:450px;
      left:600px;
    }
    .dv-8{
      top:450px;
      left:900px;
    }
    .dv-9{
      top:450px;
      left:1200px;
    }
    .dv-10{
      top:450px;
      left:1500px;
    }
    .dv-11{
      top:700px;
      left:10px;
    }
    .dv-12{
      top:700px;
      left:300px;
    }
    .dv-13{
      top:700px;
      left:600px;
    }
 </style>