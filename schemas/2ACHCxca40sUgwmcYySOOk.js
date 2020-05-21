export default {
  name: '2ACHCxca40sUgwmcYySOOk',
  title: 'Blog Settings',
  description: 'Control Settings for Blog Index Page',
  type: 'document',
  preview: {
    select: {
      title: 'blogJumbotronTitle'
    }
  },
  fields: [
    {
      name: 'blogJumbotronImage',
      title: 'Blog Jumbotron Image',
      type: 'file'
    },
    {
      name: 'blogJumbotronTitle',
      title: 'Blog Jumbotron Title',
      type: 'string'
    },
    {
      name: 'blogJumbotronSubtitle',
      title: 'Blog Jumbotron Subtitle',
      type: 'string'
    }
  ]
}
