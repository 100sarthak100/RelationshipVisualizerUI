import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../actions/users';
import ShowUser from './ShowUser';
import CreateUserForm from './CreateUserForm';
import {
    Box,
    Flex
} from '@chakra-ui/react';

const User = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <Flex align="center" justify="center" flexDirection="column" w="100%">
            <Box border="1px" borderColor="gray.500" padding="20px" paddingBottom="30px">
                <CreateUserForm />
                <ShowUser />
            </Box>
        </Flex>
    )
}

export default User
