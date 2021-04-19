export const config = {
  screens: {
    Home: {
      path: 'home/:id?',
      parse: {
        id: (id: String) => `${id}`,
      },
    },
    Billing: {
      path: 'billing/:id?',
      parse: {
        id: (id: String) => `${id}`,
      },
    },
  },
};
