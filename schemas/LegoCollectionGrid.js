export default {
  name: 'legoCollectionGrid',
  title: 'LEGO: Items Grid',
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
      name: 'label',
      title: 'Label',
      type: 'string'
    },
    {
      name: 'items',
      title: 'Items',
      validation: Rule => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'age'
            },
            {
              type: 'blogPost'
            },
            {
              type: 'characters'
            },
            {
              type: 'collection'
            },
            {
              type: 'series'
            },
            {
              type: 'story'
            },
            {
              type: 'topic'
            }
          ]
        }
      ]
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string'
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string'
    }
  ]
}
