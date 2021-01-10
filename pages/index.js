import { Box, Image,ChakraProvider, CSSReset, Flex, Text, SimpleGrid, Link } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faMedium } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <ChakraProvider>
      <CSSReset />
        <Flex
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          mt={4}
        >
        <Text fontSize="3xl" fontWeight="bold">
          About ak1t0
        </Text>
        <SimpleGrid>
          <Box boxSize="sm"><Image src="icon.png"/></Box>
        </SimpleGrid>
        <SimpleGrid  m={[2, 3]} columns={3} spacing={10}>
          <Link href="https://twitter.com/_ak1t0">
            <FontAwesomeIcon icon={faTwitter} size="3x"/>
          </Link>
          <Link href="https://github.com/ak1t0">
            <FontAwesomeIcon icon={faGithub} size="3x"/>
          </Link>
          <Link href="https://medium.com/@ak1t0">
            <FontAwesomeIcon icon={faMedium} size="3x"/>
          </Link>
        </SimpleGrid>
        <SimpleGrid  m={[2, 3]}>
          <Text fontSize="2xl" fontWeight="bold">Skills</Text>
          <Text fontSize="2xl">Software Engineering</Text>
          <Text> Kotlin (Server) </Text>
          <Text> Go (CLI/misc) </Text>
          <Text> JavaScript/Python/Ruby/Java/Perl </Text>
          <Text fontSize="2xl">Security Research</Text>
          <Text> Tor/Darkweb </Text>
        </SimpleGrid>
      </Flex>
    </ChakraProvider>
  )
}