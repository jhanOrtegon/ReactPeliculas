import { useState } from "react"

export const useForm = (stateInitial = {}) => {

    const [values, setValues] = useState(stateInitial)

    const handleChange = ({ target }) => {
        setValues({ ...values, [target.name]: target.value })
    }

    return { values, handleChange }
}
