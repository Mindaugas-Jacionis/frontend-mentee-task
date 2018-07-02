import { NAME } from './constants';
import { createSelector } from 'reselect';

export const isLogged = state => state[NAME].isLogged;
export const showError = state => state[NAME].error;
