<script setup lang="ts">
import {ref, watch} from 'vue'
import CharForm from "./CharForm.vue";
import PreviewWordList from "./PreviewWordList.vue";

const noListChar = ref('')
const listChar = ref<{
  value?:string;
  geo?:string;
  noGeo?:string;
}[]>([
  {},{},{},{},{}
])
watch(listChar, () => listChar.value = listChar.value.slice(0, 5))
</script>

<template>
  <div>
    <span> Буквы которых нет </span>
    <input type="text" v-model="noListChar">
  </div>
  <div class="charWrapForm">
    <char-form v-for="(char, idx) in  listChar" :key="idx" :modal-value="char" @update:modalValue="listChar[idx] = $event"/>
  </div>
  <div class="preview">
    <PreviewWordList :filter="listChar" :noListChar="noListChar"/>
  </div>
</template>

<style scoped>
.charWrapForm {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}

</style>
