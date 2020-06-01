export const getViewer = (state) => state.viewer.user

export const isAuth = (state) => state.viewer.isAuth

export const isLoadingEdit = (state) =>
  state.viewer.editViewer.isLoading

export const getEditError = (state) => state.viewer.editViewer.error

export const isEditError = (state) => state.viewer.editViewer.isError
