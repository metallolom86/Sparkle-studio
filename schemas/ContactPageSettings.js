export default {
  name: "contactPageSettings",
  title: "Contact Page Settings",
  type: "document",
  preview: {
    select: {
      title: "jumbotronTitle"
    }
  },
  fields: [
    {
      name: "jumbotronImage",
      title: "Jumbotron Image",
      type: "file"
    },
    {
      name: "jumbotronTitle",
      title: "Jumbotron Title",
      type: "string"
    },
    {
      name: "jumbotronSubtext",
      title: "Jumbotron Subtext",
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
      name: "jumbotronButtonText",
      title: "Jumbotron Button Text",
      type: "string"
    },
    {
      name: "jumbotronButtonUrl",
      title: "Jumbotron Button Url",
      type: "url"
    },
    {
      name: "contactSupportTitle",
      title: "Contact Support Title",
      type: "string"
    },
    {
      name: "contactSupportDescription",
      title: "Contact Support Description",
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
      name: "contactSupportEmail",
      title: "Contact Support Email",
      type: "string"
    },
    {
      name: "contactSupportEmailUrl",
      title: "Contact Support Email Url",
      type: "url"
    },
    {
      name: "pressTitle",
      title: "Press TItle",
      type: "string"
    },
    {
      name: "pressDescription",
      title: "Press Description",
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
      name: "pressEmail",
      title: "Press Email",
      type: "string"
    },
    {
      name: "pressEmailUrl",
      title: "Press Email Url",
      type: "url"
    },
    {
      name: "feedbackTitle",
      title: "Feedback Title",
      type: "string"
    },
    {
      name: "feedbackDescription",
      title: "Feedback Description",
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
      name: "feedbackEmail",
      title: "Feedback Email",
      type: "string"
    },
    {
      name: "feedbackEmailUrl",
      title: "Feedback Email Url",
      type: "url"
    },
    {
      name: "inquiriesTitle",
      title: "Inquiries Title",
      type: "string"
    },
    {
      name: "inquiriesDescription",
      title: "Inquiries Description",
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
      name: "inquiriesEmail",
      title: "Inquiries Email",
      type: "string"
    },
    {
      name: "inquiriesEmailUrl",
      title: "Inquiries Email Url",
      type: "url"
    }
  ]
};
