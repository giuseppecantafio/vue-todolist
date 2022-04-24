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
        rimuovi(index){
            this.viaggio.splice(index,1)
        },
        aggiungi(){
            let newObj = {
                done: false,
                todo: this.nuovoTodo,
            }
            this.viaggio.push(newObj);
            this.nuovoTodo = ''
        }
    },

})