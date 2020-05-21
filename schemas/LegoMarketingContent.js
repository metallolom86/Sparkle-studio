export default {
  name: 'legoMarketingContent',
  title: 'LEGO: Marketing Content',
  description:
    'LEGO with a heading and two columns, one including a testimonial block.',
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
      validation: Rule => Rule.required(),
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
      name: 'quote',
      title: 'Testimonial',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'authorName',
      title: 'Author Name',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'authorDetails',
      title: 'Author Details',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'style',
      title: 'Style',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [
        {
          type: 'style'
        }
      ]
    }
  ]
}
