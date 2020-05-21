export default {
  name: 'seriesSettings',
  title: 'Series Settings',
  description: 'Settings for the archive view',
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
