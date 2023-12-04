<template>
  <div class="charForm">
  <div>
    <input v-model="modal.value" maxlength="1" style="max-width: 50px">

  </div>
      <span> {{ modalValue?.value }}</span>
    <div>
      Где стоит
      <input  v-model="modal.geo">
    </div>
    <div>
      Где не стоит
      <input  v-model="modal.noGeo">
    </div>
  </div>
</template>


<script setup lang="ts">
import {reactive, watch} from "vue";

interface IPValue {
    value?:string;
    geo?:string;
    noGeo?:string;
}
const props = defineProps<{
  modalValue: IPValue
}>();
const emits = defineEmits(['update:modalValue'])
const modal = reactive<IPValue>(props.modalValue)

watch(modal, () => {
  emits('update:modalValue', modal)
})
</script>

<style scoped>
.charForm {
  border: 1px solid black;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>