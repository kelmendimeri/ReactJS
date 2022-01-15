import {
  DELETE_COMMENT,
  FETCH_COMMENTS_FAIL,
  FETCH_COMMENTS_SUCCESS,
} from "./../constants/CommentsConstants";

export const fetchCommentsSuccess = (comments) => {
  //vo comments se naogja lista na komentari Comments(500)
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments, //ovoj parametar go prosleduvame na reducerot
  };
};

export const fetchCommentsFail = (error) => {
  //dobivame error argumentot sto sme go prosledile
  return {
    type: FETCH_COMMENTS_FAIL,
    payload: error, // go davame na reducerot
  };
};

export const deleteComment = (id) => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/comments/" + id, {
      method: "DELETE",
    }).catch((err) => dispatch(fetchCommentsFail(err)));
    dispatch({
      type: DELETE_COMMENT,
      payload: id,
    });
  };
};

export const fetchCommentsRequest = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/comments") // Pravime povik so fetch so reducer i cekame resolve na Promise-ot
      .then((res) => res.json()) //ako e uspesen povikot
      .then((json) => dispatch(fetchCommentsSuccess(json))) // json -> Array(500) povikuvame success akcija setComments(json) this.setState({comments:json})
      .catch((err) => dispatch(fetchCommentsFail(err))); // ako e neuspesen povikot vrakjame error odnosno greskata od povikot
  };
};
