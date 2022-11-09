<template>
  <div>
    <NantaForm v-bind="getFormProps" :actionColOptions="{ span: 24 }" @register="registerForm" @submit="handleSubmit"
      @reset="handleReset" />

    <NantaButton @click="clickFormModal">NantaFormModal</NantaButton>

    <NantaFormModal @register="registerFormModal" v-bind="mProps" @ok="onSubmit">
      <template #selectTag="{ model, field, schema }">
        <a-select :options="optionsTag" mode="tags" :token-separators="[',']" v-model:value="model[field]"
          :placeholder="schema.placeholder" allowClear />
      </template>
    </NantaFormModal>
  </div>
</template>

<script setup lang="ts">
import { NantaButton, NantaForm, useForm, FormProps, Recordable, useModal, NantaFormModalProps, NantaFormModal } from '@nanta/ui'
import { schemes, editModalSchema } from "./data";
import { computed } from "vue";
import type { SelectProps } from 'ant-design-vue';
import { ref } from 'vue';

const [
  registerForm,
  { setFieldsValue, updateSchema, resetFields, getFieldsValue, validateFields },
] = useForm({
  labelWidth: 120,
  schemas: schemes,
  actionColOptions: {
    span: 24,
  },
});

const optionsTag = ref<SelectProps['options']>([
]);

const mProps: NantaFormModalProps = {
  schemas: editModalSchema,
  colon: true,
  modalProps: {
    okText: "确定",
    cancelText: '取消',
  }
}

const [registerFormModal, { openModal: openFormModal, closeModal, changeLoading }] = useModal();

function onSubmit(newValue: Recordable, oldValue: Recordable) {
  console.log('newValue:', newValue, 'oldValue:', oldValue)
}

function clickFormModal() {
  openFormModal(true, {
    title: "Nanta Form Modal",
    record: { name: "Aborn Jiang", id: "20220412", tags: ['init', 'ie'] },
  });
}

const customizeResetFn = (): Promise<void> => {
  console.log("here is a customize resetFn called!");
  setFieldsValue({
    age: 0,
    email: "nanta-ui@nantajs.dev",
    name: "Nanta",
  });
  return new Promise((resolve, reject) => {
    try {
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

const formProps: FormProps = {
  resetFn: customizeResetFn,
  colon: true,
};

const getFormProps = computed((): Recordable => ({ ...formProps }));

const handleSubmit = (values: any) => {
  console.log("values", values);
  console.log("handleSubmit btn clicked!");
};

const handleReset = () => {
  console.log("handleReset but click");
};

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
