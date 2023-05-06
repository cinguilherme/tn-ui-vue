import { shallowMount } from '@vue/test-utils';
import { defineComponent } from 'vue';

import OperationComponentRaw from '@/components/OperationComponent.vue';

const OperationComponent = defineComponent(OperationComponentRaw);

describe('OperationComponent.vue', () => {
  it('renders the operation prop', () => {
    const operation = 'Add';
    const wrapper = shallowMount(OperationComponent, {
      propsData: { operation },
    });

    expect(wrapper.text()).toContain(operation);
  });

  it('emits the "operation" event with input values', async () => {
    const wrapper = shallowMount(OperationComponent, {
      propsData: { operation: 'Add' },
    });

    const input1 = wrapper.find('input[name="input1"]');
    const input2 = wrapper.find('input[name="input2"]');
    const button = wrapper.find('button');

    await input1.setValue('5');
    await input2.setValue('3');
    await button.trigger('click');

    const emittedEvent = wrapper.emitted('operation');
    expect(emittedEvent).toBeTruthy();
    expect(emittedEvent[0]).toEqual([
      { operation: 'Add', input1: '5', input2: '3' },
    ]);
  });
});
