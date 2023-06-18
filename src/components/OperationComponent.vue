<template>
  <div class="operation-component">
    <q-input
      class="input-container"
      v-if="shouldShowNumber1Input()"
      v-model.number="number1"
      type="number"
      filled
    />
    <div v-else class="input-placeholder"></div>

    <q-input
      class="input-container"
      v-if="shouldShowNumber2Input()"
      v-model.number="number2"
      type="number"
      filled
    />
    <div v-else class="input-placeholder"></div>

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
.input-container {
  display: flex;
  box-shadow: 0 0 0 1px #d6d6d6;
  align-items: center;
}

.input-container .q-input {
  width: 100%;
}
.input-placeholder {
  width: 100%;
  height: 36px;
  border: 1px solid #8e8e8e;
  border-radius: 3px;
  box-sizing: border-box;
}
.operation-component .q-input,
.operation-component .q-btn {
  width: 100%;
}
.placeholder {
  border: 1px solid #c4c4c4;
  height: 40px;
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
    id: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const number1 = ref(0);
    const number2 = ref(0);

    function shouldShowNumber1Input(): boolean {
      return (
        props.operationLabel !== 'square_root' &&
        props.operationLabel !== 'random_string'
      );
    }

    function shouldShowNumber2Input(): boolean {
      return props.operationLabel !== 'random_string';
    }

    function performOperation(evt: any) {
      const operationData = {
        id: props.id,
        type: props.operationLabel,
        number1: number1.value,
        number2: number2.value,
      };

      console.log('operationData', operationData);

      emit('operation', operationData);
    }

    return {
      number1,
      number2,
      performOperation,
      shouldShowNumber1Input,
      shouldShowNumber2Input,
    };
  },
});
</script>

<style scoped>
.operation-component {
  display: flex;
  align-items: center;
}
</style>
