const axios = require('axios');
const authenticateUser = require('../../../src/middlewares/auth');



describe('Auth', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should authenticate a user', async () => {
    const mockReq = {
      headers: {
        authorization: 'test'
      }
    };
    const mockRes = jest.fn();
    const mockNext = jest.fn();
    axios.post = jest.fn().mockResolvedValue({data: {id: 1}});
    await authenticateUser(mockReq, mockRes, mockNext);
    expect(mockNext).toHaveBeenCalled();
  });
  it('should return 401', async () => {
    const mockReq = {
      headers: {
        authorization: 'test'
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    const mockNext = jest.fn();
    axios.post = jest.fn().mockRejectedValue({message: 'test'});
    await authenticateUser(mockReq, mockRes, mockNext);
    expect(mockRes.status).toHaveBeenCalledWith(401);
    expect(mockRes.send).toHaveBeenCalledWith({msg: 'test'});
  });
});