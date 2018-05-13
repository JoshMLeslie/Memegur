export const fetchPosts = () => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/posts',
    })
  );
};

export const fetchPost = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/posts/${id}`,
    })
  );
};

export const createPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: 'api/posts',
    contentType: false,
    processData: false,
    data: post,
    success: data => console.log(data)

  });
};

export const updatePost = (post) => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/posts/${post.id}`,
      data: { post }
    })
  );
};

export const deletePost = (id) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/posts/${id}`,
    })
  );
};
