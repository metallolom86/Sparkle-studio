export default {
  name: 'homepageSampleStories',
  title: 'Homepage Sample Stories',
  type: 'document',
  preview: {
    select: {
      title: 'title'
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'featuredItem1',
      title: 'Featured Item 1',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [
        {
          type: 'collection'
        },
        {
          type: 'series'
        },
        {
          type: 'topic'
        }
      ]
    },
    {
      name: 'featuredItem1Subtitle',
      title: 'Featured Item 1: Subtitle',
      type: 'string'
    },
    {
      name: 'featuredItem1SampleStory',
      title: 'Featured Item 1: Sample Story',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [
        {
          type: 'story'
        }
      ]
    },
    {
      name: 'featuredItem2',
      title: 'Featured Item 2',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [
        {
          type: 'collection'
        },
        {
          type: 'series'
        },
        {
          type: 'topic'
        }
      ]
    },
    {
      name: 'featuredItem2Subtitle',
      title: 'Featured Item 2: Subtitle',
      type: 'string'
    },
    {
      name: 'featuredItem2SampleStory',
      title: 'Featured Item 2: Sample Story',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [
        {
          type: 'story'
        }
      ]
    },
    {
      name: 'featuredItem3',
      title: 'Featured Item 3',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [
        {
          type: 'collection'
        },
        {
          type: 'series'
        },
        {
          type: 'topic'
        }
      ]
    },
    {
      name: 'featuredItem3Subtitle',
      title: 'Featured Item 3: Subtitle',
      type: 'string'
    },
    {
      name: 'featuredItem3SampleStory',
      title: 'Featured Item 3: Sample Story',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [
        {
          type: 'story'
        }
      ]
    },
    {
      name: 'featuredItem4',
      title: 'Featured Item 4',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [
        {
          type: 'collection'
        },
        {
          type: 'series'
        },
        {
          type: 'topic'
        }
      ]
    },
    {
      name: 'featuredItem4Subtitle',
      title: 'Featured Item 4: Subtitle',
      type: 'string'
    },
    {
      name: 'featuredItem4SampleStory',
      title: 'Featured Item 4: Sample Story',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [
        {
          type: 'story'
        }
      ]
    }
  ]
}
