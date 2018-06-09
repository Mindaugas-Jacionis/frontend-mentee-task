import reducer from "./reducer";
import * as actionTypes from "./actionTypes";

describe("reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: "",
      servers: "",
      loading: false
    });
  });

  it("should return initial state on logout", () => {
    expect(
      reducer(
        {
          token: "token",
          servers: "servers"
        },
        {
          type: actionTypes.AUTH_LOGOUT
        }
      )
    ).toEqual({
      token: "",
      servers: "",
      loading: false
    });
  });

  it("should store token on login", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.AUTH_SUCCESS,
        token: "token"
      })
    ).toEqual({
      token: "token",
      servers: "",
      loading: false
    });
  });

  it("should store servers and sort by distance and name", () => {
    expect(
      reducer(
        {
          token: "",
          servers: "",
          loading: false
        },
        {
          type: actionTypes.SAVE_SERVERS,
          servers: [
            { name: "a", distance: 100 },
            { name: "c", distance: 200 },
            { name: "b", distance: 200 }
          ]
        }
      )
    ).toEqual({
      token: "",
      servers: [
        { name: "a", distance: 100 },
        { name: "b", distance: 200 },
        { name: "c", distance: 200 }
      ],
      loading: false
    });
  });
});
