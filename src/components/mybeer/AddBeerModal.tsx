import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import CustomBeer from '../../assets/custom-beer.png';
import { BeerSchema } from '../../schema/beer.schema';

const AddBeerModal = (props: any) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (props.showAddBeerModal) {
            handleShow();
        } else {
            reset();
            handleClose();
        }
    }, [props.showAddBeerModal]);

    useEffect(()=> {
        if (!show) {
            reset();
            props.closeModal(false);
        }
    }, [show]);

    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            genre: '',
            description: ''
        },
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(BeerSchema),
    });

    const submitHandler = async (values: any) => {
        const addBeerData = {
            name: values.name,
            genre: values.genre,
            description: values.description
        };
        try {
            let customBeersArray: any = [];
            let customBeersFromStorage = window.sessionStorage.getItem('my-beers');
            if (customBeersFromStorage) {
                customBeersArray = JSON.parse(customBeersFromStorage);
                customBeersArray.push(addBeerData);
            } else {
                customBeersArray = [addBeerData];
            }
            window.sessionStorage.setItem('my-beers', JSON.stringify(customBeersArray));

            reset();
            handleClose();
            props.beerAdded();
        } catch (e) {
            reset();
            handleClose();
        }
    };

    const submitForm = async () => {
        const values = getValues();
        if (Object.keys(errors).length === 0) {
            await submitHandler(values);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Add a New Beer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="customBeerImage mb-4">
                        <img src={CustomBeer} alt="" height={'150px'} />
                    </div>
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Beer name*" {...register('name')} />
                            <Form.Text className="text-danger">
                                {errors?.name?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Genre*" {...register('genre')} />
                            <Form.Text className="text-danger">
                                {errors?.genre?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" placeholder="Description*" style={{ height: '100px' }} {...register('description')} />
                            <Form.Text className="text-danger">
                                {errors?.description?.message}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 float-end">
                            <Button variant="" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" type='submit'>
                                Save
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AddBeerModal;