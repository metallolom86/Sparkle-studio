export default {
  name: 'legoPromoBanner',
  title: 'LEGO: Promo Banner',
  type: 'document',
  preview: {
    select: {
      title: 'title'
    }
  },
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'content',
      title: 'Content',
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
      name: 'buttonText',
      title: 'Button Text',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'artwork',
      title: 'Artwork',
      validation: Rule => Rule.required(),
      type: 'image'
    }
  ]
}
