/**
 * ****************************************************************************
 * @description     :   Combine all reducers on app
 * @created at      :   2021/12/06
 * @created by      :   SonMBG
 * @package         :   outfiz.com
 * @copyright       :   Copyright (c) OUTFIZ
 * @version         :   1.0.0
 * ****************************************************************************
 */

/**
 * import libraries
 */
import { combineReducers } from "redux";
import HomeReducer from "./home/reducer";

const rootReducer = combineReducers({
	Home: HomeReducer,
});

export default rootReducer;
