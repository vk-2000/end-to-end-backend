const fieldValidation = require('../../../src/middlewares/fieldValidation');

describe('Field Schema', () => {
  describe('addFieldValidation', () => {
    it('should return 400 if name or type is not a string', async () => {
      const req = {
        body: {
          name: 1,
          type: 1
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      fieldValidation.addFieldValidation(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: '"name" must be a string' });
    });
    it('should call next if name and type are strings', async () => {
      const req = {
        body: {
          name: 'field1',
          type: 'text'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      fieldValidation.addFieldValidation(req, res, next);
      expect(next).toHaveBeenCalled();
    });
    it('should return 500 if error is not a HTTPError', async () => {
      const req = undefined;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      fieldValidation.addFieldValidation(req, res, next);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
  describe('updateFieldValidation', () => {
    it('should return 400 if newName or type is not a string', async () => {
      const req = {
        body: {
          newName: 1,
          type: 1
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      fieldValidation.updateFieldValidation(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: '"newName" must be a string' });
    });
    it('should call next if newName and type are strings', async () => {
      const req = {
        body: {
          newName: 'field1',
          type: 'text'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      fieldValidation.updateFieldValidation(req, res, next);
      expect(next).toHaveBeenCalled();
    });
    it('should return 500 if error is not a HTTPError', async () => {
      const req = undefined;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      fieldValidation.updateFieldValidation(req, res, next);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
  describe('deleteFieldValidation', () => {
    it('should return 400 if fieldId is not a string', async () => {
      const req = {
        params: {
          fieldName: 3
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      fieldValidation.deleteFieldValidation(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: '"value" must be a string' });
    });
    it('should call next if fieldId is a string', async () => {
      const req = {
        params: {
          fieldName: 'abc'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      fieldValidation.deleteFieldValidation(req, res, next);
      expect(next).toHaveBeenCalled();
    });
    it('should return 500 if error is not a HTTPError', async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      fieldValidation.deleteFieldValidation(req, res, next);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});