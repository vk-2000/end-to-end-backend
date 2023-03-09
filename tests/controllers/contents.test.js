const contentService = require('../../src/services/contents');
const contentController = require('../../src/controllers/contents');

describe('Content Controller', () => {
  describe('getAllContents', () => {
    it('should return all contents', async () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const mockRequest = {};
      const mockContents = [
        { id: 1, name: 'Content 1', fields: {} },
      ];
      jest.spyOn(contentService, 'getAllContents').mockResolvedValueOnce(mockContents);
      await contentController.getAllContents(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockContents);
    });
  });
  describe('getContentById', () => {
    it('should return content by id', async () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const mockRequest = { params: { id: 1 } };
      const mockContent = { id: 1, name: 'Content 1', fields: {} };
      jest.spyOn(contentService, 'getContentById').mockResolvedValueOnce(mockContent);
      await contentController.getContentById(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockContent);
    });
    it('should return error if content not found', async () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const mockRequest = { params: { id: 1 } };
      const mockError = { code: 404, message: 'Content not found' };
      jest.spyOn(contentService, 'getContentById').mockRejectedValueOnce(mockError);
      await contentController.getContentById(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(mockError.code);
      expect(mockResponse.json).toHaveBeenCalledWith({ message: mockError.message });
    });
  });
  describe('createContent', () => {
    it('should create content', async () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const mockRequest = { body: { name: 'Content 1' } };
      const mockContent = { id: 1, name: 'Content 1', fields: {} };
      jest.spyOn(contentService, 'createContent').mockResolvedValueOnce(mockContent);
      await contentController.createContent(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockContent);
    });
  });
  describe('updateContentName', () => {
    it('should update content name', async () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const mockRequest = { params: { id: 1 }, body: { name: 'Content 1' } };
      const mockContent = { id: 1, name: 'Content 1', fields: {} };
      jest.spyOn(contentService, 'updateContentName').mockResolvedValueOnce(mockContent);
      await contentController.updateContentName(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockContent);
    });
    it('should return error if content not found', async () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const mockRequest = { params: { id: 1 }, body: { name: 'Content 1' } };
      const mockError = { code: 404, message: 'Content not found' };
      jest.spyOn(contentService, 'updateContentName').mockRejectedValueOnce(mockError);
      await contentController.updateContentName(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(mockError.code);
      expect(mockResponse.json).toHaveBeenCalledWith({ message: mockError.message });
    });
  });
});