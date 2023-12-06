<script setup lang="ts">
import {ref, watch} from 'vue'
import CharForm from "./CharForm.vue";
import PreviewWordList from "./PreviewWordList.vue";

const noListChar = ref('')
const listChar = ref<{
  value?:string;
  geo?:string;
  noGeo?:string;
  id:number;
}[]>([
  {},{},{},{},{}
].map((_,id) =>({id})))
watch(listChar, () => {
  listChar.value.sort((a,b) => {
    return Math.min( ...(a.geo?.split('').map(el => +el) ?? [Infinity])) -  Math.min( ...(b.geo?.split('').map(el => +el) ?? [Infinity]))
  })
},{
  deep:true
})
</script>

<template>
  <div class="settings">
    <div>
      <input type="text" v-model="noListChar" placeholder="Буквы которых нет">
      <div>Где стоит буква</div>
      <div>Где не стоит буква</div>
    </div>
    <div class="charWrapForm">
      <char-form v-for="(char,idx) in  listChar" :key="char.id" :modal-value="char" @update:modalValue="listChar[idx] = $event"/>
    </div>
  </div>
  <div class="preview">
    <PreviewWordList :filter="listChar" :noListChar="noListChar"/>
  </div>
</template>

<style scoped>
.charWrapForm {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.settings {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
