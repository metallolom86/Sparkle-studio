export default {
  name: "blogPost",
  title: "Blog Post",
  description:
    "Everything from crafts to recipes, press, product updates and news.",
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
      name: "slug",
      title: "Slug",
      validation: Rule => Rule.required(),
      type: "slug",
      options: {
        source: "title"
      }
    },
    {
      name: "date",
      title: "Post Date",
      validation: Rule => Rule.required(),
      type: "datetime"
    },
    {
      name: "logo",
      title: "Cover Image",
      type: "image"
    },
    {
      name: "postExcerpt",
      title: "Teaser",
      validation: Rule => Rule.required(),
      type: "text"
    },
    {
      name: "text",
      title: "Content",
      validation: Rule => Rule.required(),
      type: "array",
      of: [
        {
          type: "block"
        },
        {
          type: "image"
        }
      ]
    },
    {
      name: "postTextMedia",
      title: "In-Post Stories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "blogTextAndMedia"
            }
          ]
        }
      ]
    },
    {
      name: "categories",
      title: "Categories",
      validation: Rule => Rule.required(),
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "blogCategory"
            }
          ]
        }
      ]
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            layout: "tags"
          }
        }
      ]
    },
    {
      name: "contributors",
      title: "Contributors",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "contributor"
            }
          ]
        }
      ]
    },
    {
      name: "footerCalloutTitle",
      title: "About This Post Section - Title",
      type: "string"
    },
    {
      name: "footerCalloutText",
      title: "About This Post Section - Text",
      type: "array",
      of: [
        {
          type: "block"
        },
        {
          type: "image"
        }
      ]
    },
    {
      name: "postShortText",
      title: "Post Short Text",
      hidden: true,
      type: "reference",
      to: [
        {
          type: "products"
        },
        {
          type: "series"
        },
        {
          type: "blogCategory"
        },
        {
          type: "age"
        },
        {
          type: "topic"
        },
        {
          type: "productCategories"
        },
        {
          type: "collection"
        },
        {
          type: "story"
        },
        {
          type: "characters"
        },
        {
          type: "blogPost"
        },
        {
          type: "contributor"
        },
        {
          type: "season"
        },
        {
          type: "blogSettings"
        },
        {
          type: "homeScreenFeatures"
        },
        {
          type: "storeSettings"
        },
        {
          type: "marketingHomepageSettings"
        },
        {
          type: "marketingBanner"
        },
        {
          type: "appDownloadBanner"
        },
        {
          type: "featureBanner"
        },
        {
          type: "trialBanner"
        },
        {
          type: "aboutPageSettings"
        },
        {
          type: "staff"
        },
        {
          type: "fAQ"
        },
        {
          type: "fAQCategories"
        },
        {
          type: "fAQSettings"
        },
        {
          type: "contactPageSettings"
        },
        {
          type: "mobileSettings"
        },
        {
          type: "textPageTemplate"
        },
        {
          type: "giftSubscription"
        },
        {
          type: "freeSubscriptions"
        },
        {
          type: "discountCoupons"
        },
        {
          type: "seriesSettings"
        },
        {
          type: "collectionSettings"
        },
        {
          type: "blogTextAndMedia"
        },
        {
          type: "landingPageGiftSubscriptions"
        },
        {
          type: "landingPageSlide"
        },
        {
          type: "landingPageCampaignPage"
        },
        {
          type: "landingPageStory"
        },
        {
          type: "marketingHomepageHeroSlides"
        },
        {
          type: "featuredTestimonials"
        },
        {
          type: "homepageSampleStories"
        },
        {
          type: "legoFeaturedCollection"
        },
        {
          type: "legoCollectionGrid"
        },
        {
          type: "legoPage"
        },
        {
          type: "metadata"
        },
        {
          type: "legoPromoBanner"
        },
        {
          type: "legoTestimonial"
        },
        {
          type: "style"
        },
        {
          type: "color"
        },
        {
          type: "legoMarketingHero"
        },
        {
          type: "bitTextPanel"
        },
        {
          type: "bitImagePanel"
        },
        {
          type: "legoFlex"
        },
        {
          type: "legoSignup"
        },
        {
          type: "legoMarketingContent"
        },
        {
          type: "legoSimpleHeader"
        },
        {
          type: "legoSimpleText"
        },
        {
          type: "legoTeam"
        },
        {
          type: "legoAudioStories"
        },
        {
          type: "legoFreeItemsGrid"
        },
        {
          type: "legoTestimonialSlider"
        },
        {
          type: "legoAppInfo"
        },
        {
          type: "legoMarketingHeroFooter"
        },
        {
          type: "audioStoryItem"
        },
        {
          type: "legoMarketingHeroSlider"
        },
        {
          type: "cancelDialog"
        },
        {
          type: "test1"
        }
      ]
    }
  ]
};
