export default {
  preview: {
    prepare: values => {
      const getFirstText = block =>
        block.children && block.children[0] && block.children[0].text
      const block = values.title.find(getFirstText)
      return {title: block && getFirstText(block)}
    },
    select: {
      title: 'text'
    }
  },
  name: 'blogTextAndMedia',
  title: 'Blog Story And Media',
  description:
    'Content type for including text and media in a blog post together (this was integrated because of the need for the use of the audio player)',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
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
      name: 'audio',
      title: 'Audio',
      type: 'file'
    },
    {
      name: 'audioLength',
      title: 'Audio length',
      validation: Rule => Rule.required(),
      type: 'string'
    }
  ]
}
