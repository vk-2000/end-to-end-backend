const { collectionValidation } = require('../../../src/middlewares/collectionValidation');
const {Content} = require('../../../src/models');

describe('Collection Validation', () => {
  it('should return 400 if fields are not valid', async () => {
    const moqReq = {
      params: {
        contentId: 1
      },
      body: {
        values: {
          name: 'John',
          ages: 20
        }
      }
    };
    jest.spyOn(Content, 'findByPk').mockResolvedValueOnce(
      { id: 1, name: 'Content 1', fields: {name: 'string', age: 'number'} }
    );
    const moqRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const moqNext = jest.fn();
    await collectionValidation(moqReq, moqRes, moqNext);
    expect(moqRes.status).toHaveBeenCalledWith(400);
    expect(moqRes.json).toHaveBeenCalledWith({message: 'Fields should be name,age'});
  });
  it('should return 400 if fields are not valid', async () => {
    const moqReq = {
      params: {
        contentId: 1
      },
      body: {
        values: {
          name: 'John',
          age: 20
        }
      }
    };
    jest.spyOn(Content, 'findByPk').mockResolvedValueOnce(
      { id: 1, name: 'Content 1', fields: {name: 'string', age: 'number', phone: 111} }
    );
    const moqRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const moqNext = jest.fn();
    await collectionValidation(moqReq, moqRes, moqNext);
    expect(moqRes.status).toHaveBeenCalledWith(400);
    expect(moqRes.json).toHaveBeenCalledWith({message: 'Fields should be name,age,phone'});
  });
  it('should call next if fields are valid', async () => {
    const moqReq = {
      params: {
        contentId: 1
      },
      body: {
        values: {
          name: 'John',
          age: 20
        }
      }
    };
    jest.spyOn(Content, 'findByPk').mockResolvedValueOnce(
      { id: 1, name: 'Content 1', fields: {name: 'string', age: 'number'} }
    );
    const moqRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const moqNext = jest.fn();
    await collectionValidation(moqReq, moqRes, moqNext);
    expect(moqNext).toHaveBeenCalled();
  });
});