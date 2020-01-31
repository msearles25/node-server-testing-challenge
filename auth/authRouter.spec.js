const request = require('supertest');

const auth = require('../server');

const db = require('../data/dbConfig');
    describe('authRouter', function() {
        describe('POST /register', function() {

            beforeEach(async () => {
                await db('users').truncate();
            })
    
            it('should create new user', function() {
                return request(auth)
                    .post('/api/auth/register')
                    .send({
                        username: 'testing name', 
                        password: 'test', 
                        department: 'test'
                    })
                    .expect('Content-type', /json/)
                    .then(res => {
                        expect(res.type).toMatch(/json/i)
                    })
            })
            
            it('should return 201', function() {
                    return request(auth)
                        .post('/api/auth/register')
                        .send({
                            username: 'testing 1', 
                            password: 'test', 
                            department: 'test'
                        })
                        .expect('Content-type', /json/)
                        .then(res => {
                            expect(res.status).toBe(201)
                        })
                })
           
        })
    })
  