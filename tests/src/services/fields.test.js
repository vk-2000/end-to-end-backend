const fieldService = require('../../../src/services/fields');
const { Content } = require('../../../src/models');

describe('Field Service', () => {
  describe('addField', () => {
    it('should add field to content', async () => {
      const content = {
        fields: {}
      };
      jest.spyOn(Content, 'findByPk').mockResolvedValueOnce(content);
      jest.spyOn(Content, 'update').mockResolvedValueOnce([1]);
      const updatedContent = await fieldService.addField(1, {name: 'field1', type: 'text'});
      expect(updatedContent).toEqual([1]);
    });
    it('should throw error if field already exists', async () => {
      const content = {
        fields: {
          field1: 'text'
        }
      };
      jest.spyOn(Content, 'findByPk').mockResolvedValueOnce(content);
      await expect(fieldService.addField(1, {name: 'field1', type: 'text'})).rejects.toThrow();
    });
  });

  describe('updateField', () => {
    it('should update field', async () => {
      const content = {
        fields: {
          field1: 'text'
        }
      };
      jest.spyOn(Content, 'findByPk').mockResolvedValueOnce(content);
      jest.spyOn(Content, 'update').mockResolvedValueOnce([1]);
      const updatedContent = await fieldService.updateField(1, 'field1', {newName: 'field2', type: 'text'});
      expect(updatedContent).toEqual([1]);
    });
    it('should throw error if field does not exist', async () => {
      const content = {
        fields: {}
      };
      jest.spyOn(Content, 'findByPk').mockResolvedValueOnce(content);
      await expect(fieldService.updateField(1, 'field1', {newName: 'field2', type: 'text'})).rejects.toThrow();
    });
    it('should throw error if new field name already exists', async () => {
      const content = {
        fields: {
          field1: 'text',
          field2: 'text'
        }
      };
      jest.spyOn(Content, 'findByPk').mockResolvedValueOnce(content);
      await expect(fieldService.updateField(1, 'field1', {newName: 'field2', type: 'text'})).rejects.toThrow();
    });
  });
});