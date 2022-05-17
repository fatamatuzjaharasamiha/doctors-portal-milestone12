import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-primary uppercase text-white font-bold  bg-gradient-to-r from-green-300 to-blue-500 hover:from-blue-500 hover:to-green-500 ">{children}</button>
    );
};

export default PrimaryButton;