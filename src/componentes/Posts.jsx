import React from 'react'
import { Image, Box, HStack, IconButton, Avatar, Heading, Text, Button, Textarea } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/card'
import { DragHandleIcon, CheckIcon, ChatIcon, HamburgerIcon } from '@chakra-ui/icons'
import InputPosts from './InputPosts'

const Posts = ({ posts }) => {
  return (
    <div>
    <InputPosts/>
      {posts?.map((post) => (
        <Box key={posts.id} className="post">
          <Card maxW='md'>
            <CardHeader>
              <HStack spacing='4'>
                <Avatar  src={post.image} />
                <Box flex='1'>
                  <Heading size='sm'>{post.name}</Heading>
                </Box>
                <IconButton
                  variant='ghost'
                  colorScheme='gray'
                  aria-label='See menu'
                  icon={<DragHandleIcon />}
                />
              </HStack>
            </CardHeader>
            <CardBody>
              <Text>
                {post.content}
              </Text>
            </CardBody>
            <Image
              objectFit='cover'
              src={post.image}
             
            />
            <CardFooter justify='space-between'>
              <Button flex='1' variant='ghost' leftIcon={<CheckIcon />}>
                Like
              </Button>
              <Button flex='1' variant='ghost' leftIcon={<ChatIcon />}>
                Comment
              </Button>
              <Button flex='1' variant='ghost' leftIcon={<HamburgerIcon />}>
                Share
              </Button>
            </CardFooter>
          </Card>
        </Box>
      ))}

    </div>
  )
}

export default Posts

