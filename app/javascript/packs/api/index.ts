import axios from 'axios';

import Config from '../config';
import { ResponseType } from '../constants/types';

const AppAPI = {

  init() {
    return axios.create({
      headers: {
        common: {
          Authorization: sessionStorage.getItem('jwt') || ''
        }
      }
    });
  },

  async generateToken(email: string) {
    return await axios
      .post(Config.env.baseURL + '/short_token', { email });
  },

  async createSession(token: string) {
    return await axios
      .post(Config.env.baseURL + '/session', { token });
  },

  async fetchQuestions() {
    return AppAPI.init()
      .get(Config.env.baseURL + '/questions');
  },

  async fetchUserProfile() {
    return AppAPI.init()
      .get(Config.env.baseURL + '/user_profile');
  },

  async submitSurvey(surveyId: number, responses: ResponseType[]) {
    return AppAPI.init()
      .post(`${Config.env.baseURL}/survey/${surveyId}/responses`, { responses });
  }

};

export default AppAPI;
