const {Collection, Content} = require('../../../src/models');
const collectionsService = require('../../../src/services/collections');

describe('Collections Service', () => {
  describe('getAllCollections', () => {
    it('should return all collections', async () => {
      jest.spyOn(Collection, 'findAll').mockResolvedValueOnce([
        {id: 1, name: 'Collection 1', values: []},
      ]);
      const collections = await collectionsService.getAllCollections();
      expect(collections).toEqual([
        {id: 1, name: 'Collection 1', values: []},
      ]);
    });
  });
  describe('getCollectionById', () => {
    it('should return collection by id', async () => {
      jest.spyOn(Collection, 'findOne').mockResolvedValueOnce(
        {id: 1, name: 'Collection 1', values: []}
      );
      const collection = await collectionsService.getCollectionById(1);
      expect(collection).toEqual({id: 1, name: 'Collection 1', values: []});
    });
    it('should throw error if collection not found', async () => {
      jest.spyOn(Collection, 'findOne').mockResolvedValueOnce(null);
      await expect(collectionsService.getCollectionById(1)).rejects.toThrow();
    });
  });
  describe('createCollection', () => {
    it('should create collection', async () => {
      jest.spyOn(Content, 'findByPk').mockResolvedValueOnce({
        addCollection: jest.fn().mockResolvedValue({}),
      });
      jest.spyOn(Collection, 'create').mockResolvedValueOnce(
        {id: 1, name: 'Collection 1', values: []}
      );
      const collection = await collectionsService.createCollection({name: 'Collection 1'});
      expect(collection).toEqual({id: 1, name: 'Collection 1', values: []});
    });
    it('should throw error if content not found', async () => {
      jest.spyOn(Content, 'findByPk').mockResolvedValueOnce(null);
      jest.spyOn(Collection, 'create').mockResolvedValueOnce(
        {id: 1, name: 'Collection 1', values: []}
      );
      await expect(collectionsService.createCollection({name: 'Collection 1'})).rejects.toThrow();
    });
  });
  describe('updateCollection', () => {
    it('should update collection name', async () => {
      jest.spyOn(Collection, 'update').mockResolvedValueOnce([1]);
      const collection = await collectionsService.updateCollection(1, {name: 'Collection 1'});
      expect(collection).toEqual([1]);
    });
    it('should throw error if collection not found', async () => {
      jest.spyOn(Collection, 'update').mockResolvedValueOnce([0]);
      await expect(collectionsService.updateCollection(1, {name: 'Collection 1'})).rejects.toThrow();
    });
  });
  describe('deleteCollection', () => {
    it('should delete collection', async () => {
      jest.spyOn(Collection, 'destroy').mockResolvedValueOnce(1);
      const collection = await collectionsService.deleteCollection(1);
      expect(collection).toEqual(1);
    });
    it('should throw error if collection not found', async () => {
      jest.spyOn(Collection, 'destroy').mockResolvedValueOnce(0);
      await expect(collectionsService.deleteCollection(1)).rejects.toThrow();
    });
  });
});