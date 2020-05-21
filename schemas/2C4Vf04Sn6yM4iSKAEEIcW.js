export default {
  name: '2C4Vf04Sn6yM4iSKAEEIcW',
  title: 'Age',
  description:
    'Ages help the user understand what stories are appropriate for their child.',
  type: 'document',
  preview: {
    select: {
      title: 'title'
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'number',
      title: 'Number',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'description',
      title: 'Age Range Description',
      type: 'text'
    }
  ]
}
