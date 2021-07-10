import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../actions/users';
import { getRelation } from '../actions/relations';
import {
    Button,
    Wrap,
    WrapItem,
    Select,
    Center,
} from '@chakra-ui/react';

function GetRelation() {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.users);
    const [selectUser, setSelectUser] = useState({
        user1Id: '', userName1: '', user2Id: '', userName2: ''
    });

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(selectUser);
        dispatch(getRelation(selectUser));
    }

    // const clear = () => {
    //     setSelectUser({ user1Id: '', user2Id: '', userName1: '', userName2: '' })
    // }

    const handleChange = (e) => {
        let key = e.target.value;
        let userName = usersData[key]?.name;
        let userId = usersData[key]?._id;

        if (e.target.name !== "default" && e.target.name === "user1") {
            setSelectUser({
                ...selectUser,
                userName1: userName,
                user1Id: userId
            })
        }
        else if (e.target.name !== "default" && e.target.name === "user2") {
            setSelectUser({
                ...selectUser,
                userName2: userName,
                user2Id: userId
            })
        }
        else {
            // TODO
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Wrap>
                <WrapItem>
                    <Center w="180px" h="80px" bg="white">
                        <Select variant="filled" name="user1" onChange={handleChange}>
                            <option value="DEFAULT" name="default">User 1</option>
                            {usersData.map((user, key) =>
                                <option key={key} value={key}>{user.name}</option>
                            )}
                        </Select>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w="30px" h="80px" bg="white">
                        -
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w="180px" h="80px" bg="white">
                        <Select variant="filled" name="user2" onChange={handleChange}>
                            <option value="DEFAULT" name="default">User 2</option>
                            {usersData.map((user, key) =>
                                <option key={key} value={key} >{user.name}</option>
                            )
                            }
                        </Select>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w="150px" h="80px" bg="white">
                        <Button colorScheme="green" size="md" type="submit">Search</Button>
                    </Center>
                </WrapItem>
            </Wrap>
        </form>
    )
}

export default GetRelation
