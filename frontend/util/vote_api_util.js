export const createVote = ({type, type_id, vote}) => {
  return $.ajax({
    method: 'POST',
    url: `api/${type}/${type_id}/votes`,
    data: {vote}
    // type should be posts or comments
    // url: api/comments/5/votes, etc.
  });
};

export const deleteVote = (type, type_id, id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/${type}/${type_id}/votes/${id}`,
    // url: api/comments/5/votes/3, etc.
  });
};
