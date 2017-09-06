<template>
    <div>
        <trumbowyg v-model="content"></trumbowyg>
    </div>
</template>

<script>
    /* eslint-disable */
    // Import this component
    import trumbowyg from 'vue-trumbowyg';
    
    // Import editor css
    import 'trumbowyg/dist/ui/trumbowyg.css';
    
    export default {
        data() {
            return {
                content: '',
            }
        },
        components: {
            trumbowyg
        }
    }
</script>