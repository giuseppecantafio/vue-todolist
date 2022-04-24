const toodolist = new Vue({
    el: '#app',

    data: {
        viaggio: [
            {
                done: false,
                todo: 'compra vestiti',
              
            },
            {
                done: false,
                todo: 'compra valigia',
            },
            {
                done: true,
                todo: 'trovare passaporto',
            },
        ],
        nuovoTodo: '',  
    },

    methods: {

    },
})