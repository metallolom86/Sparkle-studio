export default {
  name: '2PqfXUJwE8qSYKuM0U6w8M',
  title: 'Products',
  description: 'Products to be featured on the Sparkle Stories store.',
  type: 'document',
  preview: {
    select: {
      title: 'name'
    }
  },
  fields: [
    {
      name: 'name',
      title: 'Product name',
      validation: Rule => Rule.required(),
      type: 'text'
    },
    {
      name: 'sku',
      title: 'SKU',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name'
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
      name: 'longDescription',
      title: 'Long Description',
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
      name: 'productThumb',
      title: 'Product Thumb',
      type: 'image'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {}
        }
      ]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: '4ouAGlpdUIO6YimUi4yy4c'
            }
          ]
        }
      ]
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [
        {
          type: 'sFzTZbSuM8coEwygeUYes'
        }
      ]
    },
    {
      name: 'age',
      title: 'Age',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: '2C4Vf04Sn6yM4iSKAEEIcW'
            }
          ]
        }
      ]
    },
    {
      name: 'fullWidthPosterImage',
      title: 'Full Width Poster Image',
      type: 'image'
    },
    {
      name: 'productGallery',
      title: 'Product Gallery',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ]
    },
    {
      name: 'digitalDownload',
      title: 'Digital Download',
      type: 'file'
    },
    {
      name: 'giftSubscription',
      title: 'Gift Subscription',
      type: 'reference',
      to: [
        {
          type: '3IItgDW8vuUSiW028IseiW'
        }
      ]
    }
  ]
}
