export default {
  name: 'featuredTestimonials',
  title: 'Featured Testimonials',
  type: 'document',
  preview: {
    select: {
      title: 'authorName'
    }
  },
  fields: [
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string'
    },
    {
      name: 'homeState',
      title: 'Home State',
      type: 'string'
    },
    {
      name: 'testimonialText',
      title: 'Testimonial Text',
      type: 'text'
    }
  ]
}
