export default {
  name: "homeScreenFeatures",
  title: "Home Screen Features",
  type: "document",
  preview: {
    select: {
      title: "title"
    }
  },
  fields: [
    {
      name: "title",
      title: "Title",
      validation: Rule => Rule.required(),
      type: "string"
    },
    {
      name: "seriesSlides",
      title: "Series Slides",
      validation: Rule => Rule.required(),
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "collection"
            },
            {
              type: "sFzTZbSuM8coEwygeUYes"
            }
          ]
        }
      ]
    },
    {
      name: "ageSubhead",
      title: "Age Subhead",
      type: "string"
    },
    {
      name: "ageHeadline",
      title: "Age Headline",
      type: "string"
    },
    {
      name: "featuredTopicSubhead",
      title: "Featured Topic Subhead",
      type: "string"
    },
    {
      name: "featuredTopicHeadline",
      title: "Featured Topic Headline",
      type: "string"
    },
    {
      name: "readersTopic",
      title: "Featured Topic",
      validation: Rule => Rule.required(),
      type: "reference",
      to: [
        {
          type: "topic"
        }
      ]
    },
    {
      name: "charactersSubhead",
      title: "Characters Subhead",
      type: "string"
    },
    {
      name: "charactersHeadline",
      title: "Characters Headline",
      type: "string"
    },
    {
      name: "activitiesSubhead",
      title: "Activities Subhead",
      type: "string"
    },
    {
      name: "activitiesHeadline",
      title: "Activities Headline",
      type: "string"
    },
    {
      name: "seasonalFeaturedTopicSubhead",
      title: "Seasonal Featured Topic Subhead",
      type: "string"
    },
    {
      name: "seasonalFeaturedTopicHeadline",
      title: "Seasonal Featured Topic Headline",
      type: "string"
    },
    {
      name: "seasonalTopic",
      title: "Seasonal Featured Topic: North",
      validation: Rule => Rule.required(),
      type: "reference",
      to: [
        {
          type: "topic"
        }
      ]
    },
    {
      name: "seasonalFeaturedTopicSouth",
      title: "Seasonal Featured Topic: South",
      type: "reference",
      to: [
        {
          type: "topic"
        }
      ]
    },
    {
      name: "blogSubhead",
      title: "Blog Subhead",
      type: "string"
    },
    {
      name: "blogHeadline",
      title: "Blog Headline",
      type: "string"
    }
  ]
};
