export default {
  name: 'mobileSettings',
  title: 'Mobile Settings',
  description: 'Features for iOS and Android',
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
      type: 'string'
    },
    {
      name: 'homeScreenFeaturedStories',
      title: 'Home Screen Featured Stories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'story'
            }
          ]
        }
      ]
    },
    {
      name: 'homeScreenReadersTopic',
      title: 'Home Screen Featured Topic 1',
      type: 'reference',
      to: [
        {
          type: 'topic'
        }
      ]
    },
    {
      name: 'homeScreenSeasonalTopicNorth',
      title: 'Home Screen Seasonal Topic: North',
      type: 'reference',
      to: [
        {
          type: 'topic'
        }
      ]
    },
    {
      name: 'homeScreenSeasonalTopic',
      title: 'Home Screen Seasonal Topic: South',
      type: 'reference',
      to: [
        {
          type: 'topic'
        }
      ]
    },
    {
      name: 'homeScreenFeaturedSeries',
      title: 'Home Screen Featured Series',
      validation: Rule => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'series'
            }
          ]
        }
      ]
    },
    {
      name: 'homeScreenTrendingNow',
      title: 'Home Screen Trending Now',
      type: 'array',
      of: [
        {
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
        }
      ]
    }
  ]
}
