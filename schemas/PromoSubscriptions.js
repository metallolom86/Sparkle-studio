export default {
  name: "promoSubscriptions",
  title: "Promo Subscriptions",
  description:
    "These work opposite of Gift Subscriptions. Users will be able to enter a code we provide to them and their email will be added to an entry named after the code. Then they will have a subscription for X amount of days and if they try to use the code again, will be denied",
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
      type: "string"
    },
    {
      name: "price",
      title: "Price",
      type: "string"
    },
    {
      name: "stripeId",
      title: "Stripe ID",
      type: "string"
    },
    {
      name: "code",
      title: "Subscription Code",
      type: "string"
    },
    {
      name: "email",
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
