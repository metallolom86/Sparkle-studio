export default {
  name: 'featureBanner',
  title: 'Feature Banner',
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
    },
    {
      name: 'background',
      title: 'Background',
      type: 'file'
    },
    {
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [
        {
          type: 'file'
        }
      ]
    }
  ]
}
