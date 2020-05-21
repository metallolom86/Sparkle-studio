export default {
  name: '2X9njs7Hm0mUc8ocASEW0A',
  title: 'FAQ Categories',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'description',
      title: 'Description',
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
      name: 'faq',
      title: 'FAQ',
      hidden: true,
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: '27NqSErDgME0M6owKA6oe6'
            }
          ]
        }
      ]
    }
  ]
}
