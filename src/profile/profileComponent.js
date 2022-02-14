import React from "react";


const ProfileComponent = ({ fullName, bio, imgSrc, profession }) => {
  return (
    <div>
      <h1>FullName: {fullName}</h1>
      <p>bio: {bio}</p>
      <img src={imgSrc} alt="helas!" />
      <h3>Profession: {profession}</h3>
    </div>
  );
};

export default ProfileComponent;
