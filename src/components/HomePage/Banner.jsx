import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="w-4/5 mx-auto py-4">
            <Image
                className="rounded-3xl"
                src="/assets/images/img-3.jpg"
                alt="banner image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '500px' }}
            ></Image>
        </div>
    );
};

export default Banner;