<template>
  <div class="row">
                <div class="col-lg-8">
                    <!--section-->
                    <div class="ass1-section__list">
                        <div class="ass1-section">
                            <post-item/>
                            <post-feeling/>
                        </div>
                        <post-comment-add/>
                        <post-comments/>
                    </div>
                </div>
                <div class="col-lg-4">
                    <side-bar/>
                </div>
            </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import PostFeeling from '../components/PostFeeling.vue'
import PostItem from '../components/PostItem.vue'
import PostCommentAdd from '../components/PostCommentAdd.vue'
import PostComments from '../components/PostComments.vue'
export default {
    components: { SideBar, PostItem , PostFeeling, PostCommentAdd,PostComments,},
    name: 'post-detail'
}
</script>

<style>

</style>