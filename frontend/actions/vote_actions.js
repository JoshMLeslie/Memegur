import * as VoteAPI from '../util/vote_api_util'; //?

export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_VOTE = "REMOVE_VOTE";

const removeVote = vote => {
  return ({
    type: RECEIVE_USER,
    vote
  });
};

const receivePost = (payload) => ({
  type: RECEIVE_POST,
  payload
});


export const createVote = (settings) => dispatch => {
  return VoteAPI.createVote(settings).then(
    payload => {
      return (
        dispatch(receivePost(payload))
      );
    }
  );
};
export const deleteVote = (type, type_id, id) => dispatch => {
  return VoteAPI.deleteVote(type, type_id, id).then(
    payload => {
      return (
        dispatch(receivePost(payload))
      );
    }
  );
};
