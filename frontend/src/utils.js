import JoblyApi from "./api";

const registerUser = async (data, updateState) => {
    let res = await JoblyApi.register(data)
    updateState(res.token)
}

/**
 * Takes formData, and a state-updating function (in this case, setToken)
 * If our API successfully returns a token with the form data given to it
 * then we store the user's token as a piece of state
 */
const loginUser = async (data, updateState) => {
    let res = await JoblyApi.login(data)
    if (res.success) updateState(res.token)
}
/**
 * 
 * Takes a state-updating function (in this case, removeToken)
 * and simply nullifies it. This is used in our logout logic
 */
const logoutUser = updateState => {
    updateState(null)
}



export { registerUser, loginUser, logoutUser }