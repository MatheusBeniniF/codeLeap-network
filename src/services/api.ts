import axios from 'axios';
import { CreatePostData, Post, UpdatePostData } from '../types';

const API_URL = 'https://dev.codeleap.co.uk/careers/';

const api = axios.create({
  baseURL: API_URL,
});

export const getPosts = async (): Promise<Post[]> => {
  const response = await api.get('');
  return response.data.results;
};

export const createPost = async (data: CreatePostData): Promise<Post> => {
  const response = await api.post('', data);
  return response.data;
};

export const updatePost = async (id: number, data: UpdatePostData): Promise<Post> => {
  const response = await api.patch(`${id}/`, data);
  return response.data;
};

export const deletePost = async (id: number): Promise<void> => {
  await api.delete(`${id}/`);
};