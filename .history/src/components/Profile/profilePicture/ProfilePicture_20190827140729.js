import React, {useState} from 'react'
import Profile from '../Profile';
import PropTypes from  'prop-types'



const ProfilePicture = (props) => {
    const [props.profileImage, setProfileImage] = useState('')
    const [props.profileName, setProfileName] = useState('')
    return (
        <div className = 'card'>
            <img src={}
            alt=''
            className='round-img'
            style={{width:'60px'}} />

        </div>
    )
}
ProfilePicture.defaultPops = {
    profileImage: PropTypes.string.isRequired,
    profileName:PropTypes.string.isRequired
}

export default ProfilePicture