<template>
    <wysiwyg v-model="myHTML" />
</template>


<script>
/* eslint-disable */
    import Vue from 'vue';
    import wysiwyg from "vue-wysiwyg";
    import "vue-wysiwyg/dist/vueWysiwyg.css";
    
    Vue.use(wysiwyg, {}); // config is optional. more below
    
    export default {
    
        data() {
            return {
                myHTML: 'hello'
            }
        }
    }
</script>