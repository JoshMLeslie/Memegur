export const fetchAuthor = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/users/${id}`,
      data: { user }
    })
  );
};

export const fetchAuthors = (ids) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/users/${id}`,
      data: { user }
    })
  );
};
