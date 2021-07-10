import React from 'react';
import { useSelector } from 'react-redux';
import {
    Text,
    List, ListItem, ListIcon
} from '@chakra-ui/react';
import { ArrowRightIcon, ArrowForwardIcon } from '@chakra-ui/icons'

const ShowRelation = () => {
    const relationGraphs = useSelector(state => state.relationVis);

    return (
        <div>
            {
                !relationGraphs.length ? <Text fontSize="lg" color="gray.500">No users selected</Text>
                    : (
                        <List spacing={3}> {
                            relationGraphs.map((relationGraph, key) => (
                                <Text fontSize="20px" color="green" key={key}>
                                    {key <= 5 ? (
                                        <ListItem>
                                            <ListIcon as={ArrowRightIcon} color="green.500" />
                                            ( {relationGraph.length - 1} ) { } { }
                                            {relationGraph.map((user, key) => (
                                                <span key={key}>
                                                    {key === 0 || key + 1 === relationGraph.length ? <b>{user}</b> : user} {key + 1 === relationGraph.length ? '' : <ArrowForwardIcon />}
                                                </span>
                                            ))}
                                        </ListItem>
                                    ) : ''}
                                </Text>
                            ))
                        }
                        </List>
                    )
            }
        </div>
    )
}

export default ShowRelation
