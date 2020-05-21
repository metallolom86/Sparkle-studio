export default {
  name: 'V1oMjOcBY4k84Yk4K6kiW',
  title: 'Trial Banner',
  type: 'document',
  preview: {
    select: {
      title: 'title'
    }
  },
  fields: [
    {
      name: 'layout',
      title: 'Layout',
      type: 'boolean'
    },
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
      name: 'buttonText',
      title: 'Button Text',
      type: 'string'
    },
    {
      name: 'buttonUrl',
      title: 'Button Url',
      type: 'url'
    },
    {
      name: 'background',
      title: 'Background',
      type: 'file'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    }
  ]
}
