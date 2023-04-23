<template>
  <q-page class="row justify-center items-center full-height">
    <div>
      <h1>Math Operations</h1>
      <operation-component
        operationLabel="Add"
        @operation="handleOperation('add', $event)"
      />
      <operation-component
        operationLabel="Subtract"
        @operation="handleOperation('subtract', $event)"
        class="q-mt-md"
      />
      <operation-component
        operationLabel="Multiply"
        @operation="handleOperation('multiply', $event)"
        class="q-mt-md"
      />
      <operation-component
        operationLabel="Divide"
        @operation="handleOperation('divide', $event)"
        class="q-mt-md"
      />
      <div class="operation-results-wrapper">
        <div class="operation-results-label">Operation Log:</div>
        <operation-results-aggregator :operations="[]" />
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
import OperationResult from 'components/OperationResult.vue';
import OperationResultsAggregator from 'components/OperationResultsAggregator.vue';

export default defineComponent({
  name: 'OperationPage',
  methods: {
    handleOperation(
      operationType: string,
      data: { number1: number; number2: number }
    ) {
      console.log(`Performing ${operationType} operation with data:`, data);
      // You can replace this console.log with a call to your backend service
    },
  },
  components: {
    OperationComponent,
    OperationResultsAggregator,
  },
});
</script>
