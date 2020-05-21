export default {
  name: 'SwkS9yZoMCqKMEE4GC6KK',
  title: 'App Download Banner',
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
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'background',
      title: 'Background',
      type: 'file'
    },
    {
      name: 'cta1Link',
      title: 'CTA 1 Link',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'cta1Image',
      title: 'CTA 1 Image',
      validation: Rule => Rule.required(),
      type: 'image'
    },
    {
      name: 'cta2Link',
      title: 'CTA 2 Link',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'cta2Image',
      title: 'CTA 2 Image',
      validation: Rule => Rule.required(),
      type: 'file'
    }
  ]
}
