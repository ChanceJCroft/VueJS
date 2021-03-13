const helloWorld = new Vue({
    el: '#helloVue',
    data: {
        title: "Hello, World!",
        message: "Learning Vue, exciting!"
    }
})

const example = new Vue({
    el: '#example',
    data: {
        title: "Hello",
        message: "Test message",
        name: "Chance",
        img: {
            src: 'https://www.gameinformer.com/sites/default/files/styles/full/public/2021/02/15/ca8e43ea/valheimhero7.jpg',
            alt: 'Picture'
        }
    }
})


const book = new Vue({
    el: '#book',
    data: {
        title: 'Captain Underpants',
        author: 'Some dude who wrote stuff, or a woman I dont know',
        summary: 'It is what it sounds like',
        showDetail: false
    },
    methods: {
        sayHello: function(){
            alert(this.title)
        },
        toggleDetails: function(){
            this.showDetail = !this.showDetail;
        }

    }
})