export default {
  name: 'landingPageStory',
  title: 'Landing Page Story',
  description: 'Free stories that can be added to landing pages',
  type: 'document',
  preview: {
    select: {
      title: 'storyTitle'
    }
  },
  fields: [
    {
      name: 'image',
      title: 'Image',
      validation: Rule => Rule.required(),
      type: 'image'
    },
    {
      name: 'storyTitle',
      title: 'Story Title',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'seriesTitle',
      title: 'Series Title',
      type: 'string'
    },
    {
      name: 'seriesUrl',
      title: 'Series URL',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      validation: Rule => Rule.required(),
      type: 'text'
    },
    {
      name: 'storyUrl',
      title: 'Story URL',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'storyDuration',
      title: 'Story Duration',
      validation: Rule => Rule.required(),
      type: 'string'
    }
  ]
}
