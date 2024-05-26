import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, HStack, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box>
      {/* Navigation Bar */}
      <Box bg="blue.800" color="white" px={4} py={2}>
        <Flex alignItems="center">
          <Heading size="md">ElectroShop</Heading>
          <Spacer />
          <HStack spacing={4}>
            <Link href="#">Home</Link>
            <Link href="#">Products</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Contact Us</Link>
            <InputGroup maxW="300px" ml={4}>
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                bg="white"
                color="black"
              />
              <InputRightElement>
                <SearchIcon color="gray.500" />
              </InputRightElement>
            </InputGroup>
          </HStack>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box bg="gray.100" py={10} textAlign="center">
        <Container maxW="container.lg">
          <Heading mb={4}>Featured Product</Heading>
          <Image src="https://via.placeholder.com/800x400" alt="Featured Product" mb={4} />
          <Text fontSize="xl">Check out our latest and greatest electronic gadgets!</Text>
          <Button mt={4} colorScheme="blue">Shop Now</Button>
        </Container>
      </Box>

      {/* Product Grid */}
      <Container maxW="container.lg" py={10}>
        <Heading mb={6} textAlign="center">Our Products</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          {Array.from({ length: 8 }).map((_, index) => (
            <GridItem key={index} bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
              <Image src={`https://via.placeholder.com/240x240?text=Product+${index + 1}`} alt={`Product ${index + 1}`} />
              <Box p={4}>
                <Text fontWeight="bold">Product {index + 1}</Text>
                <Text>$99.99</Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box bg="blue.800" color="white" py={10}>
        <Container maxW="container.lg">
          <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between" alignItems="center">
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <HStack spacing={4} mt={{ base: 4, md: 0 }}>
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaInstagram /></Link>
            </HStack>
          </Flex>
          <Flex mt={4} justifyContent="center">
            <Link href="#" mx={2}>Terms of Service</Link>
            <Link href="#" mx={2}>Privacy Policy</Link>
            <Link href="#" mx={2}>Contact Us</Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;