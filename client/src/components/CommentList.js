import { userInfo } from 'os';
import React from 'react';

const CommentList = ({ comments, title }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {comments &&
        coupon.comments.map((comment) => (
          <div key={comment._id} className="card mb-3">
            <div className="card-header">
              {comments.user.map(({username}, index) => (
              <div key={index}>
                {username}
              </div>
            ))}
            </div>
            <div className="card-body">
              <div>{comment.commentText}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentList;