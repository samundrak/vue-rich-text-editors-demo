/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/Hello";
import Quill from "../editors/Quill.vue";
import Medium from "../editors/Medium";
import Trumbowyg from "../editors/Trumbowyg";
import Froala from "../editors/Froala";
import Wysiwyg from "../editors/Wysiwyg";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello,
      children: [
        {
          path: "/quill",
          component: Quill,
          name: "quill"
        },
        {
          path: "/medium",
          component: Medium,
          name: "medium"
        },
        {
          path: "/trumbowyg",
          component: Trumbowyg,
          name: "trumbowyg"
        },
         {
          path: "/froala",
          component: Froala,
          name: "froala"
        },
         {
          path: "/wysiwyg",
          component: Wysiwyg,
          name: "wysiwyg"
        }
      ]
    }
  ]
});
