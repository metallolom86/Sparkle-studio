export default {
  name: '42NU4G3ny02SUCEmMSamMS',
  title: 'Story',
  description: 'The entire library is here.',
  type: 'document',
  preview: {
    select: {
      title: 'title'
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Story Title',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Story Slug',
      validation: Rule => Rule.required(),
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'weight',
      title: 'Display Order',
      type: 'number'
    },
    {
      name: 'logo',
      title: 'Story Image',
      type: 'image'
    },
    {
      name: 'audioFile',
      title: 'Audio File',
      validation: Rule => Rule.required(),
      type: 'file'
    },
    {
      name: 'audioSample',
      title: 'Audio Sample',
      type: 'file'
    },
    {
      name: 'sensitiveSubject',
      title: 'Sensitive Subject',
      validation: Rule => Rule.required(),
      type: 'boolean'
    },
    {
      name: 'addFreeStoryBanner',
      title: 'Add free story banner',
      type: 'boolean'
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text'
    },
    {
      name: 'description',
      title: 'Description',
      validation: Rule => Rule.required(),
      type: 'text'
    },
    {
      name: 'teaser',
      title: 'Teaser',
      type: 'string'
    },
    {
      name: 'storyLength',
      title: 'Story Length',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'age',
      title: 'Age',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [
        {
          type: '2C4Vf04Sn6yM4iSKAEEIcW'
        }
      ]
    },
    {
      name: 'characters',
      title: 'Characters',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: '3E6bdvlfmMi2M4gmKuOG2e'
            }
          ]
        }
      ]
    },
    {
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: '5Iq0WgjphSei2ywoG6QA4e'
            }
          ]
        }
      ]
    },
    {
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: '5GPHYPgQaQYouKOwM8Weus'
            }
          ]
        }
      ]
    },
    {
      name: 'recipesCrafts',
      title: 'Recipes & Crafts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: '10gqnUyH7MY6aUAGwYMWqQ'
            }
          ]
        }
      ]
    },
    {
      name: 'education',
      title: 'Education',
      type: 'reference',
      to: [
        {
          type: '10gqnUyH7MY6aUAGwYMWqQ'
        }
      ]
    },
    {
      name: 'contributors',
      title: 'Contributors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: '6CN2bBuW2WQyaG4wwgwcwW'
            }
          ]
        }
      ]
    },
    {
      name: 'season',
      title: 'Season',
      type: 'reference',
      to: [
        {
          type: '4mhNr6LwSA0cw0suaiuACC'
        }
      ]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'text'
    },
    {
      name: 'sparklestoryId',
      title: 'Sparkle Story ID',
      type: 'number'
    },
    {
      name: 'newTags',
      title: 'New Tags',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            layout: 'tags'
          }
        }
      ]
    }
  ]
}
