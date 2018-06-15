import reducer from './reducer';
import * as actionTypes from './actionTypes';

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: '',
      servers: [],
      loading: false,
      error: false,
    });
  });

  it('should return initial state on logout', () => {
    expect(reducer(
      {
        token: 'token',
        servers: 'servers',
      },
      {
        type: actionTypes.AUTH_LOGOUT,
      },
    )).toEqual({
      token: '',
      servers: [],
      loading: false,
      error: false,
    });
  });

  it('should store token on login', () => {
    expect(reducer(undefined, {
      type: actionTypes.AUTH_SUCCESS,
      token: 'token',
    })).toEqual({
      token: 'token',
      servers: [],
      loading: false,
      error: false,
    });
  });

  it("should change error property to 'true' on fetchFail", () => {
    expect(reducer(undefined, {
      type: actionTypes.FETCH_FAIL,
    })).toEqual({
      token: '',
      servers: [],
      loading: false,
      error: true,
    });
  });

  it("should change loading property to 'true' on fetchStart", () => {
    expect(reducer(undefined, {
      type: actionTypes.FETCH_START,
    })).toEqual({
      token: '',
      servers: [],
      loading: true,
      error: false,
    });
  });

  it('should store servers and sort by distance and name', () => {
    expect(reducer(
      {
        token: '',
        servers: [],
        loading: false,
        error: false,
      },
      {
        type: actionTypes.SAVE_SERVERS,
        servers: [
          { name: 'a', distance: 100 },
          { name: 'c', distance: 200 },
          { name: 'b', distance: 200 },
        ],
      },
    )).toEqual({
      token: '',
      servers: [
        { name: 'a', distance: 100 },
        { name: 'b', distance: 200 },
        { name: 'c', distance: 200 },
      ],
      loading: false,
      error: false,
    });
  });
});
