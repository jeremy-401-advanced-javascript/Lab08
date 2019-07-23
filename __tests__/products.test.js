'use strict';

const {server} = require('../src/app.js');
const supergoose = require('./supergoose.js');
const mockRequest = supergoose(server);


describe('Products API', () => {
  it('can post() a new player', () => {
    let obj = {name:'John'};
    return mockRequest.post('/api/v1/products')
      .send(obj)
      .then(data => {
        let record = data.body;
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a product', () => {
    let obj = {name:'John'};
    return mockRequest.post('/api/v1/products')
      .send(obj)
      .then(data => {
        return mockRequest.get(`/api/v1/products/${data.body.id}`)
          .then(record => {
            Object.keys(obj).forEach(key =>{
              expect(record.body[key]).toEqual(obj[key]);
            });
          });
      });
  });

});