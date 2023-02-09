import React from 'react'
import PropTypes from 'prop-types';
const Profile = (props) => {
  return (
    <div>
      <h1>hello i'm {props.fullname} </h1>
      <h3>my {props.bio}</h3>
      <h3>  I'm {props.profession} </h3>
      <div>  {props.children} </div>
      <button onClick={()=>(props.alertme(props.fullname))}>alert </button>
    </div>
  )
}
Profile.defaultProps={
fullname:"soumaya",
bio:"inspiring is to be a full stack developper",
profession:"a student baccalaureat and fullstack development"
}
Profile.propTypes={
    fullname: PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
    

}
export default Profile
