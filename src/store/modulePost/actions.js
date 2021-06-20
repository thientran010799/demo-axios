import axios_instance from "../../plugins/axios"
import { PAGE_SIZE, CURRENT_PAGE } from '../../contanst/index'
export default {
    async getListPostHasPaging({ commit }, { pagesize = PAGE_SIZE, currPage = CURRENT_PAGE, tagIndex = null }) {
        try {
            commit('setLoading', true);
            var config = {
                params: {
                    pagesize,
                    currPage
                }
            }
            if (tagIndex) {
                config.params.tagIndex = tagIndex;
                var result = await axios_instance.get('/post/getListByCategory.php', config)
            } else {
                var result = await axios_instance.get('post/getListPagination.php', config)
                    // var result2 = await axios_instance.get('post/getListPagination.php', config)
                    // console.log('result', result)
                    // console.log('result2', result2)
            }
            commit('setLoading', false);
            if (result.data && result.data.status == 200) {
                //commit
                if (currPage === 1) commit('SET_LIST_POSTS', result.data.posts)
                else if (currPage > 1) commit('PUSH_LIST_POSTS', result.data.posts)
            }

        } catch (error) {
            console.log('error', error)
        }
    },
}