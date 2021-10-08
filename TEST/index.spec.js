const request = require('supertest')
const app = require('../app')

describe('GET /', () => {
    it('responds with "61160121 Sakarin Juajan"', (done) => {
        request(app).get('/').expect('61160121 Sakarin Juajan', done)
    })
})