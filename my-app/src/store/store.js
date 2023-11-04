import { setTimeout } from 'core-js';
import { createStore } from 'vuex'


const store = createStore({
    strict: true,
    state: {
        products: [
            { name: 'tea', price: 20 },
            { name: 'cold coffee', price: 40 },
            { name: 'hot coffee', price: 20 }

        ]
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                }
            });
            return saleProducts;
        }
    },
    mutations: {
        reducePrice: state => {
            state.products.forEach(product => {
                product.price -= 1;
            })
        }
    },
    actions:{
        reducePrice :context => {
            setTimeout(function(){
                context.commit('reducePrice')
            },2000)
        }
    }
})
export default store;
