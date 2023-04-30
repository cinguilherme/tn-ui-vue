<template>
  <div class="operation-result">
    {{ operationType }}: {{ operationSymbol }} result => {{ result }}
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
    result: {
      type: Number,
      required: true,
    },
  },
  computed: {
    operationSymbol(): string {
      switch (this.operationType) {
        case 'addition':
          return '+';
        case 'subtraction':
          return '-';
        case 'multiplication':
          return '×';
        case 'division':
          return '÷';
        case 'square_root':
          return '√';
        case 'random_string':
          return '🎲';
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
