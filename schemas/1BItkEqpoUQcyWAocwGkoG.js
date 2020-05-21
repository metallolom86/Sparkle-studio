export default {
  name: '1BItkEqpoUQcyWAocwGkoG',
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
              type: '42NU4G3ny02SUCEmMSamMS'
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
          type: '5Iq0WgjphSei2ywoG6QA4e'
        }
      ]
    },
    {
      name: 'homeScreenSeasonalTopicNorth',
      title: 'Home Screen Seasonal Topic: North',
      type: 'reference',
      to: [
        {
          type: '5Iq0WgjphSei2ywoG6QA4e'
        }
      ]
    },
    {
      name: 'homeScreenSeasonalTopic',
      title: 'Home Screen Seasonal Topic: South',
      type: 'reference',
      to: [
        {
          type: '5Iq0WgjphSei2ywoG6QA4e'
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
              type: 'sFzTZbSuM8coEwygeUYes'
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
              type: '5GPHYPgQaQYouKOwM8Weus'
            },
            {
              type: 'sFzTZbSuM8coEwygeUYes'
            },
            {
              type: '5Iq0WgjphSei2ywoG6QA4e'
            }
          ]
        }
      ]
    }
  ]
}
