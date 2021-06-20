<template>
    <div class="ass1-section__head">
        <router-link :to="getLinkUser" class="ass1-section__avatar ass1-avatar"><img :src="getAvatar" alt=""></router-link>
        <div>
            <router-link :to="getLinkUser" href="#" class="ass1-section__name">{{post.fullname}}</router-link>
            <span class="ass1-section__passed">{{bgetTimePost}}</span>
        </div>
        <router-link :to="getLinkUser" href="#" class="ass1-section__link ass1-btn-icon"><i class="icon-Link"></i></router-link>
    </div>
</template>

<script>
// import moment from 'moment'
import {getTimePost} from '../plugins/moment'
export default {
 name: 'post-item-header',
 props:{
     post: Object
 },
 computed:{
     getAvatar(){
            // if(this.post.profilepicture = "")
            return this.post.profilepicture ? this.post.profilepicture : '/dist/images/avatar-01.png'
    },
    getLinkUser(){
        return {name:'user-page', params:{id: this.post.USERID}}
    },
    bgetTimePost(){
        // moment.locale('vi')
        // return moment(this.post.time_added).fromNow(); 
        return getTimePost(this.post.time_added)
    }
 }
}
</script>

<style>

</style>