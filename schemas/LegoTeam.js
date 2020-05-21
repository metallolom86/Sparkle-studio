export default {
  name: 'legoTeam',
  title: 'LEGO: Team',
  description: 'Team grid ',
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
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'leadership',
      title: 'Leadership',
      validation: Rule => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: '4gwUzKU8XYi8mMoUayQKO6'
            }
          ]
        }
      ]
    },
    {
      name: 'team',
      title: 'Team',
      validation: Rule => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: '4gwUzKU8XYi8mMoUayQKO6'
            }
          ]
        }
      ]
    }
  ]
}
