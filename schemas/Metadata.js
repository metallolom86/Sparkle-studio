export default {
  name: 'metadata',
  title: 'Metadata',
  description:
    'SEO-related page metadata (title, description, rich embeds, etc)',
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
      name: 'image',
      title: 'Image',
      type: 'image'
    }
  ]
}
