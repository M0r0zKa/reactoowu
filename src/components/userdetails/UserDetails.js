import React from 'react';

function UserDetails({user}) {


    return (
        <div>

<ul>

    <li> <b>User Name</b> -{user.username}</li>
    <li> <b>Email</b> -{user.email}</li>
    <p>Address</p>
    <li> <b>Street</b> -{user.address.street}</li>
    <li> <b>Suite</b> -{user.address.suite}</li>
    <li> <b>Zipcode</b> -{user.address.zipcode}</li>
    <p>Geo</p>
    <li> <b>Lat</b> -{user.address.geo.lat}</li>
    <li> <b>Lng</b> -{user.address.geo.lng}</li>
    <li> <b>Website</b> -{user.website}</li>
    <p>Company</p>
    <li> <b>Name</b> -{user.company.name}</li>
    <li> <b>CatchPhrase</b> -{user.company.catchPhrase}</li>
    <li> <b>Bs</b> -{user.company.bs}</li>





</ul>


        </div>
    );
}

export {UserDetails};