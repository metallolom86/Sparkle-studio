export default {
  name: "giftSubscription",
  title: "Gift Subscription",
  description:
    "NOTE: THESE are the Gift Subscriptions you're looking for. People have to pay for these. See Free Subscriptions for free ones",
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
      name: "numberOfMonths",
      title: "Number Of Months",
      type: "string"
    },
    {
      name: "price",
      title: "Price",
      validation: Rule => Rule.required(),
      type: "string"
    },
    {
      name: "stripeId",
      title: "Stripe ID",
      validation: Rule => Rule.required(),
      type: "string"
    },
    {
      name: "couponCode",
      title: "Subscription Code",
      validation: Rule => Rule.required(),
      type: "string"
    },
    {
      name: "customers",
      title: "Customer Email Addresses",
      type: "array",
      of: [
        {
          type: "string",
          options: {}
        }
      ]
    }
  ]
};
