console.log('JS OK');
console.log('Vue OK', Vue);

const app = Vue.createApp({
    name: 'Boolzapp',
    data(){
        return {
           
        }
    },
});

app.mount('#root');