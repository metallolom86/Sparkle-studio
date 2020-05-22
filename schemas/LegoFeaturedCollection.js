export default {
  name: 'legoFeaturedCollection',
  title: 'LEGO: Featured Collection',
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
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'collection',
      title: 'Collection',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [
        {
          type: 'collection'
        }
      ]
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      validation: Rule => Rule.required(),
      type: 'string'
    }
  ]
}
