/**
 * CMDP - Main Store
 *
 * @author    Amil Waduwawara
 *            Chathurika Senani
 *            Rajitha Kumarapeli
 * @version   1.0.0 2019-July-08
 * @copyright Omobio (Pvt.) Ltd., Sri Lanka.
 */
import React, { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
	users: {total:0, items:[]},
	categories: {total:0, items:[]},
	designations: {total:0, items:[]},
	locations: {total:0, items:[]},
	workorders: {total:0, items:[]},
	workorderhistory: {total:0, items:[]},
	permissions: {total:0, items:[]},
	artifacts: {total:0, items:[]}
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_USERS':
			return { ...state, users: action.payload };

		case 'FETCH_CATEGORIES':
			return { ...state, categories: action.payload };

		case 'FETCH_CATEGORYSTRUCT':
			return { ...state, categorystruct: action.payload }; // similar to FETCH_CATEGORIES

		case 'FETCH_DESIGNATIONS':
			return { ...state, designations: action.payload };

		case 'FETCH_ROLES':
			return { ...state, roles: action.payload };

		case 'FETCH_LOCATIONS':
			return { ...state, locations: action.payload };

		case 'FETCH_WORKORDERS':
			return { ...state, workorders: action.payload };

		case 'FETCH_WORKORDER_HISTORY':
			return { ...state, workorderhistory: action.payload };

		case 'FETCH_PERMISSIONS':
			return { ...state, permissions: action.payload };

		case 'FETCH_ARTIFACTS':
		case 'SET_ARTIFACT':
		case 'UPLOAD_ARTIFACT':
		case 'DOWNLOAD_ARTIFACT':
			return { ...state, artifacts: action.payload };

		case 'SAVE_USER':
		case 'APPROVE_WORKORDER':
		case 'REJECT_WORKORDER':
		case 'DELETE_WORKORDERS':
		default:
			return state;
	}
}

export const StoreProvider = (props) => {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	const value = { state, dispatch };

	return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
