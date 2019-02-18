import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/api"
});

export const getFeedbacks = async () => {
  const { data } = await api.get(`/feedbacks`);
  return data.feedbacks;
};

export const getFeedbacksByID = async id => {
  const { data } = await api.get(`/feedbacks/${id}`);
  return data.feedback;
};
