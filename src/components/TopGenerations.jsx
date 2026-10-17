import React from 'react';
import PhotoCard from './PhotoCard';

const TopGenerations = async() => {
    const res = await fetch('https://8-conception-project.vercel.app/data.json')
    const photos = await res.json()
    const topPhotos = photos.slice(0, 9)
    // console.log(topPhotos)
    return (
        <div>
            <h1 className='font-bold text-5xl'>Top Generations</h1>

            <div className="">
                {topPhotos.map(photo =>
                    <PhotoCard key={photo.id} photo={photo} />
                )}
            </div>
        </div>
    );
};

export default TopGenerations;