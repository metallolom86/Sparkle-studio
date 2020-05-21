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
              type: '2C4Vf04Sn6yM4iSKAEEIcW'
            },
            {
              type: '10gqnUyH7MY6aUAGwYMWqQ'
            },
            {
              type: '3E6bdvlfmMi2M4gmKuOG2e'
            },
            {
              type: '5GPHYPgQaQYouKOwM8Weus'
            },
            {
              type: '42NU4G3ny02SUCEmMSamMS'
            },
            {
              type: '5Iq0WgjphSei2ywoG6QA4e'
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
