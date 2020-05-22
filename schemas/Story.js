export default {
  name: 'story',
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
          type: 'age'
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
              type: 'characters'
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
              type: 'topic'
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
              type: 'collection'
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
              type: 'blogPost'
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
          type: 'blogPost'
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
              type: 'contributor'
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
          type: 'season'
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
