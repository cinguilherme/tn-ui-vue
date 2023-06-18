<template>
  <div class="operation-results-aggregator">
    <operation-result
      v-for="(record, index) in records"
      :key="index"
      :record="record"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OperationResult from './OperationResult.vue';
import { Record } from '../services/apiServices';

export default defineComponent({
  name: 'OperationResultsAggregator',
  components: {
    OperationResult,
  },
  props: {
    records: {
      type: Array<Record>,
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
