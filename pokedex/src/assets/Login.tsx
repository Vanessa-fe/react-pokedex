import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { firebaseAuth, usersRef } from '../utils/FirebaseConfig';
import { addDoc, getDocs, query, where } from 'firebase/firestore';
import { addSyntheticLeadingComment } from 'typescript';
import { useAppDispatch } from '../app/hooks';
import { setUsersStatus } from '../app/slices/AppSlices';

function Login() {
    const dispatch = useAppDispatch();
    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        const {
            user: { email, uid },
        } = await signInWithPopup(firebaseAuth, provider);
        if (email) {
            const firestoreQuery = query(usersRef, where("uid", "==", uid));
            const fetchedUser = await getDocs(firestoreQuery);
            if (fetchedUser.docs.length === 0) {
                await addDoc(usersRef, { uid, email });
            }
            dispatch(setUsersStatus({ email }));
        }
    };
    return (
        <div className='login'>
            <button className='login-btn'
                onClick={handleLogin}>
                <FcGoogle />
                Login with Google
            </button>
        </div>
    );
}

export default Login;
