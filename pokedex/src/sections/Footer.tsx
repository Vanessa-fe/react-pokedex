import { signOut } from 'firebase/auth';
import React from 'react'
import {MdOutlinePowerSettingsNew} from 'react-icons/md'
import { firebaseAuth } from '../utils/FirebaseConfig';
import { useAppDispatch } from '../app/hooks';
import { setToast, setUsersStatus } from '../app/slices/AppSlices';

function Footer() {
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    signOut(firebaseAuth);
    dispatch(setUsersStatus(undefined));
    dispatch(setToast('Logged out successfully from Firebase.'));
  };
  return <footer>
    <div className="block"></div>
    <div className="data"></div>
    <div className="block">
      <MdOutlinePowerSettingsNew onClick={handleLogOut}/>
    </div>
  </footer>
}

export default Footer;