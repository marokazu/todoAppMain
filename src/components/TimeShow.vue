<template>
  <div class="tokei">
    <h2>{{date}}</h2>
    <h2>{{time}}</h2>
  </div>
</template>

<script>
export default {
  name: 'TimeShow',
  props: {
    msg: String
  },
  data(){
    return {
      date: '',
      time: '',
      timerID: null,
      week: ["日","月","火","水","木","金","土"]
    }
  },
  mounted() {
    this.timerID = setInterval(this.updateTime,1000)
  },
  methods: {
    updateTime(){
      let currentdate = new Date()
      this.time = currentdate.getHours() + ':' + currentdate.getMinutes() + ':' + currentdate.getSeconds()
      this.date = currentdate.getFullYear() + '年' + (parseFloat(currentdate.getMonth())+1) + '月' + currentdate.getDate() + '日(' + this.week[currentdate.getDay()] + ")"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tokei {
  text-align: center;
}
</style>
