import hillo from 'hillo'


//DressDesignController
export async function updateMyDesignParts (designId, dressPartIds) {
  return (await hillo.post('/dressDesign/' + `${designId}` + '/updateParts', {dressPartIds})).data
}

const defaultAddress = {
  firstName: 'Haodong',
  lastName: 'Ju',
  addressLine1: 'KreuzStr.3',
  addressLine2: '',
  postCode: '52080',
  city: 'Aachen',
  stateOrProvice: 'NRW'
}

export async function placeAndPaySampleOrder(id){
  await placeSampleOrder(id)
  return (await paySampleOrder(id))
}

export async function placeSampleOrder (id, quantity = 1, deliveryAddress = defaultAddress, billingAddress = defaultAddress) {
  return (await hillo.post('/dressDesign/placeSampleOrder/' + `${id}`, {
    quantity, deliveryAddress, billingAddress
  })).data
}

export async function paySampleOrder (id) {
  return (await hillo.post('/dressDesign/paySampleOrder/' + `${id}`)).data
}

export async function loadDesign (id) {
  return (await hillo.get('/dressDesign/getById/' + id)).data
}

export async function createNewDesign (name) {
  return (await hillo.post('/dressDesign/createNew', {name})).data
}

export async function setDressComplete (id) {
  return (await hillo.post('/dressDesign/setComplete/' + id)).data
}

export async function getMyDesign () {
  return (await hillo.post('/dressDesign/myList')).data
}

export async function deleteDress (id) {
  return (await hillo.post(`/dressDesign/setHidden/${id}`)).data
}

