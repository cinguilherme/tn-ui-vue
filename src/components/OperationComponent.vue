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
  setup(props, { emit }) {
    const number1 = ref('');
    const number2 = ref('');

    function performOperation(evt: any) {
      const operationData = {
        type: props.operationLabel,
        number1: number1.value,
        number2: number2.value,
      };

      console.log('operationData', operationData);

      emit('operation', operationData);
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
