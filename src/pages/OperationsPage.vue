<template>
  <q-page class="row justify-center items-center full-height">
    <div class="operation-page">
      <h1>Math Operations</h1>

      <operation-component
        v-for="(operation, index) in operations"
        :key="index"
        :operationLabel="operation.operation"
        @operation="handleOperation($event)"
        class="operation-component"
      />

      <div class="operation-results-wrapper">
        <div class="operation-results-label">Operation Log:</div>

        <operation-results-aggregator :records="records" />
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.operations-page {
  background-color: bg-color;
}

.operations-container {
  display: inline-grid;
  gap: 1rem;
}

.operation-component {
  margin-bottom: 1rem;
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
import { Ref, defineComponent, onMounted, ref } from 'vue';
import OperationComponent from 'components/OperationComponent.vue';
import OperationResultsAggregator from 'components/OperationResultsAggregator.vue';
import { useOperationsStore } from '../stores/operations-store';
import {
  fetchOperationById,
  fetchOperations,
  fetchRecords,
} from 'src/services/apiServices';

export default defineComponent({
  name: 'OperationPage',
  methods: {},

  setup() {
    const operations: Ref<Array<{ operation: string }>> = ref([]);
    const records: Ref<Array<any>> = ref([]);
    const operationsStore = useOperationsStore();

    onMounted(async () => {
      try {
        const ops = await fetchOperations();
        operations.value = ops.map((op) => {
          return { operation: op.type };
        });

        const recs = await fetchRecords();
        const opsx = (
          await Promise.all(
            recs.map((r) => r.operation_id).map((id) => fetchOperationById(id))
          )
        ).filter((o) => o);

        const atualRecs = recs.map((r) => {
          const op = opsx.find((o) => o?.id === r.operation_id);
          const rr = { ...r, type: op?.type };
          return rr;
        });
        console.log('recs', atualRecs);

        records.value = atualRecs;
      } catch (error) {
        console.log('error', error);
      }
    });

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

      // send the POST request to API to create the record of the operation
      // the respose successful is a sign we can go ahead and refetch the records

      operationsStore.addOperation({
        ...operation,
        result: 0,
        timestamp: new Date().getTime(),
      });
    };

    return {
      operations,
      records,
      handleOperation,
      operationsStore,
    };
  },
  components: {
    OperationComponent,
    OperationResultsAggregator,
  },
});
</script>
