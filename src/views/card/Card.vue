<template>
  <section>
    <!--是否登录-->
    <login-welcome />

    <!--每日一句-->
    <tip-card />

    <!--热门标签-->
    <PromotionCard />
  </section>
</template>

<script>
import TipCard from '@/views/card/Tip'
import PromotionCard from '@/views/card/Promotion'
import LoginWelcome from '@/views/card/LoginWelcome'
export default {
  name: 'CardBar',
  components: { LoginWelcome, PromotionCard, TipCard }
}
</script>

<style scoped>
</style>