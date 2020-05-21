export default {
  name: 'legoTestimonialSlider',
  title: 'LEGO: Testimonial Slider',
  description: "Slider with user's feedback",
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
      name: 'style',
      title: 'Style',
      type: 'reference',
      to: [
        {
          type: '2PqfXUJwE8qSYKuM0U6w8M'
        },
        {
          type: 'sFzTZbSuM8coEwygeUYes'
        },
        {
          type: '6XwpTaSiiI2Ak2Ww0oi6qa'
        },
        {
          type: '2C4Vf04Sn6yM4iSKAEEIcW'
        },
        {
          type: '5Iq0WgjphSei2ywoG6QA4e'
        },
        {
          type: '4ouAGlpdUIO6YimUi4yy4c'
        },
        {
          type: '5GPHYPgQaQYouKOwM8Weus'
        },
        {
          type: '42NU4G3ny02SUCEmMSamMS'
        },
        {
          type: '3E6bdvlfmMi2M4gmKuOG2e'
        },
        {
          type: '10gqnUyH7MY6aUAGwYMWqQ'
        },
        {
          type: '6CN2bBuW2WQyaG4wwgwcwW'
        },
        {
          type: '4mhNr6LwSA0cw0suaiuACC'
        },
        {
          type: '2ACHCxca40sUgwmcYySOOk'
        },
        {
          type: '5k3cLJiPcWouiimsoiUeoE'
        },
        {
          type: '6AvOrquQaAqY0U4KmYaSWC'
        },
        {
          type: '6v4b8oMiROwOU8qWkKeUmg'
        },
        {
          type: '41Vqqj5gJqgQ6sG2C2IUmO'
        },
        {
          type: 'SwkS9yZoMCqKMEE4GC6KK'
        },
        {
          type: 'AtpxV01AFEKoaoGEeYSAo'
        },
        {
          type: 'V1oMjOcBY4k84Yk4K6kiW'
        },
        {
          type: 'AtoxSxEmre2K6o6Q0YGA8'
        },
        {
          type: '4gwUzKU8XYi8mMoUayQKO6'
        },
        {
          type: '27NqSErDgME0M6owKA6oe6'
        },
        {
          type: '2X9njs7Hm0mUc8ocASEW0A'
        },
        {
          type: '1gpcOO1K5wa4MqGoquWuOG'
        },
        {
          type: '2TVbMFwStaGS2w0oQEU042'
        },
        {
          type: '1BItkEqpoUQcyWAocwGkoG'
        },
        {
          type: '3cnHKbODwcgq4UYW4oWwaU'
        },
        {
          type: '3IItgDW8vuUSiW028IseiW'
        },
        {
          type: 'freeSubscriptions'
        },
        {
          type: 'discountCoupons'
        },
        {
          type: 'seriesSettings'
        },
        {
          type: 'collectionSettings'
        },
        {
          type: 'blogTextAndMedia'
        },
        {
          type: 'landingPageGiftSubscriptions'
        },
        {
          type: 'landingPageSlide'
        },
        {
          type: 'landingPageCampaignPage'
        },
        {
          type: 'landingPageStory'
        },
        {
          type: 'marketingHomepageHeroSlides'
        },
        {
          type: 'featuredTestimonials'
        },
        {
          type: 'homepageSampleStories'
        },
        {
          type: 'legoFeaturedCollection'
        },
        {
          type: 'legoCollectionGrid'
        },
        {
          type: 'legoPage'
        },
        {
          type: 'metadata'
        },
        {
          type: 'legoPromoBanner'
        },
        {
          type: 'legoTestimonial'
        },
        {
          type: 'style'
        },
        {
          type: 'color'
        },
        {
          type: 'legoMarketingHero'
        },
        {
          type: 'bitTextPanel'
        },
        {
          type: 'bitImagePanel'
        },
        {
          type: 'legoFlex'
        },
        {
          type: 'legoSignup'
        },
        {
          type: 'legoMarketingContent'
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
          type: 'legoAudioStories'
        },
        {
          type: 'legoFreeItemsGrid'
        },
        {
          type: 'legoTestimonialSlider'
        },
        {
          type: 'legoAppInfo'
        },
        {
          type: 'legoMarketingHeroFooter'
        },
        {
          type: 'audioStoryItem'
        },
        {
          type: 'legoMarketingHeroSlider'
        },
        {
          type: 'cancelDialog'
        },
        {
          type: 'test1'
        }
      ]
    },
    {
      name: 'legOs',
      title: 'LEGOs',
      validation: Rule => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'legoMarketingHero'
            },
            {
              type: 'legoTestimonial'
            }
          ]
        }
      ]
    },
    {
      name: 'autoplaySpeed',
      title: 'Autoplay speed',
      type: 'number'
    },
    {
      name: 'autoplay',
      title: 'Autoplay',
      validation: Rule => Rule.required(),
      type: 'boolean'
    },
    {
      name: 'dots',
      title: 'Dots',
      type: 'boolean'
    },
    {
      name: 'infinite',
      title: 'Infinite',
      validation: Rule => Rule.required(),
      type: 'boolean'
    },
    {
      name: 'speed',
      title: 'Speed',
      validation: Rule => Rule.required(),
      type: 'number'
    },
    {
      name: 'slidesToShow',
      title: 'Slides to show',
      validation: Rule => Rule.required(),
      type: 'number'
    },
    {
      name: 'slidesToScroll',
      title: 'Slides to scroll',
      type: 'number'
    },
    {
      name: 'fade',
      title: 'Fade',
      validation: Rule => Rule.required(),
      type: 'boolean'
    }
  ]
}
