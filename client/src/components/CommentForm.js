import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT} from '../utils/mutations';
import { QUERY_COMMENTS, QUERY_ME } from '../utils/queries';

const CommentForm =  ({ couponId }) => {
    const [commentText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const handleChange = event => {
        if (event.target.value.length <= 280) {
          setText(event.target.value);
          setCharacterCount(event.target.value.length);
        }
    };
    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
          // add comment to database
          await addComment({
            variables: { couponId: couponId, commentText: commentText}
          });
      
          // clear form value
          window.location.reload();
          
        } catch (e) {
          console.error(e);
        }
    };
     const [addComment, { error }] = useMutation(ADD_COMMENT);

     //  , {
    //     update(cache, { data: { addComment } }) {
    //       try {
    //         // could potentially not exist yet, so wrap in a try...catch
    //         const { comments } = cache.readQuery({ query: QUERY_COMMENTS });
    //         cache.writeQuery({
    //           query: QUERY_COMMENTS,
    //           data: { comments: [addComment, ...comments] }
    //         });
    //       } catch (e) {
    //         console.error(e);
    //       }
      
    //       // update me object's cache, appending new comment to the end of the array
    //       const { me } = cache.readQuery({ query: QUERY_ME });
    //       cache.writeQuery({
    //         query: QUERY_ME,
    //         data: { me: { ...me, comments: [...me.comments, addComment] } }
    //       });
    //     }
    // });

  return (
    <div>
        <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
            Character Count: {characterCount}/280
            {error && <span className="ml-2">Something went wrong...{error.message}</span>}
        </p>
        <form
            className="flex-row justify-center justify-space-between-md align-stretch"
            onSubmit={handleFormSubmit}
        >
            <textarea
                placeholder="Here's a new comment..."
                value={commentText}
                className="form-input col-12 col-md-9"
                onChange={handleChange}
            ></textarea>
            <button className="btn col-12 col-md-3" type="submit">
            Submit
            </button>
        </form>
    </div>
  );
};

export default CommentForm;