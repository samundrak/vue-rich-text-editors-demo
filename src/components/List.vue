<template>
<li>
<input type="text" v-model.sync="title" >
</li>
</template>
<script>
/* eslint-disable */
export default {
    props: {
        index: Number,
        item: Object,
        onTitleChange: Function,
    },
    data() {
        return {
        }
    },
    computed: {
        title: {
            get() {
                return this.item.title;
            },
            set(value) {
            if(value.length > 5) {
              this.title = this.item.title;
              return false;
            }
            this.onTitleChange(value, this.index);
            },
        },
    }
}
</script>