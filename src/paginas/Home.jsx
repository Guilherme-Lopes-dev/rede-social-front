import React from 'react'
import Posts from '../componentes/Posts'
import Menu from '../componentes/Menu'
import Novidades from '../componentes/Novidades'
import { Box } from '@chakra-ui/react'
import { useFetchPosts } from '../consultas/fetch'
import { usePutPosts } from '../consultas/post'

const Home = () => {

  const { posts } = useFetchPosts()
  

  return (
    <Box display='flex'
      alignItems='center'
      justifyContent='center'
      width='100%'
    >
      <Menu />
      <Posts posts={posts} />
      <Novidades />
    </Box>
  )
}

export default Home