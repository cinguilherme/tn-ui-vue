<template>
  <div class="operation-result">
    {{ record.operation_desc }}: {{ record.operation_inputs }} result => {{ record.operation_response }} operation cost ${{
      record.amount }} credits.

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Record } from '../services/apiServices';

export default defineComponent({
  name: 'OperationResult',
  props: {
    record: {
      type: Object as () => Record,
      required: true,
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
