import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import aProducts from "./Products";
import aSeries from "./Series";
import aBlogCategory from "./BlogCategory";
import aAge from "./Age";
import aTopic from "./Topic";
import aProductCategories from "./ProductCategories";
import aCollection from "./Collection";
import aStory from "./Story";
import aCharacters from "./Characters";
import aBlogPost from "./BlogPost";
import aContributor from "./Contributor";
import aSeason from "./Season";
import aBlogSettings from "./BlogSettings";
import aHomeScreenFeatures from "./HomeScreenFeatures";
import aStoreSettings from "./StoreSettings";
import aMarketingHomepageSettings from "./MarketingHomepageSettings";
import aMarketingBanner from "./MarketingBanner";
import aAppDownloadBanner from "./AppDownloadBanner";
import aFeatureBanner from "./FeatureBanner";
import aTrialBanner from "./TrialBanner";
import aAboutPageSettings from "./AboutPageSettings";
import aStaff from "./Staff";
import aFAQ from "./FAQ";
import aFAQCategories from "./FAQCategories";
import aFAQSettings from "./FAQSettings";
import aContactPageSettings from "./ContactPageSettings";
import aMobileSettings from "./MobileSettings";
import aTextPageTemplate from "./TextPageTemplate";
import aGiftSubscription from "./GiftSubscription";
import aPromoSubscriptions from "./PromoSubscriptions";
import aPromoCodes from "./PromoCodes";
import aSeriesSettings from "./SeriesSettings";
import aCollectionSettings from "./CollectionSettings";
import aBlogTextAndMedia from "./BlogTextAndMedia";
import aLandingPageGiftSubscriptions from "./LandingPageGiftSubscriptions";
import aLandingPageSlide from "./LandingPageSlide";
import aLandingPageCampaignPage from "./LandingPageCampaignPage";
import aLandingPageStory from "./LandingPageStory";
import aMarketingHomepageHeroSlides from "./MarketingHomepageHeroSlides";
import aFeaturedTestimonials from "./FeaturedTestimonials";
import aHomepageSampleStories from "./HomepageSampleStories";
import aLegoFeaturedCollection from "./LegoFeaturedCollection";
import aLegoItemsGrid from "./LegoItemsGrid";
import aLegoPage from "./LegoPage";
import aMetadata from "./Metadata";
import aLegoPromoBanner from "./LegoPromoBanner";
import aLegoTestimonial from "./LegoTestimonial";
import aStyle from "./Style";
import aColor from "./Color";
import aLegoMarketingHero from "./LegoMarketingHero";
import aBitTextPanel from "./BitTextPanel";
import aBitImagePanel from "./BitImagePanel";
import aLegoPanels from "./LegoPanels";
import aLegoSignup from "./LegoSignup";
import aLegoMarketingContent from "./LegoMarketingContent";
import aLegoSimpleHeader from "./LegoSimpleHeader";
import aLegoSimpleText from "./LegoSimpleText";
import aLegoTeam from "./LegoTeam";
import aLegoAudioStories from "./LegoAudioStories";
import aLegoFreeItemsGrid from "./LegoFreeItemsGrid";
import aLegoTestimonialSlider from "./LegoTestimonialSlider";
import aLegoAppInfo from "./LegoAppInfo";
import aLegoMarketingHeroFooter from "./LegoMarketingHeroFooter";
import aAudioStoryItem from "./AudioStoryItem";
import aLegoMarketingHeroSlider from "./LegoMarketingHeroSlider";
import aSuccessCancelationDialog from "./SuccessCancelationDialog";
import aTest1 from "./Test1";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    aProducts,
    aSeries,
    aBlogCategory,
    aAge,
    aTopic,
    aProductCategories,
    aCollection,
    aStory,
    aCharacters,
    aBlogPost,
    aContributor,
    aSeason,
    aBlogSettings,
    aHomeScreenFeatures,
    aStoreSettings,
    aMarketingHomepageSettings,
    aMarketingBanner,
    aAppDownloadBanner,
    aFeatureBanner,
    aTrialBanner,
    aAboutPageSettings,
    aStaff,
    aFAQ,
    aFAQCategories,
    aFAQSettings,
    aContactPageSettings,
    aMobileSettings,
    aTextPageTemplate,
    aGiftSubscription,
    aPromoSubscriptions,
    aPromoCodes,
    aSeriesSettings,
    aCollectionSettings,
    aBlogTextAndMedia,
    aLandingPageGiftSubscriptions,
    aLandingPageSlide,
    aLandingPageCampaignPage,
    aLandingPageStory,
    aMarketingHomepageHeroSlides,
    aFeaturedTestimonials,
    aHomepageSampleStories,
    aLegoFeaturedCollection,
    aLegoItemsGrid,
    aLegoPage,
    aMetadata,
    aLegoPromoBanner,
    aLegoTestimonial,
    aStyle,
    aColor,
    aLegoMarketingHero,
    aBitTextPanel,
    aBitImagePanel,
    aLegoPanels,
    aLegoSignup,
    aLegoMarketingContent,
    aLegoSimpleHeader,
    aLegoSimpleText,
    aLegoTeam,
    aLegoAudioStories,
    aLegoFreeItemsGrid,
    aLegoTestimonialSlider,
    aLegoAppInfo,
    aLegoMarketingHeroFooter,
    aAudioStoryItem,
    aLegoMarketingHeroSlider,
    aSuccessCancelationDialog,
    aTest1
  ])
});
