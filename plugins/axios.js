
export const modifyAxios = (axios) => {
  const methods = ['get', 'post', 'delete', 'patch', 'put']

  const requestWrapper = (method, path) => {

    return ({
              body = {},
              options = {},
              onStart = () => {
              },
              onSuccess = () => {
              },
              onError = () => {
              },
              onFinally = () => {
              }
            }) => {
      onStart()
      if (method === methods[0]) {
        axios[method](path, options)
          .then(onSuccess)
          .catch(onError)
          .finally(onFinally)
      } else {
        axios[method](path, body, options)
          .then(onSuccess)
          .catch(onError)
          .finally(onFinally)
      }
    }
  }

  return methods.reduce(function(result, method) {
    result[method] = (path) => requestWrapper(method, path)
    return result
  }, {})
}


export default ({ $axios, store }, inject) => {
  const api = $axios.create({
    headers: {
      common: {
        'X-App-Type': 'Web',
        'X-App-Ver': 1
      }
    }
  })
  api.onRequest((config)=>{
    if(store.getters["auth/isAuth"]){
      config.headers.common.Authorization = store.getters["auth/isAuth"]
    }
  })
  api.setBaseURL('/api')
  const axiosModified = modifyAxios(api)
  const requests = {
    login: axiosModified.post('/Auth'),
    register: axiosModified.post('/RegisterClient'),
    confirmRegisterCode: axiosModified.post('/ConfirmRegisterCode'),
    registrationComplete: axiosModified.post('/CompleteRegistration'),
    uploadFrontSide: axiosModified.post('/UploadFrontSide'),
    uploadSelfie: axiosModified.post('/UploadSelfie'),
    uploadAdditionalData: axiosModified.post('/UploadAdditionalData'),
    getClientRateAnonymous: axiosModified.post('/GetClientRateAnonymous'),
    getClientRate: axiosModified.get('/GetClientRate'),
    addVerificationRequest: axiosModified.post('/AddVerificationRequest'),
    generateSignCode: axiosModified.post('/GenerateSignCode'),
    getVerificationRequestStatus: axiosModified.get('/GetVerificationRrequestStatus'),
    confirmContractCode: axiosModified.post('/ConfirmContractCode'),
    processingMoney: axiosModified.post('/ProcessingMoney'),
    getClientFIO: axiosModified.post('/GetClientFIO')
  }

  inject('requests', requests)
}
