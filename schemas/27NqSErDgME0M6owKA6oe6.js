export default {
  name: '27NqSErDgME0M6owKA6oe6',
  title: 'FAQ',
  description: 'Frequently Asked Question (and Answer)',
  type: 'document',
  preview: {
    select: {
      title: 'question'
    }
  },
  fields: [
    {
      name: 'question',
      title: 'Question',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'answer',
      title: 'Answer',
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
      name: 'faqCategory',
      title: 'Category',
      type: 'reference',
      to: [
        {
          type: '2X9njs7Hm0mUc8ocASEW0A'
        }
      ]
    }
  ]
}
