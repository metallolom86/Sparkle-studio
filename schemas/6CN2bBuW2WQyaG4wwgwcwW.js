export default {
  name: '6CN2bBuW2WQyaG4wwgwcwW',
  title: 'Contributor',
  description:
    "The people who make Sparkle happen, whether it's music for stories, new recipes and crafts, etc.",
  type: 'document',
  preview: {
    select: {
      title: 'firstName'
    }
  },
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Contributor Image',
      type: 'image'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string'
    },
    {
      name: 'bio',
      title: 'Contributor Bio',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        }
      ]
    }
  ]
}
