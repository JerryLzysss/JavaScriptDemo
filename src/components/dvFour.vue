<template>
  <div>
   <dv-full-screen-container class="background">
    
     <div style="display:inline-flex;justify-content: center;">
           <dv-border-box-7 class="btn btn01">
            <span  @click="nav(1)">图表演示</span>
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
         <div class="other">
          <dv-border-box-1>本来是演示Chart的
            <div>发觉还是echart好用</div>
          </dv-border-box-1>
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
 }
 .btn03{
   left:30px;
 }
 .btn04{
   left:40px;
   color:#FFD700;
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
.other{
  position:absolute;
  top:150px;
  left:450px;
  width:1000px;
  height:800px;
  font-size:64px;
  color:gold;
  line-height:400px;
}

</style>