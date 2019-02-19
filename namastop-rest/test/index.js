const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();

chai.use(chaiHttp);

describe('Feedbacks', () => {
  
    describe('/GET Feedbacks', () => {
          it('Get all Feedbacks', (done) => {
              chai.request('http://localhost:3333')
                  .get('/api/feedbacks')
                  .end((err, res) => {
                    res.should.have.status(200);
                    res.body.feedbacks.should.be.a('array');
                    done();
                  });
          });
      });
    
    describe('/POST Feedback', () => {
          it('Create a Feedback', (done) => {
              let feedback = {
                  to: "teste", 
                  text: "teste",
                  from: "teste"
              }
                chai.request('http://localhost:3333')
                .post('/api/feedbacks')
                .send(feedback)
                .end((err, res) => {
                    res.should.have.status(200);
                  done();
                });
          });
  
      });
    
    describe('/GET/:id feedback', () => {
          it('Get a Feedback', (done) => {
              let id_ = "5c6b746c21f8be386cfb2719";
                chai.request('http://localhost:3333')
                .get('/api/feedbacks/' + id_)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('feedback')
                    .which.is.an('object')
                    .and.has.property('_id')
                  done();
                });
    
          });
      });
    
  });