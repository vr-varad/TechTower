import {auth, googleProvider} from '../config/firebase'
import {useState} from 'react'
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const Auth = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({})
    console.log(auth?.currentUser)
    const signIn = async()=>{   
        try {
            await createUserWithEmailAndPassword(auth,email,password)
            console.log('User Generated')
            setUser(auth.currentUser)
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log(error)
        }
    }

    const signInWithGoogle = async()=>{
        try {
            await signInWithPopup(auth, googleProvider)
            setUser(auth.currentUser)
            console.log("User Generated")
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async()=>{
        try {
            await signOut(auth)
            alert("Signed Out")
        } catch (error) {
            console.log(error)
        }
    }
    return (
    <div>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} required value={email} placeholder="email" />
        <input type="password" onChange={(e)=>setPassword(e.target.value)} required value={password} placeholder="password" />
        <button onClick={signIn}>Sign In</button>
        <button onClick={signInWithGoogle}>SignIn With Google</button>
        <button onClick={logout}>LogOut</button>
        <p>User :  {user?user.displayName:"No Used Logged in"}</p>
    </div>
    );
}