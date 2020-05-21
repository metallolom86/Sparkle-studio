export default {
  name: '4mhNr6LwSA0cw0suaiuACC',
  title: 'Season',
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
      name: 'slug',
      title: 'Slug',
      validation: Rule => Rule.required(),
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'weight',
      title: 'Weight',
      validation: Rule => Rule.required(),
      type: 'number',
      options: {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        layout: 'dropdown'
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    }
  ]
}
