const checkRole = require('../policies/checkRole');

module.exports = {
  slug: 'navigation-repeater',
  label: 'Navigation Repeater',
  policies: {
    update: ({ req: { user } }) => checkRole(['admin', 'user'], user),
    read: () => true,
  },
  fields: [
    {
      name: 'repeater',
      label: 'Repeater',
      type: 'repeater',
      localized: true,
      fields: [{
        name: 'text',
        label: 'Text',
        type: 'text',
      }, {
        name: 'textarea',
        label: 'Textarea',
        type: 'textarea',
      }],
    },
  ],
};
