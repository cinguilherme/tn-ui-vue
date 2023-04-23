<template>
  <q-page class="row justify-center items-center full-height">
    <div>
      <h1>Math Operations</h1>

      <operation-component
        v-for="(operation, index) in operations"
        :key="index"
        :operationLabel="operation.operation"
        @operation="handleOperation($event)"
      />

      <div class="operation-results-wrapper">
        <div class="operation-results-label">Operation Log:</div>

        <operation-results-aggregator :operations="logs" />
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.operations-container {
  display: inline-grid;
  gap: 1rem;
}

.operation-results-wrapper {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  margin-top: 1rem;
  width: 100%;
}

.operation-results-label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import OperationComponent from 'components/OperationComponent.vue';
import OperationResultsAggregator from 'components/OperationResultsAggregator.vue';
import { useOperationsStore } from '../stores/operations-store';

export default defineComponent({
  name: 'OperationPage',
  methods: {},
  setup() {
    const operations = [
      { operation: 'add' },
      { operation: 'subtract' },
      { operation: 'multiply' },
      { operation: 'divide' },
    ];
    const operationsStore = useOperationsStore();

    console.log(
      'operationsStore on Operations page',
      operationsStore.$state.operationsLog
    );

    const handleOperation = (operation: {
      type: string;
      number1: number;
      number2: number;
    }) => {
      console.log('operationData on Operations page', operation);

      operationsStore.addOperation({
        ...operation,
        result: 0,
        timestamp: new Date().getTime(),
      });
    };

    const logs = operationsStore.$state.operationsLog;
    return {
      operations,
      handleOperation,
      operationsStore,
      logs,
    };
  },
  components: {
    OperationComponent,
    OperationResultsAggregator,
  },
});
</script>
