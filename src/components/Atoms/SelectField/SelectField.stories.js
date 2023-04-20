import SelectField from './SelectField'

export default {
  title: 'Atoms/SelectField',
  component: SelectField
}

const Template = (args) => <SelectField {...args} />

export const Select = Template.bind({})

Select.args = {
  dataSource: [{ name: 'one', value: '1' }],
  width: '200px'
}
