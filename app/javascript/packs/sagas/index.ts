import generateTokenWatcher from './generateToken';
import createSessionWatcher from './createSession';
import fetchQuestionsWatcher from './fetchQuestions';
import fetchUserProfileWatcher from './fetchUserProfile';
import submitSurveyWatcher from './submitSurvey';
import fetchAllUsersWatcher from './fetchAllUsers';
import fetchAllSurveysWatcher from './fetchAllSurveys';

export default [
  generateTokenWatcher,
  createSessionWatcher,
  fetchQuestionsWatcher,
  fetchUserProfileWatcher,
  submitSurveyWatcher,
  fetchAllUsersWatcher,
  fetchAllSurveysWatcher
];
