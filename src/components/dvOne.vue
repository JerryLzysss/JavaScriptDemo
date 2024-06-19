<template>
    <div>
     <dv-full-screen-container class="background">
       <dv-decoration-7 class="subtitle sub0">胶囊图</dv-decoration-7>
       <dv-decoration-7 class="subtitle sub1">飞线图</dv-decoration-7>
       <dv-decoration-7 class="subtitle sub2">轮播表</dv-decoration-7>
       <dv-decoration-7 class="subtitle sub3">动态环图</dv-decoration-7>
       <div style="display:inline-flex;justify-content: center;">
             <dv-border-box-7 class="btn btn01">
              <span>图表演示</span>
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
                <span @click="nav(3)">装饰演示</span>
            </dv-border-box-7>
             <dv-border-box-7  class="btn btn04">
               <span @click="nav(4)">其他演示</span> 
            </dv-border-box-7>
           </div>
     <dv-border-box-8 style="position:absolute;top:140px;
     left:20px;width:400px;height:800px;">
         <!--无法在dv-full-screen-container里面获取到dom结构-->
         <chart1></chart1>
     </dv-border-box-8>
     
     <dv-border-box-10 style="position:absolute;top:140px;
     left:500px;width:900px;height:500px;" >
         <chart2></chart2>
     </dv-border-box-10> 
     <dv-border-box-12 style="position:absolute;top:700px;
     left:500px;width:300px;height:240px;">
      <chart3></chart3>
     </dv-border-box-12> 
    
     <dv-border-box-12 style="position:absolute;top:700px;
     left:800px;width:300px;height:240px;">
        
     </dv-border-box-12> 
     <dv-border-box-12 style="position:absolute;top:700px;
     left:1100px;width:300px;height:240px;">
     </dv-border-box-12> 
     <dv-border-box-8 style="position:absolute;top:140px;
     left:1500px;width:400px;height:800px;"
     :reverse="true">
     <chart4></chart4>
     </dv-border-box-8> 
       
   </dv-full-screen-container>
    
    </div>
    
 </template>
 
 <script>
 
 import chart1 from '../components/chart1.vue'
 import chart2 from '../components/chart2.vue'
 import chart3 from '../components/chart3.vue'
 import chart4 from '../components/chart4.vue'
 export default {
   data() {
     return {
     }
   },
   components:{
     chart1,
     chart2,
     chart3,
     chart4
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
   .btn01{

     color:#FFD700;
   }
   .btn02{
     left:10px;
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
   .subtitle{
     position:absolute;
     width:500px;
     height:300px;
     top:-30px;
     left:-25px;
     font-size:30px;
     color:#FFFFFF;
   }
   .sub1{
     position:absolute;
     left:700px;
   }
   .sub2{
     position:absolute;
     left:1450px;
   }
   .sub3{
     position:absolute;
     left:700px;
     top:520px;
   }
 </style>