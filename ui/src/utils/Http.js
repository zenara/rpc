/**
 * HTTP Wrapper
 *
 * @author    Amil Waduwawara
 * @version   1.0.0 2019-Jun-20
 * @copyright Omobio (Pvt.) Ltd., Sri Lanka.
 */
export default class Http {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}


	jsonGet = action => {
		return new Promise((resolve, reject) => {
			fetch(this.baseUrl + action, {
				credentials: 'include'
//				credentials: 'same-origin'
			})
				.then(response => {
					switch (response.status) {
						case 401:
							reject({code:response.status, error:'Not authenticated'});
							break;

						case 403:
							reject({code:response.status, error:'Forbidden'});
							break;

						default:
							// Expects a JSON
							return response.json();
					}
				})
				.then(responseJson => {
					if (responseJson.success) {
						resolve(responseJson);
					}

					switch (responseJson.code) {
						case 403:
							reject({code:responseJson.code, error:'Forbidden'});
							break;

						default:
					}

					reject({code:responseJson.code, error:responseJson.error});
				})
				.catch(error => {
					reject({code:0, error:error});
				});
		});
	};

	jsonPost = (action, payload) => {
		return new Promise((resolve, reject) => {
			fetch(this.baseUrl + action, {
				method: 'POST',
				credentials: 'include',
//				credentials: 'same-origin',
				body: JSON.stringify(payload),
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			})
				.then(response => {
					switch (response.status) {
						case 401:
							reject({code:response.status, error:'Not authenticated'});
							break;

						case 403:
							reject({code:response.status, error:'Forbidden'});
							break;

						default:
							// Expects a JSON
							return response.json();
					}
				})
				.then(responseJson => {
					if (responseJson.success) {
						resolve(responseJson);
					}

					switch (responseJson.code) {
						case 403:
							reject({code:responseJson.code, error:'Forbidden'});
							break;

						default:
					}

					reject({code:responseJson.code, error:responseJson.error});
				})
				.catch(error => {
					reject({code:0, error:error});
				});
		});
	};

	formPost = (action, payload) => {
		return new Promise((resolve, reject) => {
			const _formData = Object.keys(payload).map((key) => {
				return key + '=' + encodeURIComponent(payload[key]);
			}).join('&');

			fetch(this.baseUrl + action, {
				method: 'POST',
				credentials: 'include',
//				credentials: 'same-origin',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				},
				body: _formData
			})
				.then(response => {
					switch (response.status) {
						case 401:
							reject({code:response.status, error:'Not authenticated'});
							break;

						case 403:
							reject({code:response.status, error:'Forbidden'});
							break;

						default:
							// Expects a JSON
							return response.json();
					}
				})
				.then(responseJson => {
					if (responseJson.success) {
						resolve(responseJson);
					}

					switch (responseJson.code) {
						case 403:
							reject({code:responseJson.code, error:'Forbidden'});
							break;

						default:
					}

					reject({code:responseJson.code, error:responseJson.error});
				})
				.catch(error => {
					reject({code:0, error:error});
				});
		});
	};

	/**
	 * NOTE: Do NOT add "Content-Type: multipart/form-data" to headers
	 */
	formMultiPartPost = (action, payload) => {
		return new Promise((resolve, reject) => {
			const _formData = new FormData();

			for (let k in payload) {
				_formData.append(k, payload[k]);
			}

			fetch(this.baseUrl + action, {
				method: 'POST',
				credentials: 'include',
//				credentials: 'same-origin',
				processData: false,
				headers: {
					Accept: 'application/json'
				},
				body: _formData
			})
				.then(response => {
					switch (response.status) {
						case 401:
							reject({code:response.status, error:'Not authenticated'});
							break;

						case 403:
							reject({code:response.status, error:'Forbidden'});
							break;

						default:
							// Expects a JSON
							return response.json();
					}
				})
				.then(responseJson => {
					if (responseJson.success) {
						resolve(responseJson);
					}

					switch (responseJson.code) {
						case 403:
							reject({code:responseJson.code, error:'Forbidden'});
							break;

						default:
					}

					reject({code:responseJson.code, error:responseJson.error});
				})
				.catch(error => {
					reject({code:0, error:error});
				});
		});
	};

	/**
	 * NOTE: `Content-Disposition` not available in cross-domain; so need to hard-code
	 */
	downloadFile = (action, payload, method = 'POST') => {
		return new Promise((resolve, reject) => {
			let httpResponse = null;

			fetch(this.baseUrl + action, {
				method: method,
				credentials: 'include',
//				credentials: 'same-origin',
				body: JSON.stringify(payload),
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(response => {
					switch (response.status) {
						case 401:
							reject({code:response.status, error:'Not authenticated'});
							break;

						case 403:
							reject({code:response.status, error:'Forbidden'});
							break;

						default:
							httpResponse = response;
							// Expects a binary
							return response.blob();
					}
				})
				.then(responseBlob => {
//					const filename = 'filename.ext';
					const filename = httpResponse.headers.get('Content-Disposition').split('filename=')[1];
					let a = document.createElement('a');

					a.href = window.URL.createObjectURL(responseBlob);
					a.download = filename;
					document.body.appendChild(a);
					a.click();
				})
				.catch(error => {
					reject({code:0, error:error});
				});
		});
	};
}
