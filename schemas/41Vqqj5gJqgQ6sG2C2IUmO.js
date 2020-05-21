export default {
  name: '41Vqqj5gJqgQ6sG2C2IUmO',
  title: 'Marketing Banner',
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
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
      title: 'Primary CTA Label',
      type: 'string'
    },
    {
      name: 'buttonUrl',
      title: 'Primary CTA URL',
      type: 'url'
    },
    {
      name: 'secondaryCtaLabel',
      title: 'Secondary CTA Label',
      type: 'string'
    },
    {
      name: 'secondaryCtaUrl',
      title: 'Secondary CTA URL',
      type: 'url'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'background',
      title: 'Background',
      type: 'file'
    }
  ]
}
