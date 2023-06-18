<template>
  <q-page class="row justify-center items-center full-height">
    <div class="operation-page">

      <q-toolbar>
        <div class="col">
          <h1>Math Operations</h1>
        </div>
        <div class="col-auto" style="margin: 10px; padding: 10px;">
          <logged-user
          @logout-result="handleLogout"/>
        </div>


      </q-toolbar>

      <operation-component
        v-for="(operation, index) in operations"
        :key="index"
        :operationLabel="operation.operation"
        :id="operation.id"
        @operation="handleOperation($event)"
        class="operation-component"
      />

      <div class="operation-results-wrapper">
        <div class="operation-results-label">Operation Log:</div>

        <operation-results-aggregator :records="records"/>
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
import {defineComponent, onMounted, Ref, ref} from 'vue';
import OperationComponent from 'components/OperationComponent.vue';
import OperationResultsAggregator from 'components/OperationResultsAggregator.vue';
import LoggedUser from 'components/LoggedUser.vue';
import {useOperationsStore} from 'stores/operations-store';
import {useUserStore} from 'stores/user-store';
import {createRecord, fetchOperations, fetchRecords, Record} from 'src/services/apiServices';

export default defineComponent({
  name: 'OperationPage',
  methods: {
    handleLogout() {
      console.log('logout handle go to login')
      this.$router.push({name: 'Login'});
    },
  },

  setup() {
    const operations: Ref<Array<{ operation: string; id: string }>> = ref([]);
    const records: Ref<Array<Record>> = ref([]);
    const operationsStore = useOperationsStore();
    const userStore = useUserStore();

    onMounted(async () => {
      try {
        const ops = await fetchOperations();
        operations.value = ops.map((op) => {
          return {operation: op.type, id: op.id};
        });

        records.value = await fetchRecords();

      } catch (error) {
        console.log('error', error);
      }
    });

    console.log(
      'operationsStore on Operations page',
      operationsStore.$state.operationsLog
    );

    const handleOperation = async (operation: {
      id: string;
      type: string;
      number1: number;
      number2: number;
    }) => {
      console.log('operationData on Operations page', operation);

      // send the POST request to API to create the record of the operation
      // the respose successful is a sign we can go ahead and refetch the records

      const res = await createRecord({
        operation_id: operation.id,
        input1: operation.number1,
        input2: operation.number2,
      });

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
      userStore,
    };
  },
  components: {
    OperationComponent,
    OperationResultsAggregator,
    LoggedUser,
  },
});
</script>
