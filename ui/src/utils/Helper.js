/**
 * CMDP - General helper
 *
 * @author    Amil Waduwawara
 * @version   1.0.0 2019-Apr-13
 * @copyright Omobio (Pvt.) Ltd., Sri Lanka.
 */
import Config from 'config/Main';
import Http from './Http';


const Helper = {
	config: Config,
	http: new Http(Config.baseUrl),

	/**
	 * values must be an array of objects having id and name
	 */
	findNameById: (id, values) => {
		for (let o of values) {
			if (o.id === id) {
				return o.name;
			}
		}

		return null;
	},

	validateNumber: (number) => {
		return !isNaN(number);
	}
}


export default Helper;
