import * as bookModels from '../models/bookModel.js';

export const fetchAllBooks = async() =>{
    const books = await bookModels.fetch();
    return books;
}