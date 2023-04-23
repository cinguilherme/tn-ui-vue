import { defineStore } from 'pinia';

export interface Operation {
  type: string;
  number1: number;
  number2: number;
  result: number;
  timestamp: number;
}

const sampleOperation = {
  type: 'add',
  number1: 1,
  number2: 2,
  result: 3,
  timestamp: Date.now(),
};

const emptyOperation: Operation[] = [sampleOperation];

export const useOperationsStore = defineStore('operations', {
  state: () => ({
    operationsLog: emptyOperation,
  }),

  actions: {
    addOperation(operationData: Operation) {
      this.operationsLog.push(operationData);
    },
  },
});
