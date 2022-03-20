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
              },
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

  return methods.reduce(function (result, method) {
    result[method] = (path) => requestWrapper(method, path)
    return result
  }, {})
}


export default ({$axios}, inject) => {
  const api = $axios.create({
    headers: {
      common:{
        'X-App-Type': "AqshaBer.Web",
        'X-App-Ver': 1
      }
    }
  })
  api.setBaseURL("/api")
  const axiosModified = modifyAxios(api)
  const requests = {
    login: axiosModified.post("/Auth"),
    register:axiosModified.post("/RegisterClient"),
    smsConfirm:axiosModified.post("/ConfirmRegisterCode"),
    registrationConfirm:axiosModified.post("/CompleteRegistration")
  }
  // this.$requests.login({ example for request
  //   body: {
  //     iin: '00302050060'
  //   }
  // })
  inject("requests", requests)
}
