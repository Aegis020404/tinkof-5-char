<template>
  <div class="charForm">
    <div>
    </div>
    <div>
      <input v-model="modal.value" maxlength="1"  class="inputChar">
    </div>
    <div>

      <input v-model="modal.geo" placeholder="" class="inputCharList" :disabled="!modal.value">
    </div>
    <div>
      <input v-model="modal.noGeo" placeholder="" class="inputCharList" :disabled="!modal.value">
    </div>
  </div>
</template>


<script setup lang="ts">
import {reactive, watch} from "vue";

interface IPValue {
  value?: string;
  geo?: string;
  noGeo?: string;
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
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.inputChar {
  background: white;
  border: none;
  border-radius: 50px;
  color: black;
  font-weight: 700;
  width: 20px;
  height: 20px;
  padding: 2px;
}
.inputCharList {
  width: 50px;
}
</style>