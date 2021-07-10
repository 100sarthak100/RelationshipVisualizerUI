import React, { useEffect } from 'react';
import CreateRelation from './CreateRelation';
import ShowAllRelations from './ShowAllRelations';
import { useDispatch } from 'react-redux';
import { getAllRelations } from '../actions/relations';
import {
    Box,
    Flex
} from '@chakra-ui/react';

function Relation() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRelations());
    }, [dispatch]);

    return (
        <Flex align="center" justify="center" flexDirection="column" w="100%">
            <Box border="1px" borderColor="gray.500" padding="20px" paddingBottom="30px">
                <CreateRelation />
                <ShowAllRelations />
            </Box>
        </Flex>
    )
}

export default Relation
