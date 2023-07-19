import React from 'react';

const User = ({toggleModal,item}) => {
    return (
        <>
            <div className="inner-item">
                <div className="item-box" onClick={() => toggleModal()}>
                    <h2 className="item-title">
                        {item.title}
                    </h2>
                    <div className="item-phone">
                        <img src={"/img/phone.svg"} alt={"phone"} style={{width: "14px", height: "24px"}}/>
                        <span>{item.phone}</span>
                    </div>
                    <div className="item-email">
                        <img src="/img/letter.svg" alt=""/> <span>{item.email}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;
