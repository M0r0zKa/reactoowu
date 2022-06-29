import React from 'react';
import {useForm} from "react-hook-form";
import {savePost} from "../../service/newPost.api.service";

function FormPost(props) {

    let {register, handleSubmit,formState:{errors}} = useForm(
        {
            defaultValues: {
                userId: "UserID",
                title: "Title",
                body: "body"
            }
        })

    const submit = (data) => {
        savePost(data)
    }

    return (
        <div className={'divFormPost'}>
            <form className={'formPost'} onSubmit={handleSubmit(submit)}>

                <input className={'userId'} type={"text"}
                       {...register('userId',{required:true})}
                />

                <input className={'title'} type={"text"}
                       {...register('title',{required:true})}
                />
                <input className={'body'} type={"text"}
                       {...register('body')}
                />
                <button className={'buttonPost'}>Save</button>


            </form>


        </div>
    );
}

export default FormPost;