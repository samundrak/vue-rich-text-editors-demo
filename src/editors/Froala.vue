<template>
    <div>
        <h2>Froala</h2>
        <froala :tag="'textarea'" :config="config" v-model="model"></froala>
    </div>
</template>

<script>
    /* eslint-disable */
    import Froala from 'vue-froala-wysiwyg';
    import Vue from 'vue';
    Vue.use(Froala)
    
    // Require Froala Editor js file.
    require('froala-editor/js/froala_editor.pkgd.min')
    
    // Require Froala Editor css files.
    require('froala-editor/css/froala_editor.pkgd.min.css')
    require('font-awesome/css/font-awesome.css')
    require('froala-editor/css/froala_style.min.css')
    
    export default {
        name: 'app',
        data() {
            return {
                config: {
                    events: {
                        'froalaEditor.initialized': function() {
                            console.log('initialized')
                        }
                    }
                },
                model: 'Edit Your Content Here!'
            }
        },
        components: {},
    }
</script>