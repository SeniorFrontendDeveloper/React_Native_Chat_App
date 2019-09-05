import * as types from './actionTypes'
import firebaseService from '../../services/firebase'
import '@firebase/database'

const FIREBASE_REF_USERS = firebaseService.database().ref('users')


export const restoreSession = () => {
  return (dispatch) => {
    dispatch(sessionRestoring())

    let unsubscribe = firebaseService.auth()
      .onAuthStateChanged(user => {
        if (user) {
          dispatch(sessionSuccess(user))
          unsubscribe()
        } else {
          dispatch(sessionLogout())
          unsubscribe()
        }
      })
  }
}

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch(sessionLoading())

    firebaseService.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        dispatch(sessionError(error.message))
      })

    let unsubscribe = firebaseService.auth()
      .onAuthStateChanged(user => {
        if (user) {
          dispatch(sessionSuccess(user))
          unsubscribe()
        }
      })
  }
}

export const signupUser = (name, email, password, country, phone) => {
  return (dispatch) => {
    dispatch(sessionLoading())

    let createdAt = new Date().getTime()
    let userData = {
      name: name,
      email: email,
      password: password,
      country: country,
      phone: phone,
      createdAt: createdAt,
    }

    firebaseService.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        dispatch(sessionError(error.message));
      })

      FIREBASE_REF_USERS.push().set(userData, (error) => {
      if (error) {
        dispatch(sessionError(error.message))
      } else {
      
      }
    })

    let unsubscribe = firebaseService.auth()
      .onAuthStateChanged(user => {
        if (user) {
          dispatch(sessionSuccess(user))
          unsubscribe()
        }
      })
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(sessionLoading())

    firebaseService.auth()
      .signOut()
      .then(() => {
        dispatch(sessionLogout())
      })
      .catch(error => {
        dispatch(sessionError(error.message))
      })
  }
}

export const getUsersList = () => {
  return (dispatch) => {
    FIREBASE_REF_USERS.on('value', (snapshot) => {
      dispatch(getUserList(snapshot.val()))
    }, (errorObject) => {
      dispatch(loadMessagesError(errorObject.message))
    })
  }
}

const sessionRestoring = () => ({
  type: types.SESSION_RESTORING
})

const sessionLoading = () => ({
  type: types.SESSION_LOADING
})

const sessionSuccess = user => ({
  type: types.SESSION_SUCCESS,
  user
})

const sessionError = error => ({
  type: types.SESSION_ERROR,
  error
})

const sessionLogout = () => ({
  type: types.SESSION_LOGOUT
})

const getUserList = users => ({
  type: types.GET_USER_LIST,
  users
})
