const { getContentByIdValidation, createContentValidation, updateContentNameValidation } = require('../../../src/middlewares/contentValidation');


describe('Content Schema', () => {
  describe('getContentByIdValidation', () => {
    it('should return 400 if contentId is not a number', async () => {
      const req = {
        params: {
          contentId: 'c'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      getContentByIdValidation(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: '"value" must be a number' });
    });
    it('should call next if contentId is a number', async () => {
      const req = {
        params: {
          contentId: 1
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      getContentByIdValidation(req, res, next);
      expect(next).toHaveBeenCalled();
    });
    it('should return 500 if error is not a HTTPError', async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      getContentByIdValidation(req, res, next);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
  describe('createContentValidation', () => {
    it('should return 400 if name is not a string', async () => {
      const req = {
        body: {
          name: 1
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      createContentValidation(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: '"name" must be a string' });
    });
    it('should call next if name and fields are valid', async () => {
      const req = {
        body: {
          name: 'Content 1',
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      createContentValidation(req, res, next);
      expect(next).toHaveBeenCalled();
    });
    it('should return 500 if error is not a HTTPError', async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      createContentValidation(req, res, next);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
  describe('updateContentValidation', () => {
    it('should return 400 if name is not a string', async () => {
      const req = {
        body: {
          name: 1
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      updateContentNameValidation(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: '"name" must be a string' });
    });
    it('should call next if name and fields are valid', async () => {
      const req = {
        body: {
          name: 'Content 1',
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      updateContentNameValidation(req, res, next);
      expect(next).toHaveBeenCalled();
    });
    it('should return 500 if error is not a HTTPError', async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
      };
      const next = jest.fn();
      updateContentNameValidation(req, res, next);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});