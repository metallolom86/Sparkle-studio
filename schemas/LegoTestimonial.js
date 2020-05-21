export default {
  name: 'legoTestimonial',
  title: 'LEGO: Testimonial',
  type: 'document',
  preview: {
    select: {
      title: 'quote'
    }
  },
  fields: [
    {
      name: 'quote',
      title: 'Quote',
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
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image'
    }
  ]
}
