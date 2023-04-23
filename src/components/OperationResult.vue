<template>
  <div class="operation-result">
    {{ operationType }}: {{ number1 }} {{ operationSymbol }} {{ number2 }} =
    {{ result }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OperationResult',
  props: {
    operationType: {
      type: String,
      required: true,
    },
    number1: {
      type: Number,
      required: true,
    },
    number2: {
      type: Number,
      required: true,
    },
    result: {
      type: Number,
      required: true,
    },
  },
  computed: {
    operationSymbol(): string {
      switch (this.operationType) {
        case 'add':
          return '+';
        case 'subtract':
          return '-';
        case 'multiply':
          return '×';
        case 'divide':
          return '÷';
        default:
          return '';
      }
    },
  },
});
</script>

<style scoped>
.operation-result {
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
}
</style>
