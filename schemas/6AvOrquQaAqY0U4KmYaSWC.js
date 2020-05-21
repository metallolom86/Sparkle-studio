export default {
  name: '6AvOrquQaAqY0U4KmYaSWC',
  title: 'Store Settings',
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
      name: 'mainProductFeatures',
      title: 'Main Product Features',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: '2PqfXUJwE8qSYKuM0U6w8M'
            }
          ]
        }
      ]
    },
    {
      name: 'featuredCategory1Title',
      title: 'Title: Featured Category 1',
      type: 'string'
    },
    {
      name: 'featuredCategory1',
      title: 'Featured Category 1',
      type: 'reference',
      to: [
        {
          type: '4ouAGlpdUIO6YimUi4yy4c'
        }
      ]
    },
    {
      name: 'individualProductFeature',
      title: 'Individual Product Feature',
      type: 'reference',
      to: [
        {
          type: '2PqfXUJwE8qSYKuM0U6w8M'
        }
      ]
    },
    {
      name: 'featuredCategory2Title',
      title: 'Title: Featured Category 2',
      type: 'string'
    },
    {
      name: 'featuredCategory2',
      title: 'Featured Category 2',
      type: 'reference',
      to: [
        {
          type: '4ouAGlpdUIO6YimUi4yy4c'
        }
      ]
    }
  ]
}
