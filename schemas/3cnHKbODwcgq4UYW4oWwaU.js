export default {
  name: '3cnHKbODwcgq4UYW4oWwaU',
  title: 'Text Page Template',
  description:
    'Standard page template for basic text page views. For example, privacy policy, terms of service etc...',
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
      type: 'string'
    },
    {
      name: 'text',
      title: 'Text',
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
