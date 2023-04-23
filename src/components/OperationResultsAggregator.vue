<template>
  <div class="operation-results-aggregator">
    <operation-result
      v-for="(operation, index) in operations"
      :key="index"
      :operationType="operation.operationType"
      :number1="operation.number1"
      :number2="operation.number2"
      :result="operation.result"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OperationResult from './OperationResult.vue';

export default defineComponent({
  name: 'OperationResultsAggregator',
  components: {
    OperationResult,
  },
  props: {
    operations: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped>
.operation-results-aggregator {
  max-height: 200px;
  overflow-y: auto;
}
</style>
