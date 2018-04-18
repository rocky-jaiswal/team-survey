import generateTokenWatcher from './generateToken';
import createSessionWatcher from './createSession';
import fetchQuestionsWatcher from './fetchQuestions';
import fetchUserProfileWatcher from './fetchUserProfile';
import submitSurveyWatcher from './submitSurvey';

export default [
  generateTokenWatcher,
  createSessionWatcher,
  fetchQuestionsWatcher,
  fetchUserProfileWatcher,
  submitSurveyWatcher
];
