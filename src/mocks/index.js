import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)

mock.onGet('/clients').reply(200, {
    clientList: [
        {
            id: 1,
            name: 'Bruce Wayne',
            job: 'Entrepreneur',
            age: '43',
            town: 'Gotham',
            image: 'batman.jpg'
        },{
            id: 2,
            name: 'Barry Allen',
            job: 'Detective',
            age: '28',
            town: 'Central City',
            image: 'flash.jpg'
        }, {
            id: 3,
            name: 'Captain Rogers',
            job: 'Soldier',
            age: '99',
            town: 'New York, Queens',
            image: 'captain america.jpg'
        }, {
            id: 4,
            name: 'Hellboy',
            job: 'Detective',
            age: '50',
            town: 'Unknown',
            image: 'hellboy.jpg'
        }, {
            id: 5,
            name: 'Tony Stark',
            job: 'Entrepreneur',
            age: '44',
            town: 'New York',
            image: 'iron man.jpg'
        }, {
            id: 6,
            name: 'Diana Prince',
            job: 'Archaelogist',
            age: '5000',
            image: 'ww.jpg'
        }, {
            id: 7,
            name: 'Hal Jordan',
            job: 'Soldier',
            age: '38',
            image: 'green lantern.jpg'
        }, {
            id: 8,
            name: 'Natasha Romanova',
            job: 'Soldier',
            age: '35',
            image: 'black widow.jpg'
        },
    ]
})
