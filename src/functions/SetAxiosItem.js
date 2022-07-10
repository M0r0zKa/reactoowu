import {useEffect, useState} from "react";

const SetAxiosItem = (fn, id, state) => {
    const [items, setItems] = useState(state)
    useEffect(() => {

        fn.then(({data}) => setItems(data))

    }, [id ? id : null])

    return items
}


export {SetAxiosItem}