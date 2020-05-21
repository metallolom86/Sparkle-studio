export default {
  name: 'style',
  title: 'Style',
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
      name: 'textColor',
      title: 'Text Color',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [
        {
          type: 'color'
        }
      ]
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [
        {
          type: 'color'
        }
      ]
    },
    {
      name: 'buttonTextColor',
      title: 'Button Text Color',
      type: 'reference',
      to: [
        {
          type: 'color'
        }
      ]
    },
    {
      name: 'buttonBackgroundColor',
      title: 'Button Background Color',
      type: 'reference',
      to: [
        {
          type: 'color'
        }
      ]
    }
  ]
}
