import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRelation } from '../actions/relations';
import {
    Box,
    Flex,
    List, ListItem, ListIcon, Button, Tag, Text
} from '@chakra-ui/react';
import { ArrowRightIcon, ArrowForwardIcon, DeleteIcon } from '@chakra-ui/icons'

// const CircleIcon = (props) => (
//     <Icon viewBox="0 0 200 200" {...props}>
//         <path
//             fillRule="green"
//             d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
//         />
//     </Icon>
// )

const ShowAllRelations = () => {
    const dispatch = useDispatch();
    const relationsData = useSelector(state => state.relations);
    // console.log("relD", relationsData);

    return (
        <div>
            {
                !relationsData.length ? <Text fontSize="lg" color="gray.500">No relations added</Text> : (
                    <List spacing={3}> {
                        relationsData.map((relation, key) => (
                            // <Text fontSize="18px" color="gray.1000" key={key}>
                            <ListItem key={key}>
                                <Flex justifyContent="center" alignItems="center">
                                    <Box p="4" w="10px" h="5" bg="white">
                                        <ListIcon as={ArrowRightIcon} color="green.500" />
                                    </Box>
                                    <Box p="4" w="650px" h="5" bg="white">
                                        <span>{relation.userName1}</span>
                                        <ArrowForwardIcon />
                                        <span><Tag size="md" variant="solid" colorScheme="orange">{relation.relationType}</Tag></span>
                                        <ArrowForwardIcon />
                                        <span>{relation.userName2}</span>
                                    </Box>
                                    <Box p="4" w="70px" h="5" bg="white">
                                        <Button disabled colorScheme="red" size="xs" onClick={() => dispatch(deleteRelation(relation._id))}>
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
        </div >
    )
}

export default ShowAllRelations
