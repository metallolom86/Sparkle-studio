export default {
  name: 'collectionSettings',
  title: 'Collection Settings',
  description: 'Settings for the collection archive',
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
      name: 'headline',
      title: 'Headline',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    }
  ]
}
