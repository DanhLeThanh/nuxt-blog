<template>
  <div id="home">
    <articles>
      <banner />
    </articles>

    <about />

    <subscribe />

    <social />
  </div>
</template>

<script>
export default {
  layout: "blog",
  name: 'Home',

  components: {
    About: () => import('@/components/blogs/home/About'),
    Articles: () => import('@/components/blogs/home/Articles'),
    Banner: () => import('@/components/blogs/home/Banner'),
    Social: () => import('@/components/blogs/home/Social'),
    Subscribe: () => import('@/components/blogs/home/Subscribe')
  }
};
</script>
