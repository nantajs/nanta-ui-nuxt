<template>
  <a-modal :visible="visible" :title="title" @ok="handleOk" @cancel="handleCancel">
    <a-form
      :model="formState"
      v-bind="layout"
      name="nest-messages"
      :validate-messages="validateMessages"
      @finish="onFinish"
    >
      <a-form-item :name="['user', 'name']" label="Name" :rules="[{ required: true }]">
        <a-input v-model:value="formState.user.name" />
      </a-form-item>
      <a-form-item :name="['user', 'email']" label="Email" :rules="[{ type: 'email' }]">
        <a-input v-model:value="formState.user.email" />
      </a-form-item>
      <a-form-item
        :name="['user', 'age']"
        label="Age"
        :rules="[{ type: 'number', min: 0, max: 99 }]"
      >
        <a-input-number v-model:value="formState.user.age" />
      </a-form-item>
      <a-form-item :name="['user', 'website']" label="Website">
        <a-input v-model:value="formState.user.website" />
      </a-form-item>
      <a-form-item :name="['user', 'introduction']" label="Introduction">
        <a-textarea v-model:value="formState.user.introduction" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
import { reactive, toRef } from "vue";

const props = defineProps({
  visible: { type: Boolean, default: false },
  title: { type: String, default: "Edit" },
});

const emit = defineEmits(['changed']);

// const visibled = toRef(props, 'visible');
// const visible = ref<boolean>(false);

const handleCancel = (e) => {
  console.log('handleCancel');
  // visibled.value = false;
  emit('changed', 'cancel')
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const formState = reactive({
  user: {
    name: "",
    age: undefined,
    email: "",
    website: "",
    introduction: "",
  },
});

const onFinish = (values: any) => {
  console.log("Success:", values);
};

// const visible = ref<boolean>(false);

const handleOk = (e: MouseEvent) => {
  console.log('handleOK');
  console.log(formState.user)
  emit('changed', 'ok')
};
</script>
