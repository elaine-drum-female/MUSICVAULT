import React from 'react';
import UserLayout from '../../hoc/userlayout';
import LinkButton from '../utils/button';

const UserDashboard = () => {
    return (
        <UserLayout>
            <div>
                <div className="user_nfo_panel">
                    <h1>User Information</h1>
                    <div>
                        <span>name</span>
                        <span>lastname</span>
                        <span>email</span>
                    </div>
                    <LinkButton 
                        type="default"
                        title="Edit account info"
                        linkTo="/user/user_profile"
                    />
                </div>
                <div className="user_nfo_panel">
                    <h1>History Purchases</h1>
                    <div className="user_product_block_wrapper">
                        history
                    </div>
                </div>

            </div>
        </UserLayout>
    );
};

export default UserDashboard;