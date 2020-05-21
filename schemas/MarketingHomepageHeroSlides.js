export default {
  name: 'marketingHomepageHeroSlides',
  title: 'Marketing Homepage Hero Slides',
  description: 'Defines the slides on the homepage version 2.0.',
  type: 'document',
  preview: {
    select: {
      title: 'slideTitle'
    }
  },
  fields: [
    {
      name: 'slideSubtitle',
      title: 'Slide Subtitle',
      type: 'string'
    },
    {
      name: 'slideTitle',
      title: 'Slide Title',
      type: 'string'
    },
    {
      name: 'slideLayout',
      title: 'Slide Layout',
      validation: Rule => Rule.required(),
      type: 'string',
      options: {
        list: ['Video Layout', 'Text & CTA Layout'],
        layout: 'dropdown'
      }
    },
    {
      name: 'slideDescription',
      title: 'Slide Description',
      type: 'string'
    },
    {
      name: 'slideCtaLabel',
      title: 'Slide CTA Label',
      type: 'string'
    },
    {
      name: 'slideCtaUrl',
      title: 'Slide CTA URL',
      type: 'url'
    },
    {
      name: 'videoStill',
      title: 'Video Still',
      type: 'image'
    },
    {
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url'
    },
    {
      name: 'slideBackgroundImage',
      title: 'Slide Background Image',
      validation: Rule => Rule.required(),
      type: 'file'
    },
    {
      name: 'slideBackgroundImageMobile',
      title: 'Slide Background Image Mobile',
      type: 'image'
    }
  ]
}
