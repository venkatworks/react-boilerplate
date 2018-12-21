// @flow
export const SIGNUP = 'SIGNUP'
export type UserDetails = {
  username: string,
  password: string
}
export const signup = (userDetails: UserDetails) => ({
  type: SIGNUP,
  userDetails
})
export type SignupAction = {
  type: typeof SIGNUP,
  userDetails: UserDetails
}
export const SIGNUP_SUCCEEDED = 'SIGNUP_SUCCEEDED'

export type SignupSuccessAction = {
  type: typeof SIGNUP_SUCCEEDED
}
export const signupSuccess = (): SignupSuccessAction => ({
  type: SIGNUP_SUCCEEDED
})

export type SignupErrorAction = {
  type: typeof SIGNUP_ERROR,
  error: Error
}
export const SIGNUP_ERROR = 'SIGNUP_ERROR'
export const signupError = (error: Error) => ({
  type: SIGNUP_ERROR,
  error
})

export type LoginAction = {
  type: typeof LOGIN,
  username: string,
  password: string
}
export const LOGIN = 'LOGIN'
export const login = (username: string, password: string) => ({
  type: LOGIN,
  username,
  password
})

export type LoginSuccessAction = {
  type: typeof LOGIN_SUCCEEDED
}
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED'
export const loginSuccess = () => ({
  type: LOGIN_SUCCEEDED
})

export type LoginErrorAction = {
  type: typeof LOGIN_ERROR,
  error: Error
}
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const loginError = (error: Error) => ({
  type: LOGIN_ERROR,
  error
})

export type GetDataAction = {
  type: typeof GET_DATA
}
export const GET_DATA = 'GET_DATA'
export const getData = () => ({
  type: GET_DATA
})
export type Data = {
  data1d: Array<Array<number>>
}
export type GetDataSuccessAction = {
  type: typeof GET_DATA_SUCCEEDED,
  data: Data
}
export const GET_DATA_SUCCEEDED = 'GET_DATA_SUCCEEDED'
export const getDataSuccess = (data: Data) => ({
  type: GET_DATA_SUCCEEDED,
  data
})

export type GetDataErrorAction = {
  type: typeof GET_DATA_ERROR,
  error: Error
}
export const GET_DATA_ERROR = 'GET_DATA_ERROR'
export const getDataError = (error: Error) => ({
  type: GET_DATA_ERROR,
  error
})

export type Action =
  | SignupAction
  | SignupSuccessAction
  | SignupErrorAction
  | LoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | GetDataAction
  | GetDataSuccessAction
  | GetDataErrorAction
