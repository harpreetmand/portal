const state = {
  sidebarBrands: [],
  sidebarCategories: [],
  allProductsdb: [],
  carousel: [],
  isLoggedIn: !!localStorage.getItem('token'),
  searchResults: []
}

const mutations = {
  'SET_BRANDS' (state, brands) {
    state.sidebarBrands = brands
  },
  'SET_CATEGORIES' (state, categories) {
      state.sidebarCategories = categories
  },
  'SET_PRODUCTS' (state, products) {
      state.allProductsdb = products
      console.log(products)
  },
  'SET_CAROUSEL' (state, carousel) {
      state.carousel = carousel
      console.log(carousel.filter(image => image.type == 'image'))
  },
    'LOGIN' (state) {
        state.pending = true
    },
    'LOGIN_SUCCESS' (state) {
        state.isLoggedIn = true
        state.pending = false
        console.log(state)
    },
    'LOGOUT' (state) {
        state.isLoggedIn = false
        console.log('user now logged out')
    },
    'SEARCH_RESULTS' (state, products) {        
        console.log(products)
    }
}
const getters = {
    allBrands (state) {
        return state.sidebarBrands
    },
    allCategories (state) {
        return state.sidebarCategories
    },
    allProducts (state) {
        return state.allProductsdb
    },
    getCarousel (state) {
        return state.carousel
    },
    isLoggedIn (state) {
        return state.isLoggedIn
    }
}
export default {
    state,
    mutations,
    getters
}
