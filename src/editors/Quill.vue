<template>
<div>
    <h3>Quill</h3>
     <quillEditor v-model="content" ref="myQuillEditor" :options="editorOption">
    </quillEditor>
</div>
</template>
<script>
  /* eslint-disable */
  import {
    quillEditor
  } from 'vue-quill-editor'
  
  
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        editorOption: {
  
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'], // toggled buttons
              ['blockquote', 'code-block'],
  
              [{
                'header': 1
              }, {
                'header': 2
              }], // custom button values
              [{
                'list': 'ordered'
              }, {
                'list': 'bullet'
              }],
              [{
                'script': 'sub'
              }, {
                'script': 'super'
              }], // superscript/subscript
              [{
                'indent': '-1'
              }, {
                'indent': '+1'
              }], // outdent/indent
              [{
                'direction': 'rtl'
              }], // text direction
  
              [{
                'size': ['small', false, 'large', 'huge']
              }], // custom dropdown
              [{
                'header': [1, 2, 3, 4, 5, 6, false]
              }],
  
              [{
                'color': []
              }, {
                'background': []
              }], // dropdown with defaults from theme
              [{
                'font': []
              }],
              [{
                'align': []
              }],
  
              ['clean'] // remove formatting button
            ],
          }
        },
        content: 'samundra',
      };
    },
    components: {
      quillEditor,
    },
  };
</script>