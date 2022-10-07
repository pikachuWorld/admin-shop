/*
 * @Author: pikachuworld jinqingemail@163.com
 * @Date: 2022-10-05 18:43:40
 * @LastEditors: pikachuworld jinqingemail@163.com
 * @LastEditTime: 2022-10-07 14:52:55
 * @FilePath: /shoping-admin/src/mock/Mock.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import mockjs from "mockjs"
const Mock = {
    // 模拟订单数据
    // type 订单类型， 0为普通订单， 1为秒杀订单
    getOrder(type){
        let array =[];
        for(let i=0; i< mockjs.Random.integer(5,10); i++){
            array.push(mockjs.mock({
                'name': type == 0 ? '普通商品' : '秒杀商品'+i,
                'price': mockjs.Random.integer(20, 500) + '元',
                'buyer': mockjs.Random.cname(),
                'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'role':mockjs.Random.boolean(),
                'state': mockjs.Random.boolean(),
                'payType': mockjs.Random.boolean(),
                'source': mockjs.Random.url(),
                'phone': mockjs.mock(/\d{11}/),
            }))
        }
        return array;
    }
}

export default Mock;