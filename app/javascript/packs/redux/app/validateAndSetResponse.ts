import * as Immutable from 'seamless-immutable';
import { QuestionType, ResponseType } from '../../constants/types';

// tslint:disable-next-line:no-any
export const setResponse = (questions: QuestionType[], responses: any, response: ResponseType) => {
  const { questionId } = response;
  const mutableResponse = JSON.parse(JSON.stringify(responses)); // hack to make immutable mutable
  const selectedQuestion = questions.find((q) => q.id === questionId);
  const existingResponse = mutableResponse.find((r: ResponseType) => r.questionId === questionId);

  if (selectedQuestion && selectedQuestion.type === 'MULTI') {
    if (response.added) {
      if (existingResponse) {
        existingResponse.selection.push(response.selection[0]);
      } else {
        mutableResponse.push({ questionId: response.questionId, selection: response.selection });
      }
    } else {
      if (existingResponse) {
        existingResponse.selection = existingResponse.selection.filter((e: string) => e !== response.selection[0]);
      }
    }
  }

  if (selectedQuestion && ['RADIO', 'RANGE', 'TEXT'].includes(selectedQuestion.type) ) {
    if (response.added) {
      if (existingResponse) {
        existingResponse.selection = response.selection[0];
      } else {
        mutableResponse.push({ questionId: response.questionId, selection: response.selection[0] });
      }
    } else {
      if (existingResponse) {
        existingResponse.selection = [];
      }
    }
  }

  return Immutable.from(mutableResponse);
};
