// eslint-disable-next-line no-unused-vars
import { get, post } from './http'
export const loginAddress = p => get('api/user/Login', p)
export const firstOrDefault = p => get('api/User/FirstOrDefault', p)
