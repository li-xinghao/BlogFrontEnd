<template>
  <div class="home">
    <div class="box">🔔 {{billboard.content}}</div>
    <div class="columns">
      <div class="column is-three-quarters">
        <PostList></PostList>
      </div>
      <div class="column">
        <Card></Card>
      </div>
    </div>
  </div>
</template>

<script>
import {getbillboard} from '@/api/billborad'
import PostList from '@/views/post/Post'
import Card from '@/views/card/Card'
export default {
  name: 'HomeView',
  components:{PostList,Card},
  data(){
    return{
      billboard:{
        content:""
      }
    }
  },
  methods:{
    async fetchbillboard(){
      getbillboard().then((resp)=>{
        console.log(resp);
        this.billboard.content = resp.data.content
      })
    }
  },
  created(){
    this.fetchbillboard();
  }
}
</script>
