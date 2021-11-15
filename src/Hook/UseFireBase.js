import initializeFireBase from "../Pages/LogIn/FireBase/FireBase.initialize"
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFireBase();
const UseFireBase = () => {
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const userCreateAccount = (email, password, UserName,location,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: UserName };
                setUser(newUser);
                // save our user on DB 
                saveUser(email, UserName,'POST');
                // set our user name 
                updateProfile(auth.currentUser, {
                    displayName: UserName
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                }).finally(() => setIsLoading(false));
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ..
            });
    }
    const userLogin = (email, password,location,history) => {
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                console.log(userCredential);
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
            }).finally(() => setIsLoading(false));
    }
    const UserLogOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false));

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])
    useEffect(() => {
        fetch(`https://powerful-fjord-91287.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://powerful-fjord-91287.herokuapp.com/user', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        admin,
        isLoading,
        userCreateAccount,
        userLogin,
        UserLogOut
    }


}
export default UseFireBase;