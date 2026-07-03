//File: src/components/common/Avatar.jsx
import React from 'react';
import "./Common.css";

const Avatar = ({ src, alt, size = 50 }) => {
    const avatarStyle = {
        width: size,
        height: size,
        borderRadius: '50%',
        objectFit: 'cover',
    };
    return (
        <img src={src} alt={alt} style={avatarStyle} className="avatar" />
    );
}

export default Avatar;


