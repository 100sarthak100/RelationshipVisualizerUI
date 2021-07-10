import React from 'react';
import GetRelation from './GetRelation';
import ShowRelation from './ShowRelation';
import {
    Flex
} from '@chakra-ui/react';

const RelationVisualizer = () => {
    return (
        <Flex align="center" justify="center" flexDirection="column" w="100%">
            <Flex align="center" justify="center" flexDirection="column" w="100%">
                <GetRelation />
                <ShowRelation />
            </Flex>
        </Flex>
    )
}

export default RelationVisualizer
