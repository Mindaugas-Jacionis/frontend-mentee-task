import { NAME } from './constants';

export const getServers = state => state[NAME].servers;
export const getError = state => state[NAME].error;
