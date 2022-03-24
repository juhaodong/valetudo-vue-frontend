//CustomerController
import hillo from 'hillo'


export async function customerRegister (registerData) {
  return await hillo.post('/customer/register', registerData)
}

/**
 *
 * @param email
 * @return {Promise<number>}
 */
export async function customerCheckEmailRegistered (email) {
  return await hillo.post('/customer/checkEmailRegistered', {email})
}

export async function customerConfirmRegister (uuid) {
  return await hillo.get('/customer/confirmRegister/', {uuid})
}

export async function customerLogin (userName, password) {
  return (await hillo.post('/customer/login', {userName, password}))
}

export async function customerMe () {
  return await hillo.get('/customer/me')
}

export async function customerEditMe(data) {
  return await hillo.post('/customer/editMe',data)
}

export async function customerChangeName(id,data){
  return await hillo.post(`/changeName/${id}`,data)
}

export async function customerInit (customer, weddingDate, likeAndHate, imgs) {
  return await hillo.post('/customer/init', {customer, weddingDate, likeAndHate, imgs})
}

export async  function resetPassword ({token, newPassword}) {
  return await hillo.post('/customer/resetPassword', {token, newPassword})
}


export async function contactUsUpdate (id, data) {
  return await hillo.post('/contactUs/'+`${id}`+'/update', data)
}

export async function contactUsAdd (data) {
  return await hillo.post('/contactUs/add', data)
}
