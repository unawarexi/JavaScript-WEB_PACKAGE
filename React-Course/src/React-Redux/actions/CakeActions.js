import { BUY_CAKE } from "./GeneralActions"


/**
 *  the generalActions is where the action type is 
 * you don't need to make it a string over here again
 * you export the function actions here to the reducer folder
 * 
 */
export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

