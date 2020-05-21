export default {
  name: '10gqnUyH7MY6aUAGwYMWqQ',
  title: 'Blog Post',
  description:
    'Everything from crafts to recipes, press, product updates and news.',
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
      name: 'slug',
      title: 'Slug',
      validation: Rule => Rule.required(),
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'date',
      title: 'Post Date',
      validation: Rule => Rule.required(),
      type: 'datetime'
    },
    {
      name: 'logo',
      title: 'Cover Image',
      type: 'image'
    },
    {
      name: 'postExcerpt',
      title: 'Teaser',
      validation: Rule => Rule.required(),
      type: 'text'
    },
    {
      name: 'text',
      title: 'Content',
      validation: Rule => Rule.required(),
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
      name: 'postTextMedia',
      title: 'In-Post Stories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'blogTextAndMedia'
            }
          ]
        }
      ]
    },
    {
      name: 'categories',
      title: 'Categories',
      validation: Rule => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: '6XwpTaSiiI2Ak2Ww0oi6qa'
            }
          ]
        }
      ]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            layout: 'tags'
          }
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
              type: '6CN2bBuW2WQyaG4wwgwcwW'
            }
          ]
        }
      ]
    },
    {
      name: 'footerCalloutTitle',
      title: 'About This Post Section - Title',
      type: 'string'
    },
    {
      name: 'footerCalloutText',
      title: 'About This Post Section - Text',
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
      name: 'postShortText',
      title: 'Post Short Text',
      hidden: true,
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
    }
  ]
}
