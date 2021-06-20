<template>
    <div class="ass1-section__content">
        <p>{{post.post_content}}</p>
        <div class="ass1-section__image">
            <router-link :to="{name: 'post-detail', params:{id:post.PID}}">
                <img :src="`https://img2.thuthuatphanmem.vn/uploads/2018/12/05/hinh-anh-nhung-chau-cay-canh-dep_121227955.jpg`" :alt="post.post_content">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'post-item-content',
    props:{
        post: Object
    },
    computed:{
        getAvatar(){
            // if(this.post.profilepicture = "")
            return this.post.profilepicture ? this.post.profilepicture : 'https://image.shutterstock.com/image-vector/cartoon-avata-icon-man-face-260nw-1247925403.jpg'
        }
    }
}
</script>

<style>

</style>