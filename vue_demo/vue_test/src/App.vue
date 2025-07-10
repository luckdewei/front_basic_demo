<template>
  <div>Main</div>
  <div>{{ obj.obj2.age }}</div>
    <div>{{ obj.arr[0] }}</div>
  <button @click="add">add +</button>
</template>

<script setup>
import { reactive, ref } from 'vue'

const obj = reactive({
  name: 'Vue 3.0',
  age: 18, 
  arr: [1, 2, 3],
  obj2: {
    name: 'React',
    age: 20
  }
})

const g = ref({
  name: 'gg', 
  age: 123,
  arr: [1, 2, 3],
  object: {
    name: 'gg2', 
    age: 123
  }
})

obj.arr.push(4)


const add = () => {
  obj.obj2.age++
  obj.arr[0] = obj.obj2.age
}

console.log('obj', obj)

console.log('g', g)

</script>
