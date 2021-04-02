import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getActiveItems = async () => {
  const { data: { itens } } = await api.get('/?limit=10');
  return itens.docs.filter(item => item.active === true);
}
