<template>
  <div class="hello">
    <h2>Rich text editors demo</h2>
    <ul>
      <li>
      <router-link to="/quill">quill</router-link>
      </li>
      <li>
      <router-link to="/medium">Medium</router-link>
      </li>
      <li>
      <router-link to="/trumbowyg">Trumbowyg</router-link>
      </li>
      <li>
      <router-link to="/froala">Froala</router-link>
      </li>
       <li>
      <router-link to="/wysiwyg">Wysiwyg</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {};
    },
    components: {},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
