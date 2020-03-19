import ajax from './ajax';
/* 包含n个接口的请求函数模块，返回promise对象 */
// 定义基准路径
const BASE_URL = 'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/'

/* home模块 */
export const getHomeData = () => ajax(BASE_URL + 'homeApi');
