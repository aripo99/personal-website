"use client";

import React, { useState } from 'react';
import Image from 'next/image'

const InteractiveProfileImage: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Image
            src={"/images/avatar.jpg"}
            alt="Your Image Description"
            className={`w-1/4 rounded-full transition-transform duration-300 transform ${isHovered ? 'scale-110' : ''}`}
            width={200}
            height={200}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        />
    );
};

export default InteractiveProfileImage;
