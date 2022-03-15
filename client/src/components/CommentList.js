import React from 'react';

const CommentList = ({ comments, title }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {comments &&
        comments.map(comment => (
          <div key={comment._id} className="card mb-3">
            <p className="card-header">
              {comment.user[0].username}
              {/* {comment.user.username} */}
              {/* {comment.user.map(( username) => (
                {username}
              ))} */}
            </p>
            <div className="card-body">
              <p>{comment.commentText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentList;