import { login } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router from '@/router/index'



const user = {
    state: {
        token: getToken(),
    },
    mutations: {
        SET_TOKEN: (state, token) => {
          state.token = token
        },
    },
    actions: {
        // 登录
        Login({ commit }, userInfo) {
            console.log(userInfo)
            const username = userInfo.userName.trim()
            let Base64 = require('js-base64').Base64;
            let pw = Base64.encode(userInfo.password)
            return new Promise((resolve, reject) => {
                login(username, pw).then(response => {
                    const data = response.data
                    setToken(data.token)
                    commit('SET_TOKEN', data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },


    },
}

export default user;