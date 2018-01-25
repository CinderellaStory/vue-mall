<template>
  <div class="home">
    <!--搜索框区-->
    <HomeHeader></HomeHeader>
    <!--轮播图区-->
    <HomeBanner></HomeBanner>
    <!--类目导航区-->
    <HomeNavbar></HomeNavbar>
    <!--首页内容区-->
    <HomeContent></HomeContent>
  </div>
</template>

<script>
import HomeHeader from './HomeHeader.vue'
import HomeBanner from './HomeBanner.vue'
import HomeNavbar from './HomeNavbar.vue'
import HomeContent from './HomeContent.vue'

export default {
  components: {
    HomeHeader,HomeBanner,HomeNavbar,HomeContent
  }
}
</script>