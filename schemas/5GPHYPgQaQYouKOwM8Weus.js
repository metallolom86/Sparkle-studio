export default {
  name: '5GPHYPgQaQYouKOwM8Weus',
  title: 'Collection',
  description: 'Collection of stories based on a theme!',
  type: 'document',
  preview: {
    select: {
      title: 'title'
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Collection Title',
      validation: Rule => Rule.required(),
      type: 'text'
    },
    {
      name: 'slug',
      title: 'Collection Slug',
      validation: Rule => Rule.required(),
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'weight',
      title: 'Display Order',
      type: 'number'
    },
    {
      name: 'logo',
      title: 'Collection Image',
      validation: Rule => Rule.required(),
      type: 'image'
    },
    {
      name: 'logoBig',
      title: 'Collection Featured Image',
      type: 'image'
    },
    {
      name: 'age',
      title: 'Age',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [
        {
          type: '2C4Vf04Sn6yM4iSKAEEIcW'
        }
      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'series',
      title: 'Series',
      type: 'reference',
      to: [
        {
          type: 'sFzTZbSuM8coEwygeUYes'
        }
      ]
    }
  ]
}
