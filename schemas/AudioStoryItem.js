export default {
  name: 'audioStoryItem',
  title: 'Audio Story Item',
  description: 'Audio story item from home page',
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
      name: 'description',
      title: 'Description',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'file'
    }
  ]
}
