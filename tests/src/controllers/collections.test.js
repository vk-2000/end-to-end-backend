const collectionService = require('../../../src/services/collections');
const collectionController = require('../../../src/controllers/collections');

describe('Collections Controller', () => {
  describe('getAllCollections', () => {
    it('should return all collections', async () => {
      const req = { params: { contentId: 1 } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      jest.spyOn(collectionService, 'getAllCollections').mockResolvedValueOnce([
        { id: 1, name: 'Collection 1', values: [] },
      ]);
      await collectionController.getAllCollections(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([
        { id: 1, name: 'Collection 1', values: [] },
      ]);
    });
  });
  describe('getCollectionById', () => {
    it('should return collection by id', async () => {
      const req = { params: { contentId: 1, collectionId: 1 } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      jest.spyOn(collectionService, 'getCollectionById').mockResolvedValueOnce({ id: 1, name: 'Collection 1', values: [] });
      await collectionController.getCollectionById(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ id: 1, name: 'Collection 1', values: [] });
    });
    it('should return error if collection not found', async () => {
      const req = { params: { contentId: 1, collectionId: 1 } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const mockError = { code: 404, message: 'Collection not found' };
      jest.spyOn(collectionService, 'getCollectionById').mockRejectedValueOnce(mockError);
      await collectionController.getCollectionById(req, res);
      expect(res.status).toHaveBeenCalledWith(mockError.code);
      expect(res.json).toHaveBeenCalledWith({ message: mockError.message });
    });
  });
  describe('createCollection', () => {
    it('should create collection', async () => {
      const req = { params: { contentId: 1 }, body: { name: 'Collection 1' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      jest.spyOn(collectionService, 'createCollection').mockResolvedValueOnce({ id: 1, name: 'Collection 1', values: [] });
      await collectionController.createCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ id: 1, name: 'Collection 1', values: [] });
    });
    it('should return error if collection already exists', async () => {
      const req = { params: { contentId: 1 }, body: { name: 'Collection 1' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const mockError = { code: 409, message: 'Collection already exists' };
      jest.spyOn(collectionService, 'createCollection').mockRejectedValueOnce(mockError);
      await collectionController.createCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(mockError.code);
      expect(res.json).toHaveBeenCalledWith({ message: mockError.message });
    });
  });
  describe('updateCollection', () => {
    it('should update collection', async () => {
      const req = { params: { contentId: 1, collectionId: 1 }, body: { name: 'Collection 1' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      jest.spyOn(collectionService, 'updateCollection').mockResolvedValueOnce({ id: 1, name: 'Collection 1', values: [] });
      await collectionController.updateCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ id: 1, name: 'Collection 1', values: [] });
    });
    it('should return error if collection not found', async () => {
      const req = { params: { contentId: 1, collectionId: 1 }, body: { name: 'Collection 1' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const mockError = { code: 404, message: 'Collection not found' };
      jest.spyOn(collectionService, 'updateCollection').mockRejectedValueOnce(mockError);
      await collectionController.updateCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(mockError.code);
      expect(res.json).toHaveBeenCalledWith({ message: mockError.message });
    });
  });
  describe('deleteCollection', () => {
    it('should delete collection', async () => {
      const req = { params: { contentId: 1, collectionId: 1 } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      jest.spyOn(collectionService, 'deleteCollection').mockResolvedValueOnce(1);
      await collectionController.deleteCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(1);
    });
    it('should return error if collection not found', async () => {
      const req = { params: { contentId: 1, collectionId: 1 } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const mockError = { code: 404, message: 'Collection not found' };
      jest.spyOn(collectionService, 'deleteCollection').mockRejectedValueOnce(mockError);
      await collectionController.deleteCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(mockError.code);
      expect(res.json).toHaveBeenCalledWith({ message: mockError.message });
    });
  });
});