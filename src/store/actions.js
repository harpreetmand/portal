import Vue from 'vue'

export const loadData = ({commit}) => {
    Vue.http.get('/api/brands/read')
        .then(response => response.json())
        .then(data => {
            const brands = data
            commit('SET_BRANDS', brands)
        })
}
export const loadCategorys = ({commit}, g) => {
    Vue.http.get(`/api/brands/${g}/categories/read`)
        .then(response => response.json())
        .then(data => {
            const categories = data
            commit('SET_CATEGORIES', categories)
        }).catch(function (error) {
            // window.location.href = '/'
            if (error.status === 401) {
            commit('LOGOUT')
            }
        })
}
export const loadProducts = ({commit}, g) => {
    Vue.http.get(`/api/categories/${g}/products/read`)
        .then(response => response.json())
        .then(data => {
            const products = data
            commit('SET_PRODUCTS', products)
        })
}
export const searchFor = ({commit}, g) => {
    Vue.http.get(`/api/search?search=${g}`)
        .then(response => response.json())
        .then(data => {
            const products = data
            commit('SEARCH_RESULTS', products)
        })
}

export const getCarousel = ({commit}, carousel) => {
    commit('SET_CAROUSEL', carousel)
}
export const login = ({commit}, creds) => {
    commit('LOGIN') // show spinner

    Vue.http.post('api/sessions/create', { email: creds.username, password: creds.password })
        // .then(response => {
        //   return response.json();
        // })
        .then(data => {
            localStorage.setItem('token', 'true')
            commit('LOGIN_SUCCESS')
            // this.$router.push({ path: '/brands' })
            // resolve()
        }
        ).catch(e => {
            console.log(e)
        })
}
