<template>
  <div class="operation-results-aggregator">
    <operation-result
      v-for="(operation, index) in records"
      :key="index"
      :operationType="operation.type"
      :result="operation.response"
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
    records: {
      type: Array<{
        type: string;
        operation_id: string;
        response: number;
      }>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.operation-results-aggregator {
  max-height: 200px;
  overflow-y: auto;
}
</style>
