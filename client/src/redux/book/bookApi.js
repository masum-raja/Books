import constant from '../../utils/constant';

export const fetchBookListApi = async () => {
  try {
    const response = await constant.get('/book');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createBookListApi = async (action) => {
  try {
    const response = await constant.post('/book/create', action.payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateBookListApi = async (action) => {
  try {
    const response = await constant.patch(`/book/update/${action.payload.uuid}`, action.payload.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
