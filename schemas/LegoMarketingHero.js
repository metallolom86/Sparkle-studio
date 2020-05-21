export default {
  name: 'legoMarketingHero',
  title: 'LEGO: Marketing Hero',
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
      name: 'copy',
      title: 'Copy',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'alignment',
      title: 'Alignment',
      validation: Rule => Rule.required(),
      type: 'string',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'dropdown'
      }
    },
    {
      name: 'showButtons',
      title: 'Show Buttons?',
      validation: Rule => Rule.required(),
      type: 'boolean'
    },
    {
      name: 'secondaryActionText',
      title: 'Secondary CTA Text',
      type: 'string'
    },
    {
      name: 'secondaryActionHref',
      title: 'Secondary CTA URL',
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
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image'
    }
  ]
}
