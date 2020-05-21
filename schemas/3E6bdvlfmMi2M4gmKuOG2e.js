export default {
  name: '3E6bdvlfmMi2M4gmKuOG2e',
  title: 'Characters',
  description: 'All the characters in the Sparkle Stories universe.',
  type: 'document',
  preview: {
    select: {
      title: 'name'
    }
  },
  fields: [
    {
      name: 'name',
      title: 'Character Name',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Character Slug',
      validation: Rule => Rule.required(),
      type: 'slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'logo',
      title: 'Thumbnail Image',
      validation: Rule => Rule.required(),
      type: 'image'
    },
    {
      name: 'bio',
      title: 'Character Bio',
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
    }
  ]
}
