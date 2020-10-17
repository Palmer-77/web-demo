<template> <div>
<h2>Get all comments</h2>
<p><button v-on:click="logout">Logout</button></p> 
<h4>จาํ นวนcomment {{comments.length}}</h4>
<div v-for="comment in comments" v-bind:key="comment.id"> 
    <p>id: {{ comment.id }}</p>
    <p>blog id: {{ comment.blogId }}</p> 
    <p>comment: {{ comment.comment }}</p> 
    <p>
    <button v-on:click="navigateTo('/comment/'+ comment.id)">ดู comment</button>
    <button v-on:click="editComment('/comment/'+ comment.id)">แก้ไข comment</button>
    <button v-on:click="deleteComment(comment)">ลบขอ้ มูล</button>
    </p>
<hr> </div>
</div>
</template>
<script>
import CommentsService from '@/services/CommentsService'
    export default { 
        data () {
            return { comments: []
        } },
        async created () {
            this.comments = (await CommentsService.index()).data
        }, 
        methods: {
            logout () { 
                this.$store.dispatch('setToken', null) 
                this.$store.dispatch('setComment', null) 
                this.$router.push({name: 'login' })
            },
            navigateTo (route) {
                this.$router.push(route) 
            },
            async editComment (comment) {
                try {
                    await CommentsService.put(comment)
                    this.refreshData() 
                } catch (err) {
                    console.log(err) }
            },
            async deleteComment (comment) { 
                try {
                    await CommentsService.delete(comment)
                    this.refreshData() 
                } catch (err) {
                    console.log(err) }
            },
            async refreshData() {
                this.comments = (await CommentsService.index()).data
            } 
        }
}
</script> 
<style scoped> </style>  