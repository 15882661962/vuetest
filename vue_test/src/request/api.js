// eslint-disable-next-line no-unused-vars
import { get, post } from './http'
export const loginAddress = p => get('api/user/Login', p)
export const firstOrDefault = p => get('api/User/FirstOrDefault', p)
export const userSta = p => get('api/User/UserSta', p)// 游戏统计
export const statistics = p => get('api/Order/Statistics', p)// 充值统计
export const playerList = p => get('api/User/List', p)// 玩家
export const emptyScore = p => get('api/User/UpdateScoreTime', p)// 清空积分
export const bigSta = p => get('api/User/BigSta', p)// 汇总
export const updatePassword = p => get('api/User/UpdatePassword', p)// 修改密码
export const updateContent = p => get('api/config/UpdateContent', p)// 修改公告
export const cashRecord = p => get('api/Message/PagedList', p)// 提现记录
export const getGroup = p => get('api/group/GetControl', p)// 公会
export const updateGroup = p => get('api/group/UpdateControl', p)
