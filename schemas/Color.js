export default {
  name: 'color',
  title: 'Color',
  type: 'document',
  preview: {
    select: {
      title: 'name'
    }
  },
  fields: [
    {
      name: 'name',
      title: 'Name',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'hex',
      title: 'Color Value',
      type: 'string'
    }
  ]
}
