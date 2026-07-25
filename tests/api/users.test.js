const chai = require('chai');
const axios = require('axios');
const expect = chai.expect;

// Base configuration
const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('API Test Suite - User Management', () => {
  let userId;

  describe('GET /users', () => {
    it('should return all users with status 200', async () => {
      const response = await axios.get(`${BASE_URL}/users`);
      expect(response.status).to.equal(200);
      expect(response.data).to.be.an('array');
      expect(response.data.length).to.be.greaterThan(0);
    });

    it('should return users with required fields', async () => {
      const response = await axios.get(`${BASE_URL}/users`);
      const user = response.data[0];
      expect(user).to.have.property('id');
      expect(user).to.have.property('name');
      expect(user).to.have.property('email');
      expect(user).to.have.property('phone');
    });
  });

  describe('GET /users/:id', () => {
    it('should return a specific user by ID', async () => {
      const response = await axios.get(`${BASE_URL}/users/1`);
      expect(response.status).to.equal(200);
      expect(response.data.id).to.equal(1);
      expect(response.data.name).to.equal('Leanne Graham');
    });

    it('should return 404 for non-existent user', async () => {
      try {
        await axios.get(`${BASE_URL}/users/999`);
      } catch (error) {
        expect(error.response.status).to.equal(404);
      }
    });
  });

  describe('POST /users', () => {
    it('should create a new user', async () => {
      const newUser = {
        name: 'Everton Test',
        email: 'everton@test.com',
        phone: '123-456-7890'
      };

      const response = await axios.post(`${BASE_URL}/users`, newUser);
      expect(response.status).to.equal(201);
      expect(response.data.name).to.equal(newUser.name);
      expect(response.data.email).to.equal(newUser.email);
    });

    it('should validate required fields on user creation', async () => {
      try {
        await axios.post(`${BASE_URL}/users`, {});
      } catch (error) {
        expect(error.response.status).to.equal(400);
      }
    });
  });

  describe('PUT /users/:id', () => {
    it('should update an existing user', async () => {
      const updatedUser = {
        name: 'Everton Updated',
        email: 'everton.updated@test.com'
      };

      const response = await axios.put(`${BASE_URL}/users/1`, updatedUser);
      expect(response.status).to.equal(200);
      expect(response.data.name).to.equal(updatedUser.name);
    });
  });

  describe('DELETE /users/:id', () => {
    it('should delete a user', async () => {
      const response = await axios.delete(`${BASE_URL}/users/1`);
      // jsonplaceholder returns 200 for DELETE operations
      expect(response.status).to.equal(200);
    });
  });

  describe('Performance Testing', () => {
    it('should respond within 2 seconds', async () => {
      const startTime = Date.now();
      await axios.get(`${BASE_URL}/users`);
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      expect(responseTime).to.be.lessThan(2000);
    });
  });
});