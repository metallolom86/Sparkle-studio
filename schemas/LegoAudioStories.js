export default {
  name: 'legoAudioStories',
  title: 'LEGO: Audio Stories',
  description: 'Some audio stories template',
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
      name: 'audioStoryItems',
      title: 'Audio Story Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'audioStoryItem'
            }
          ]
        }
      ]
    }
  ]
}
