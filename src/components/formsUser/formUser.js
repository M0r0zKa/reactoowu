import React from 'react';

import {useForm} from "react-hook-form";
import {PostUser} from "../../service/newUser.api.service";


function FormUser() {
    let {register, handleSubmit} = useForm({
        defaultValues: {
            name: 'Name',
            username: 'UserName',
            email: 'Email',
            address: {
                street: 'Street',
                suite: 'Suite',
                city: 'City',
                zipcode: 'Zipcode',
                geo: {
                    lat: 'Lat',
                    lng: 'Lng'
                }
            },
            phone:'Phone',
            website:'WebSite',
            company:{
                name:'Name',
                catchPhrase:'Catch Phrase',
                bs:'BS'
            }
        }
    })

    const submit = (obj) => {

        PostUser(obj)
    }

    return (
        <div className={'divForm'}>
            <form className={'form'} onSubmit={handleSubmit(submit)}>
                <input
                    type={'text'}
                    {...register('name')}
                />
                <input
                    type={'text'}
                    {...register('username')}
                />
                <input
                    type={'text'}
                    {...register('email')}
                />
                <input
                    type={'text'}
                    {...register('address.street')}
                />
                <input
                    type={'text'}
                    {...register('address.suite')}
                />
                <input
                    type={'text'}
                    {...register('address.city')}
                />
                <input
                    type={'text'}
                    {...register('address.zipcode')}
                />
                <input
                    type={'text'}
                    {...register('address.geo.lat')}
                />
                <input
                    type={'text'}
                    {...register('address.geo.lng')}
                />
                <input
                    type={'text'}
                    {...register('phone')}
                />
                <input
                    type={'text'}
                    {...register('website')}
                />
                <input
                    type={'text'}
                    {...register('company.name')}
                />
                <input
                    type={'text'}
                    {...register('company.catchPhrase')}
                />
                <input
                    type={'text'}
                    {...register('company.bs')}
                />

                <button>Push</button>
            </form>
        </div>
    )
}


export {FormUser};