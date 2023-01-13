console.log('JS OK');
console.log('Vue OK', Vue);

const newDate = new Date().toLocaleString();

const app = Vue.createApp({
    name: 'Boolzapp',
    data(){
        return {
            user: {
                name: 'Samuele Passiatore',
                avatar: '_io'
              },

            contacts: [
                 {
                   name: 'Michele',
                   avatar: '_1',
                   visible: true,
                   messages: [
                    {
                     date: '10/01/2020 15:30:55',
                     text: 'Hai portato a spasso il cane?',
                     status: 'sent'
                   },
                   {
                     date: '10/01/2020 15:50:00',
                     text: 'Ricordati di dargli da mangiare',
                     status: 'sent'
                   },
                   {
                     date: '10/01/2020 16:15:22',
                     text: 'Tutto fatto!',
                     status: 'received'
                   }
                   ],
                 },
                 {
                   name: 'Fabio',
                   avatar: '_2',
                   visible: true,
                   messages: [{
                     date: '20/03/2020 16:30:00',
                     text: 'Ciao come stai?',
                     status: 'sent'
                   },
                   {
                     date: '20/03/2020 16:30:55',
                     text: 'Bene grazie! Stasera ci vediamo?',
                     status: 'received'
                   },
                   {
                     date: '20/03/2020 16:35:00',
                     text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                     status: 'sent'
                   }
                   ],
                 },
                 {
                   name: 'Samuele',
                   avatar: '_3',
                   visible: true,
                   messages: [{
                     date: '28/03/2020 10:10:40',
                     text: 'La Marianna va in campagna',
                     status: 'received'
                   },
                   {
                     date: '28/03/2020 10:20:10',
                     text: 'Sicuro di non aver sbagliato chat?',
                     status: 'sent'
                   },
                   {
                     date: '28/03/2020 16:15:22',
                     text: 'Ah scusa!',
                     status: 'received'
                   }
                   ],
                 },
                   {               
                   name: 'Luisa',
                   avatar: '_4',
                   visible: true,
                   messages: [{
                     date: '10/01/2020 15:30:55',
                     text: 'Lo sai che ha aperto una nuova pizzeria?',
                     status: 'sent'
                   },
                   {
                     date: '10/01/2020 15:50:00',
                     text: 'Si, ma preferirei andare al cinema',
                     status: 'received'
                   }
                   ],
                 },
            ], 
            currentIndex: 0,  
            newMessage: ''
        }
    },
    methods: {
      // funzione che assegna all'array l'indice corrente
      changeCurrentIndex(index){
        console.log(this.currentIndex);
        return this.currentIndex = index;
      },

      // funzione che aggiunge un nuovo messaggio alla chat
      sentMessage(){
        const message = {
            date: new Date().toLocaleString(),
            text: this.newMessage,
            status: 'sent'
        }
        this.contacts[this.currentIndex].messages.push(message);
        this.clearInput();
        this.receivedMessage();
      },

      clearInput(){
        this.newMessage = '';
      },

      receivedMessage(){
        setTimeout (()=>{
            const message = {
                date: new Date().toLocaleString(),
                text: 'ok',
                status: 'received'
            }
            this.contacts[this.currentIndex].messages.push(message);
        },1000)
     }
    }

});

app.mount('#root');