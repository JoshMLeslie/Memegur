export const createComment = (post_id, body) => {
  return (
    $.ajax({
      method: 'POST',
      url: `api/posts/${post_id}/comments`,
      data: { id: post_id, comment: body }
    })
  );
};

export const updateComment = (comment) => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/comments/${comment.id}`,
      data: { comment }
    })
  );
};

export const deleteComment = (id) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/comments/${id}`,
    })
  );
};
