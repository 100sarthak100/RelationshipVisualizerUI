import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../actions/users';
import { createRelations } from '../actions/relations';
import {
    Heading,
    Button,
    Wrap,
    WrapItem,
    Select,
    Center,
} from '@chakra-ui/react';

const CreateRelation = () => {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.users);

    const relations = ['Mother', 'Father', 'Husband', 'wife', 'Daughter', 'Son', 'Friend', 'Brother', 'Sister', 'Grand Father', 'Grand Mother']

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const [formData, setFormData] = useState({
        user1Id: '', userName1: '', relationType: '', user2Id: '', userName2: ''
    });

    const handleChange = (e) => {
        let key = e.target.value;
        if (e.target.name !== "default" && e.target.name === "user1") {
            let userName = usersData[key]?.name;
            let userId = usersData[key]?._id;

            setFormData({
                ...formData,
                userName1: userName,
                user1Id: userId
            })
        }
        else if (e.target.name !== "default" && e.target.name === "user2") {
            let userName = usersData[key]?.name;
            let userId = usersData[key]?._id;

            setFormData({
                ...formData,
                userName2: userName,
                user2Id: userId
            })
        }
        else {
            setFormData({
                ...formData,
                relationType: e.target.value
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createRelations(formData));
    }

    return (
        <div>
            <Heading as="h4" size="md">
                Add New Relations
            </Heading>
            <form onSubmit={handleSubmit}>
                <Wrap>
                    <WrapItem>
                        <Center w="160px" h="80px" bg="white">
                            <Select variant="outline" name="user1" onChange={handleChange}>
                                <option value="DEFAULT" name="default">User 1</option>
                                {usersData.map((user, key) =>
                                    <option key={key} value={key}>{user.name}</option>
                                )}
                            </Select>
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w="20px" h="80px" bg="white">
                            -
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w="160px" h="80px" bg="white">
                            <Select name="relationType" onChange={handleChange}>
                                <option value="DEFAULT" name="default">Relation</option>
                                {relations.map((relation, key) => {
                                    return (
                                        <option value={relation} key={key}> {relation} </option>
                                    )
                                })}
                            </Select>
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w="20px" h="80px" bg="white">
                            -
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w="160px" h="80px" bg="white">
                            <Select name="user2" onChange={handleChange}>
                                <option value="DEFAULT" name="default">User 2</option>
                                {usersData.map((user, key) =>
                                    <option key={key} value={key} >{user.name}</option>
                                )}
                            </Select>
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w="100px" h="80px" bg="white">
                            <Button colorScheme="green" size="md" type="submit">Add</Button>
                        </Center>
                    </WrapItem>
                </Wrap>
            </form>
        </div>
    )
}

export default CreateRelation
