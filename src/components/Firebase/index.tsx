"use client"

// Import the functions you need from the Firebase SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useEffect, useState } from "react";
import Image from 'next/image'

const provider = new GoogleAuthProvider();


// configuration and secret stuff
const firebaseConfig = {
    apiKey: "AIzaSyCnMP8BS9zBN7PBK3qC3-deQ4Ei8H0EIO8",
    authDomain: "nocturnal-27fb1.firebaseapp.com",
    projectId: "nocturnal-27fb1",
    storageBucket: "nocturnal-27fb1.appspot.com",
    messagingSenderId: "746292991369",
    appId: "1:746292991369:web:b6ed5f0c7633eb1971bd58",
    measurementId: "G-LLZBJV1XGV"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);


export const AuthBtton = () => {
    const auth = getAuth();
    console.log(auth);
    const [user, setUser] = useState<string>("");
    function googleSignin() {
        signInWithPopup(auth, provider);
        setUser(auth.currentUser?.photoURL || "")
    }
    useEffect(() => {
        setUser(auth.currentUser?.photoURL || "")
    }, [auth])

    return (
        <div>
            {user != "" ? (
                <Image className="rounded-full" src={user} alt="accimg" width={75} height={75}></Image>
            ) : (
                <button onClick={() => googleSignin()}>Sign in</button>
            )}
        </div>
    )
}