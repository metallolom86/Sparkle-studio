export default {
  name: 'legoPage',
  title: 'LEGO: Page',
  type: 'document',
  preview: {
    select: {
      title: 'slug'
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
      name: 'slug',
      title: 'Slug',
      validation: Rule => Rule.required(),
      type: 'slug',
      options: {
        source: 'slug'
      }
    },
    {
      name: 'metadata',
      title: 'Metadata',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [
        {
          type: 'metadata'
        }
      ]
    },
    {
      name: 'legos',
      title: 'LEGOs',
      validation: Rule => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'legoAppInfo'
            },
            {
              type: 'legoAudioStories'
            },
            {
              type: 'legoFeaturedCollection'
            },
            {
              type: 'legoFreeItemsGrid'
            },
            {
              type: 'legoCollectionGrid'
            },
            {
              type: 'legoMarketingContent'
            },
            {
              type: 'legoMarketingHero'
            },
            {
              type: 'legoMarketingHeroFooter'
            },
            {
              type: 'legoMarketingHeroSlider'
            },
            {
              type: 'legoFlex'
            },
            {
              type: 'legoPromoBanner'
            },
            {
              type: 'legoSignup'
            },
            {
              type: 'legoSimpleHeader'
            },
            {
              type: 'legoSimpleText'
            },
            {
              type: 'legoTeam'
            },
            {
              type: 'legoTestimonial'
            },
            {
              type: 'legoTestimonialSlider'
            }
          ]
        }
      ]
    },
    {
      name: 'forceRender',
      title: 'Force Render',
      type: 'boolean'
    }
  ]
}
