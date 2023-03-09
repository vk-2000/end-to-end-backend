const fieldService = require('../../src/services/fields');
const fieldController = require('../../src/controllers/fields');

describe('Field Controller', () => {
  describe('addField', () => {
    it('should add field to content', async () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const mockRequest = {
        params: { id: 1 },
        body: { name: 'field1', type: 'text' }
      };
      const mockContent = {
        fields: {}
      };
      jest.spyOn(fieldService, 'addField').mockResolvedValueOnce(mockContent);
      await fieldController.addField(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockContent);
    });
    it('should return error if content not found', async () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const mockRequest = {
        params: { id: 1 },
        body: { name: 'field1', type: 'text' }
      };
      const mockError = { code: 404, message: 'Content not found' };
      jest.spyOn(fieldService, 'addField').mockRejectedValueOnce(mockError);
      await fieldController.addField(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(mockError.code);
      expect(mockResponse.json).toHaveBeenCalledWith({ message: mockError.message });
    });
  });
  describe('updateField', () => {
    it('should update field', async () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const mockRequest = {
        params: { id: 1, oldName: 'field1' },
        body: { name: 'field1', type: 'text' }
      };
      const mockContent = {
        fields: {}
      };
      jest.spyOn(fieldService, 'updateField').mockResolvedValueOnce(mockContent);
      await fieldController.updateField(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockContent);
    });
    it('should return error if content not found', async () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const mockRequest = {
        params: { id: 1, oldName: 'field1' },
        body: { name: 'field1', type: 'text' }
      };
      const mockError = { code: 404, message: 'Content not found' };
      jest.spyOn(fieldService, 'updateField').mockRejectedValueOnce(mockError);
      await fieldController.updateField(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(mockError.code);
      expect(mockResponse.json).toHaveBeenCalledWith({ message: mockError.message });
    });
  });
});