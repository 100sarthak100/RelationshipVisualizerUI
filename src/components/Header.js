import React, {useState} from 'react';
import {
    Box,
    Flex,
    Heading,
    HStack,
    Center,
    Link,
    Text,
    useMediaQuery,
    VStack,
} from '@chakra-ui/react';

const Header = () => {
    const [isLargerThanTablet] = useMediaQuery('(min-width: 48em)');

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onMenuButtonPressedHandler = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <Box position="relative" w="100%" h={['100vh', '30vh']}>
            <Box
                bg={isLargerThanTablet ? 'none' : isMenuOpen ? 'black' : 'none'}
                position="absolute"
                top="0"
                left="0"
                right="0"
                px="4"
                color="gray"
                h="full"
                maxW={['container.xl']}
                mx="auto"
            >
                <Flex alignItems="center" justifyContent="space-between" h="10vh">
                    <Heading>Relationship Visualizer</Heading>
                    {isLargerThanTablet ? (
                        <HStack spacing="6" fontWeight="bold" fontSize="xl">
                            <Link href="#">About</Link>
                        </HStack>
                    ) : isMenuOpen ? (
                        <svg
                            width="20"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg"
                            cursor="pointer"
                            onClick={onMenuButtonPressedHandler}
                        >
                            <path
                                d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                                fill="#FFF"
                                fillRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="24"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                            cursor="pointer"
                            onClick={onMenuButtonPressedHandler}
                        >
                            <g fill="#FFF" fillRule="evenodd">
                                <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                            </g>
                        </svg>
                    )}
                </Flex>
                <Center bg="white" color="white">
                    <Flex
                        h={['50vh', '30vh']}
                        color="gray"
                        justifyContent={['center', 'center', 'flex-start']}
                        alignItems="center"
                    >
                        {!isLargerThanTablet && isMenuOpen ? (
                            <VStack
                                spacing="6"
                                textTransform="uppercase"
                                letterSpacing="widest"
                                fontSize="2xl"
                            >
                                <Link href="#">About</Link>
                            </VStack>
                        ) : (

                            <Text
                                border="2px"
                                px="4"
                                py={['8', '4']}
                                // maxW={['80', '80', 'md']}
                                fontWeight="light"
                                textTransform="uppercase"
                                fontSize={['3xl', '3xl', '3xl', '3xl']}
                                lineHeight="shorter"
                                letterSpacing="wide"
                            >
                                Find the Degree of seperation in a relation graph
                            </Text>
                        )}
                    </Flex>
                </Center>
            </Box>
        </Box>
    )
}

export default Header
