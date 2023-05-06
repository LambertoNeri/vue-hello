const app = Vue.createApp({
    data() {    // = data: function() {
        return{
           randomPhrase: 'Sangleyasha, 216th Retri Paladin World',
           picture: 'https://picsum.photos/200/300',
           insertWhatever: '',

        }
    },
    methods: {
        
    },
});

//  potrebbe essere necessario scrivere altre istruzioni prima di mount
app.mount('#app');