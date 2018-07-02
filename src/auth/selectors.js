import { NAME } from './constants';


export const isLogged = state => state[NAME].isLogged;
export const getError = state => state[NAME].error;
