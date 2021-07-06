<template>
  <div class="makeTask">
    <h1>新しいタスク作成</h1>
    <div>
      <p>新しいタスク<input v-model="item"></p>
      <p>いつまで month : <input v-model="monthV"> Date : <input v-model="dateV"> Year : <input v-model="yearV"></p>
      <button v-on:click="addTodo">Add</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore';

export default {
  name: 'todoAdd',
  data: function () {
    return {
      db: null,
      item: '',
      dateTime: '',
      monthV: '',
      dateV: '',
      yearV: ''
    }
  },
  created: function() {
    this.db = firebase.firestore()
  },
  methods: {
    addTodo: function () {
      const _this = this
      _this.dateTime = _this.monthV + " " + _this.dateV + ", " + _this.yearV
      // todos コレクションにドキュメントを追加
      this.db.collection('todos').add({
        item: _this.item,
        index: 1,
        checkBox: false,
        // よくわからんけどfirestore()つけるとエラー吐く
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        limitAt: firebase.firestore.Timestamp.fromDate(new Date(_this.dateTime))
      })
      .then(function () {
        // 追加に成功したら、name を空にする
        _this.item = ''
        _this.dateTime = ''
        _this.dateV = ''
        _this.monthV = ''
        _this.yearV = ''
      })
      .catch(function () {
        // エラー時の処理
      })
    }
  }
}
</script>

<style>
.makeTask{
  width: 80%;
  text-align: center;
  margin: 0 auto;
}
</style>