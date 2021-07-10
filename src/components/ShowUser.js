import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../actions/users';
import {
    Box,
    Flex,
    Text,
    List, ListItem, ListIcon, Button
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'
import { Icon } from "@chakra-ui/react"

const CircleIcon = (props) => (
    <Icon viewBox="0 0 200 200" {...props}>
        <path
            fillRule="green"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
        />
    </Icon>
)

function ShowUser() {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.users);
    // console.log("userData", usersData)

    return (
        <div>
            {
                !usersData.length ? <Text fontSize="lg" color="gray.500">No users added</Text> : (
                    <List spacing={3}> {
                        usersData.map((user, key) => (
                            // <Text fontSize="20px" color="gray.1000" key={key}>
                            <ListItem key={key}>
                                <Flex justifyContent="center" alignItems="center">
                                    <Box p="4" w="10px" h="5" bg="white">
                                        <ListIcon as={CircleIcon} color="green.300" />
                                    </Box>
                                    <Box p="4" w="220px" h="5" bg="white">
                                        <Text fontSize="20px" color="gray.1000" key={key}>
                                            <span>{user?.name} </span>
                                        </Text>
                                    </Box>
                                    <Box p="4" w="70px" h="5" bg="white">
                                        <Button colorScheme="red" size="xs" onClick={() => dispatch(deleteUser(user._id))}>
                                            <DeleteIcon />
                                        </Button>
                                    </Box>
                                </Flex>
                            </ListItem>
                            // </Text>
                        ))
                    }</List>
                )
            }
        </div>
    )
}

export default ShowUser
