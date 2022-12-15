import React from 'react'
import css from './Navigation.module.css';


const Navigation = () => {
    return (
        <div className={css.header}>
            <p className={css.wellcomeInfo}>Wellcome to your private PhoneBook. It is easy way to manage your contacts. To start work, please, make a registration. If you are registered already, please authorize.</p>
        </div>
    )
}

export default Navigation