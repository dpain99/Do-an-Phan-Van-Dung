// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';
const Landing_Page = '/';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password')
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  components: '/components'
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  lading_page: Landing_Page,
  general: {
    map: path(ROOTS_DASHBOARD, '/map')
  },
  map: {
    root: path('/', '/map'),
    all: path(ROOTS_DASHBOARD, '/map/all')
  },
  feature_location: {
    root: path(ROOTS_DASHBOARD, '/feature-location'),
    map: path(ROOTS_DASHBOARD, '/feature-location/map')
  },
  my_itinerary: {
    root: path(ROOTS_DASHBOARD, '/my-itinerary')
  },
  history_culture: {
    root: path(ROOTS_DASHBOARD, '/history-culture')
  },
  food_locations: {
    root: path(ROOTS_DASHBOARD, '/food-locations')
  },
  night_travels: {
    root: path(ROOTS_DASHBOARD, '/night-travels')
  },
  feature_blog: {
    root: path(ROOTS_DASHBOARD, '/feature-blog')
  }
};

export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';
