<template>
    <v-app>
        <core-toolbar />
        <core-drawer />
        <core-view />
        <core-footer />
        <core-cta />
    </v-app>
</template>

<script>
export default {
  name: "Blog",
  components: {
    CoreCta: () => import("@/components/blogs/core/Cta"),
    CoreDrawer: () => import("@/components/blogs/core/Drawer"),
    CoreFooter: () => import("@/components/blogs/core/Footer"),
    CoreToolbar: () => import("@/components/blogs/core/Toolbar"),
    CoreView: () => import("@/components/blogs/core/View")
  },
  data() {
    return {
      //
    };
  }
};
</script>