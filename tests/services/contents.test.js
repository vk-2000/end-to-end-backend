const contentService = require('../../src/services/contents');
const { Content } = require('../../src/models');

describe('Content Service', () => {
  describe('getAllContents', () => {
    it('should return all contents', async () => {
      jest.spyOn(Content, 'findAll').mockResolvedValueOnce([
        { id: 1, name: 'Content 1', fields: {} },
      ]);
      const contents = await contentService.getAllContents();
      expect(contents).toEqual([
        { id: 1, name: 'Content 1', fields: {} },
      ]);
    });
  });
  describe('getContentById', () => {
    it('should return content by id', async () => {
      jest.spyOn(Content, 'findByPk').mockResolvedValueOnce(
        { id: 1, name: 'Content 1', fields: {} }
      );
      const content = await contentService.getContentById(1);
      expect(content).toEqual({ id: 1, name: 'Content 1', fields: {} });
    });
    it('should throw error if content not found', async () => {
      jest.spyOn(Content, 'findByPk').mockResolvedValueOnce(null);
      await expect(contentService.getContentById(1)).rejects.toThrow();
    });
  });
  describe('createContent', () => {
    it('should create content', async () => {
      jest.spyOn(Content, 'create').mockResolvedValueOnce(
        { id: 1, name: 'Content 1', fields: {} }
      );
      const content = await contentService.createContent({name: 'Content 1'});
      expect(content).toEqual({ id: 1, name: 'Content 1', fields: {} });
    });
  });
  describe('updateContentName', () => {
    it('should update content name', async () => {
      jest.spyOn(Content, 'update').mockResolvedValueOnce([1]);
      const content = await contentService.updateContentName(1, {name: 'Content 1'});
      expect(content).toEqual([1]);
    });
    it('should throw error if content not found', async () => {
      jest.spyOn(Content, 'update').mockResolvedValueOnce([0]);
      await expect(contentService.updateContentName(1, {name: 'Content 1'})).rejects.toThrow();
    });
  });
});