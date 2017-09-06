<template>
<div>
     medium
   <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.1.1/gh-fork-ribbon.min.css">
    <link rel="stylesheet" href="https://yabwe.github.io/medium-editor/screen.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/medium-editor/5.22.1/css/medium-editor.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/medium-editor/5.22.1/css/themes/flat.css">
      <medium-editor text='myText' :options='{}' custom-tag='h2'></medium-editor>
    </div>
</template>

<script>
    /* eslint-disable */
    import editor from 'vue2-medium-editor'
    
    export default {
        components: {
            'medium-editor': editor,
        },
    };
</script>