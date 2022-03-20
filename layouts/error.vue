<template>
  <PageWrap title="Страница не найдена!">
  </PageWrap>
</template>


<script>
import PageWrap from "../components/common/PageWrap";
export default {
  components: {PageWrap},
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
