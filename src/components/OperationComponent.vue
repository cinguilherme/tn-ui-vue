<template>
  <div class="operation-component">
    <q-input v-model.number="number1" type="number" label="Number 1" filled />

    <q-input
      v-model.number="number2"
      type="number"
      label="Number 2"
      class="q-ml-md"
      filled
    />

    <q-btn
      @click="performOperation"
      :label="operationLabel"
      color="primary"
      class="q-ml-md"
    />
  </div>
</template>

<style scoped>
.operation-component {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

.operation-component .q-input,
.operation-component .q-btn {
  width: 100%;
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'OperationComponent',
  props: {
    operationLabel: {
      type: String,
      required: true,
    },
  },
  setup() {
    const number1 = ref(0);
    const number2 = ref(0);

    function performOperation() {
      // Emit the 'operation' event with the two input numbers
      this.$emit('operation', {
        number1: number1.value,
        number2: number2.value,
      });
    }

    return { number1, number2, performOperation };
  },
});
</script>

<style scoped>
.operation-component {
  display: flex;
  align-items: center;
}
</style>
