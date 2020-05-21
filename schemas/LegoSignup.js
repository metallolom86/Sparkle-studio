export default {
  name: 'legoSignup',
  title: 'LEGO: Signup',
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
      name: 'copy',
      title: 'Copy',
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
      name: 'buttonText',
      title: 'Button Text',
      validation: Rule => Rule.required(),
      type: 'string'
    }
  ]
}
