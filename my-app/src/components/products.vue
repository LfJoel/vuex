<template>
    <div id="products-store">

        <div class="product" v-for="(product, index) in saleProducts" :key="index">
            <!-- <img src="product1.jpg" alt="Product 1"> -->
            <h3 class="name">{{ product.name }}</h3>
            <p class="price">£{{ product.price }}</p>
            <!-- <button>Add to Cart</button> -->
        </div>
        <div>
            <button class="btn" v-on:click="reducePrice">Reduce Price</button>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
        },
        saleProducts() {
            return this.$store.getters.saleProducts;
        }
    },
    methods: {
        reducePrice: function () {
            this.$store.dispatch('reducePrice');
        }
    }
}
</script>
<style scoped>
.product {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    width: 200px;
    display: inline-block;
    text-align: center;
}

ul {
    display: flex;
    flex-direction: row;
}

ul li {
    list-style: none;
}

.product img {
    max-width: 100%;
}

.btn {
    background-color: rgb(10, 10, 10);
    color: #ffffff;
    padding: 10px;
    border-radius: 10px;
}</style>