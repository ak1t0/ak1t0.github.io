import { Box, Image, UnorderedList, ListItem, ChakraProvider, CSSReset, Flex, Text, SimpleGrid, Link } from "@chakra-ui/react"
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
          <UnorderedList>
            <ListItem> Kotlin (Server) </ListItem>
            <ListItem> Go (CLI/misc) </ListItem>
            <ListItem> JavscScript/Python/Ruby/Java/Perl </ListItem>
          </UnorderedList>
          <Text fontSize="2xl">Security Research</Text>
            <UnorderedList>
              <ListItem> Tor/Darkweb </ListItem>
            </UnorderedList>
        </SimpleGrid>
      </Flex>
    </ChakraProvider>
  )
}