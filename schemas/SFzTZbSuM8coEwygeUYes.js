export default {
  name: 'sFzTZbSuM8coEwygeUYes',
  title: 'Series',
  type: 'document',
  preview: {
    select: {
      title: 'title'
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Series Title',
      validation: Rule => Rule.required(),
      type: 'text'
    },
    {
      name: 'slug',
      title: 'Series Slug',
      validation: Rule => Rule.required(),
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'logo',
      title: 'Series Image',
      type: 'image'
    },
    {
      name: 'logoBig',
      title: 'Series Featured Image',
      type: 'image'
    },
    {
      name: 'description',
      title: 'Series Description',
      type: 'text'
    },
    {
      name: 'age',
      title: 'Series Age',
      type: 'reference',
      to: [
        {
          type: '2C4Vf04Sn6yM4iSKAEEIcW'
        }
      ]
    }
  ]
}
