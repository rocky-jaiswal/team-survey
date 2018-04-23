import generateTokenWatcher from './generateToken';
import createSessionWatcher from './createSession';
import fetchQuestionsWatcher from './fetchQuestions';
import fetchUserProfileWatcher from './fetchUserProfile';
import submitSurveyWatcher from './submitSurvey';
import fetchAllUsersWatcher from './fetchAllUsers';

export default [
  generateTokenWatcher,
  createSessionWatcher,
  fetchQuestionsWatcher,
  fetchUserProfileWatcher,
  submitSurveyWatcher,
  fetchAllUsersWatcher
];
