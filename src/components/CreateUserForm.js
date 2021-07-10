import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create } from '../actions/users';
import {
    Heading,
    Button,
    Wrap,
    WrapItem,
    Center,
    Input
} from '@chakra-ui/react';

function CreateUserForm() {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(create(formData));
        clear();
    }

    const clear = () => {
        setFormData({ name: '' });
    }

    return (
        <div>
            <Heading as="h4" size="md">
                Add New Users
            </Heading>
            <form onSubmit={handleSubmit}>
                <Wrap>
                    <WrapItem>
                        <Center w="170px" h="80px" bg="white">
                            <Input
                                placeholder="Username"
                                type='text'
                                name='Name'
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w="90px" h="80px" bg="white">
                            <Button colorScheme="green" size="sm" type="submit">Add</Button>
                        </Center>
                    </WrapItem>
                </Wrap>
            </form>
        </div>
    )
}

export default CreateUserForm
