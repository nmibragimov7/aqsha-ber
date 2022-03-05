<template>
  <div class='row '>
    <template v-for='(card, index) in cards'>
      <div :key='index' class='col-12 col-lg-4'>
        <Card
              classes='block'>
          <p>{{card.title}}</p>
          <p>{{card.description}}</p>
        </Card>
      </div>
    </template>
  </div>
</template>

<script>
import {cards} from '../fixstures/cards';
import Card from '../components/common/Card/Card'
export default {
  layout: 'index',
  components: { Card },
  data() {
    return {
      cards
    }
  }
}
</script>

<style lang='scss' scoped>
//.block {
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//}
</style>
