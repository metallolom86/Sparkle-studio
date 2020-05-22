export default {
  name: 'fAQSettings',
  title: 'FAQ Settings',
  type: 'document',
  preview: {
    select: {
      title: 'jumbotronTitle'
    }
  },
  fields: [
    {
      name: 'jumbotronImage',
      title: 'Jumbotron Image',
      type: 'file'
    },
    {
      name: 'jumbotronTitle',
      title: 'Jumbotron Title',
      type: 'string'
    },
    {
      name: 'jumbotronSubtext',
      title: 'Jumbotron Subtext',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        }
      ]
    }
  ]
}
