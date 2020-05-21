export default {
  name: 'bitTextPanel',
  title: 'Bit: Text Panel',
  type: 'document',
  preview: {
    select: {
      title: 'label'
    }
  },
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'copy',
      title: 'Copy',
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
      name: 'showAction',
      title: 'Show “Start Free Trial” CTA?',
      validation: Rule => Rule.required(),
      type: 'boolean'
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
