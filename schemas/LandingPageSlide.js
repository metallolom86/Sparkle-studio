export default {
  name: 'landingPageSlide',
  title: 'Landing Page Slide',
  description: 'A slide that can be referenced in a Landing Page slideshow',
  type: 'document',
  preview: {
    select: {
      title: 'headline'
    }
  },
  fields: [
    {
      name: 'subhead',
      title: 'Subhead',
      type: 'string'
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string'
    },
    {
      name: 'bodyCopy',
      title: 'Body Copy',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        }
      ]
    },
    {
      name: 'ctaUrl',
      title: 'CTA URL',
      type: 'url'
    },
    {
      name: 'ctaCopy',
      title: 'CTA Copy',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    }
  ]
}
