import axios from "axios";

const baseUrl = "http://localhost:4000/article";

export const getAllPosts = async (limit = 99999999999, offset = 0, status) => {
  try {
    let url = baseUrl + `/${limit}/${offset}`;
    if (status) {
      url += `?status=${status}`;
    }
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getPostById = async (id) => {
  try {
    const { data } = await axios.get(baseUrl + `/${id}`);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const editPost = async (id, postData) => {
  try {
    const { data } = await axios.put(baseUrl + `/${id}`, postData);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateStatus = async (id, status) => {
  try {
    const { data } = await axios.patch(baseUrl + `/${id}`, status);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addNewPost = async (postData) => {
  try {
    const { data } = await axios.post(baseUrl, postData);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};
