/**
 * CMDP - Category Management Actions
 *
 * @author    Rajith Kumarapeli
 *            Chathurika Senani
 * @version   1.0.0 2019-July-11
 * @copyright Omobio (Pvt.) Ltd., Sri Lanka.
 */
import Helper from '../../utils/Helper';


export const fetchCategories = async (dispatch, start, limit, search) => {
	const payload = await Helper.http.formPost('cat-mng/read-categories', { start, limit, search });

	return dispatch({
		type: 'FETCH_CATEGORIES',
		payload: { total: payload.total, items: payload.data }
	});
};

export const fetchCategoryStruct = async (dispatch, start, limit, search) => {
	const payload = await Helper.http.formPost('cat-mng/get-category-struct', { start, limit, search });

	return dispatch({
		type: 'FETCH_CATEGORYSTRUCT',
		payload: { total: payload.total, items: payload.data }
	});
};

export const fetchDesignation = async (dispatch, start, limit, search) => {
	const payload = await Helper.http.formPost('cat-mng/read-designations', { start, limit, search });

	return dispatch({
		type: 'FETCH_DESIGNATIONS',
		payload: { total: payload.total, items: payload.data }
	});
};

export const fetchLocation = async (dispatch, start, limit, search) => {
	const payload = await Helper.http.formPost('cat-mng/read-locations', { start, limit, search });

	return dispatch({
		type: 'FETCH_LOCATIONS',
		payload: { total: payload.total, items: payload.data }
	});
};


export const readCategories = async ( start, limit, search ) => {
	const payload = await Helper.http.formPost('cat-mng/read-categories', { start, limit, search });
	return payload
};

export const saveCategory = async (params) => {
	await Helper.http.jsonPost('cat-mng/update-category', params);
	
	return true;
};
export const saveDesignation = async (params) => {
	await Helper.http.jsonPost('cat-mng/update-designation', params);
	
	return true;
};
export const saveLocation = async (params) => {
	await Helper.http.jsonPost('cat-mng/update-location', params);
	
	return true;
};

export const deleteDesignation = async (params) => {
	await Helper.http.jsonPost('cat-mng/delete-designation', params);
	
	return true;
};

export const deleteLocation = async (params) => {
	await Helper.http.jsonPost('cat-mng/delete-location ', params);
	
	return true;
};
