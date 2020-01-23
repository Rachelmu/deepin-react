export const request = (config) => {
  if (!config || typeof config !== 'object') return
  const { url, method = 'post', data, headers, requestList } = config
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(url, method)
    Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]))
    xhr.send(data)
    xhr.onload = r => {
      resolve({
        data: r.target.response
      })
    }
  })
}