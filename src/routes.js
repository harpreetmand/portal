import Splash from './components/Splash'
import Home from './components/Home'
import Category from './components/Category'
import Products from './components/Products'
import Product from './components/Product'

export const routes = [
    {path: '/', component: Home},
    { path: '/brands', name: 'home', component: Home},
    { path: '/brand/:id', component: Category,
        children: [
            {
                path:':categoryId',
                component: Products
            },
            {
                path: ':categoryId/:productId',
                component: Product
            }
        ]
    },
    // { path: '/brand/:id/:categoryId/:productId', component: Product},
]
