import originJSONP from 'jsonp'
import axios from 'axios'
export function getList() {
    return new Promise((resolve, reject) => {
        axios.get('http://192.168.0.116:3000/posts').then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(err)
        })
    })
}
export function update(id, data) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'put',
            url: 'http://192.168.0.116:3000/posts/' + id,
            data
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(err)
        })
    })
}

