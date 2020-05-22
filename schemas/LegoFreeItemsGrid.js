export default {
  name: 'legoFreeItemsGrid',
  title: 'LEGO: Free Items Grid',
  description: 'Free stories example ( home page  )',
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
