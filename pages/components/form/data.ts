import { FormSchema, VALIDATORS } from "@nanta/ui";
export const schemes: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'name',
    label: "Name",
    component: 'Input',
    defaultValue: 'nanta',
    required: true,
    placeholder: 'Please input user name.',
  }, 
  {
    field: 'email',
    label: "Email",
    component: 'Input',
    rules: [{
      trigger:'change',
      validator: VALIDATORS.email,
      required: true,
    }]
  },
  {
    field: 'age',
    label: "Age",
    component: 'InputNumber',
    defaultValue: 1,
  },
  {
    field: 'tags',
    label: "Tags",
    component: 'Input',
  },
  {
    field: 'address',
    label: "Address",
    component: 'InputTextArea',
  },
]

export const editModalSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'id',
    component: 'Input',
    ifShow: false,
    colProps: { span: 24 },
  }, 
  {
    field: 'name',
    label: 'Name',
    component: 'Input',
    colProps: { span: 24 },
  }, 
  {
    field: 'age',
    label: 'Age',
    component: 'InputNumber', 
    colProps: { span: 24 },
  },
  {
    field: 'email',
    label: 'Email',
    component: 'Input', 
    colProps: { span: 24 },
  },
  {
    field: 'gender',
    label: 'Gender',
    component: 'Select',
    componentProps: {
      options: [
        { label: 'male', value: 1 },
        { label: 'female', value: 2 },
      ],
    },
    colProps: { span: 12 },
  },
  {
    field: 'address',
    label: 'address',
    component: 'InputTextArea',
    colProps: { span: 24 },
  }, 
  {
    field: 'tags',
    label: 'Tags',
    component: 'Select',
    colProps: { span: 24 },
    slot: 'selectTag',
    placeholder: 'Please input your tag and then press return.'
  }, 
]