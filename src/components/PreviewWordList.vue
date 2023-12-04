<template>
  <div class="PreviewWordList">
    <div v-for="(word, idx) in resultWord" :key="idx">
      {{word}}
    </div>
  </div>
</template>

<script setup lang="ts">
import generalWord from '../data.json'
import {ref, watchEffect} from "vue";
import {filterWordList} from "./filterWordList.ts";

interface IPValue {
  value?:string;
  geo?:string;
  noGeo?:string;
}
const props = defineProps<{
  filter: IPValue[];
  noListChar: string;
}>();
const resultWord = ref<string[]>([]);
watchEffect(() => {
  resultWord.value = filterWordList(generalWord,props.filter,props.noListChar )
})
</script>

<style scoped>
.PreviewWordList {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
</style>