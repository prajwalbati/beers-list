import * as yup from 'yup';

export const BeerSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required.')
        .transform((currentValue) => currentValue.trim()),
    genre: yup
        .string()
        .required('Genre is required.')
        .transform((currentValue) => currentValue.trim()),
    description: yup
        .string()
        .required('Description is required.')
        .transform((currentValue) => currentValue.trim())
});