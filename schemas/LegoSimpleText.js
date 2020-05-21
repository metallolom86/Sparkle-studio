export default {
  name: 'legoSimpleText',
  title: 'LEGO: Simple Text',
  description: 'Simple text LEGO with minimal adornment.',
  type: 'document',
  preview: {
    select: {
      title: 'internalName'
    }
  },
  fields: [
    {
      name: 'internalName',
      title: 'Internal Name',
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
      name: 'boxed',
      title: 'Put it in a box?',
      validation: Rule => Rule.required(),
      type: 'boolean'
    }
  ]
}
