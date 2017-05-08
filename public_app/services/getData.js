import React    from 'react';
import axios    from 'axios';

export const getMoviesId = (id, callback) => {
    axios.get(`/api/movies/${id}`)
        .then((response) => {
            return callback(response)
    });
}
export const getComments = (id, callback) => {
    axios.get(`/api/comment/${id}`
                 ).then((response) => {
           return callback(response)
        });
}
export const getMovies = (callback) => {
    axios.get(`/api/movies`)
        .then((response) => {
            return callback(response)
    });
}
