<template>
<ul>
<List v-for="(item, index) in items"
    :item="item"
    :index="index"
    :onTitleChange="onTitleChange"
>
</List>
</ul>
</template>
<script>
/* eslint-disable */
import List from './List.vue';

export default {
    data() {
        return {
            items: [
                { title: 'test', description: ''}
            ],
        }
    },
    components: {
        List,
    },
    methods: {
        onTitleChange(value, index) {
            this.items[index].title = value;
        }
    }
}
</script>