import constant from '../../utils/constant';

export const fetchCount = async () => {
  try {
    const response = await constant.get('/count');
    return response.data[0];
  } catch (error) {
    throw error;
  }
};
