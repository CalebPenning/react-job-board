import JoblyApi from "./api";

const registerUser = async (data, updateState) => {
    let res = await JoblyApi.register(data)
    updateState(res.token)
}

const loginUser = async (data, updateState) => {
    let res = await JoblyApi.login(data)
    if (res.success) updateState(res.token)
}

const logoutUser = updateState => {
    updateState(null)
}

export { registerUser, loginUser, logoutUser }