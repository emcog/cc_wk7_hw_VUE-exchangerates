import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            currencies: {},
            exchangeRate: 0,
            amountIn: 0,
            amountOut: 0
        },
        computed: {
            calculateExchange: function(){
                return this.amountIn / this.exchangeRate;
            }
        },
        mounted(){
            this.fetchCurrenceis()
        },
        methods: {
            fetchCurrenceis: function(){
                fetch("https://api.exchangeratesapi.io/latest")
                    .then(response => response.json())
                        .then(data => this.currencies = data.rates);
            }
        }
    })
})