const request = require('supertest');
const auth = require('../server');

describe('userRouter', function() {
    describe('DELETE /delete/:id', function() {
        it('should return 201', function() {
            return request(auth)
                .delete('/api/users/delete/1')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
        it('should delete a user and be truthy', function() {
            return request(auth)
                .delete('/api/users/delete/1')
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        }) 
    })
})
    