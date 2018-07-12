import { NAME } from './constants';


export const isLogged = state => state[NAME].isLogged;
export const isFetching = state => state[NAME].isFetching;
export const getError = state => state[NAME].error;
