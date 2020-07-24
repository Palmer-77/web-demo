<template> <div>
<h1>Show User</h1>
<p>User ID: {{ userId }}</p> </div>
</template> <script>
export default {
  data () {
    return {
userId: 0 }
  },
  created () {
this.userId = this.$route.params.userId }
}
</script> <style scoped>
</style>