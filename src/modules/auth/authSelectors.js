export const isLoginError = (state) => state.auth.login.isError

export const isregisterError = (state) => state.auth.register.isError

export const getLoginError = (state) => state.auth.login.error

export const getRegisterError = (state) => state.auth.register.error

export const isLoginLoading = (state) => state.auth.login.isLoading

export const isRegisterLoading = (state) =>
  state.auth.register.isLoading
