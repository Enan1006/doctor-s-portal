import React from 'react';

const CardInfo = ({ img, title, description, bgClass }) => {
    return (
        <div className={`card lg:card-side shadow-xl p-5 text-white ${bgClass}`}>
            <figure>
                <img src={img} alt="Album" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CardInfo;