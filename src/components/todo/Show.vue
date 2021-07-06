<template>
  <div>
    <h1 id="title">タスクリストを表示する部分</h1>
    <div>
      <!-- <button @click="showTodo()">fecth</button> -->
      <!-- IDだけ格納したものとデータのみ格納したもの -->
      <!-- <h4>{{allDataID}}</h4>
      <h4>{{allData}}</h4> -->
      <div id="table">
        <table class="table" border=1>
          <thead>
            <tr>
              <th>作成日時</th>
              <th>締切</th>
              <th>内容</th>
              <th></th>
              <th>状態</th>
              <th></th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            <!-- vueのfor文は:keyを入れないとダメらしい -->
            <tr v-for="(todo,key) in todos" :key="todo.id">
              <td>{{todo.createdAt}}</td>
              <td>{{todo.limitAt}}</td>
              <td>{{todo.item}}</td>
              <td><input type="checkbox" v-model="todo.checkBox"></td>
              <td>{{todo.checkBox}}</td>
              <td><button class="destroy" @click="removeTodo(todo,key)">delete</button></td>
              <td>{{key}}</td>
            </tr>
          </tbody>
        </table>
        <!-- <h1>これが本当のtodoだ！！</h1>
        <h4>{{todos}}</h4> -->
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore';
import {format} from 'date-fns'

export default {
  name: 'Show',
  data: function () {
    return {
      db: firebase.firestore(),
      item: '',
      todos: [],
      allData: [],
      allDataID: [],
    }
  },
  // リアルタイムでの表示 mountedで定義する
  //onSnapshot重要
  mounted(){
    //DOM作成前に実行される
    this.db.collection('todos').onSnapshot(snapshot => {
      console.log(snapshot)
      this.showTodo();
    })
  },
  created: function() {
    // DOM作成後に実行される
    // this.db = firebase.firestore()
    this.todos = this.db.collection("todos").get().then(snapshot => {
      snapshot.forEach(doc => {
        this.allDataID.push(doc.id)
        this.allData.push(doc.data())
      })
    })
  },
  methods: {
    showTodo: function () {
      const _this = this
      const tempObj = {}
      // DBのなかのtodosコレクションを取得
      // 作成日時で昇順表示
      _this.todos = this.db.collection("todos").orderBy('createdAt','asc').get().then(snapshot => {
        this.allDataID = []
        this.allData = []
        snapshot.forEach(doc => {
          tempObj[doc.id] = doc.data()
          // そのドキュメントのcreatedAtの値をJSのDateクラスに変換(整形)
          tempObj[doc.id].createdAt = format(doc.data().createdAt.toDate(), 'yyyy年MM月dd日')
          tempObj[doc.id].limitAt = format(doc.data().limitAt.toDate(), 'yyyy年MM月dd日')
          this.allData.push(doc.data())
          this.allDataID.push(doc.id)
        })
        this.todos = tempObj
      })
    },
    removeTodo(todo,id){
      if(todo.checkBox === true){
        this.db.collection('todos').doc(id).delete()
      }else {
        alert("そのタスクは完了していません!")
      }
    }
  },
}
</script>
<style>
td {
  padding: 0 5px;
}
#title {
  text-align: center;
}
</style>