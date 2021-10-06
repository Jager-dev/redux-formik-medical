import axios from "axios";



export const getProjects = () => {
  return (dispatch) => {
    axios("https://6115f1058f38520017a38640.mockapi.io/projects")
      .then(({data}) => {
        return dispatch({type: "GET_PROJECT", payload: data})
      })
  }
}

export const addProject = (data) => {
  return (dispatch) => {
    axios.post("https://6115f1058f38520017a38640.mockapi.io/projects", data)
      .then(({data}) => {
        return dispatch({type: "ADD_PROJECT", payload: data})
      })
  }
}
