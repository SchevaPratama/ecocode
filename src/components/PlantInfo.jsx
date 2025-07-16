import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  Separator,
  AspectRatio,
  Badge,
} from "@chakra-ui/react";

export default function PlantInfo({ plant }) {
  if (!plant) return null;

  return (
    <Box
      borderWidth="1px"
      borderRadius="2xl"
      p={6}
      mt={6}
      bg="green.50"
      boxShadow="md"
      maxW="lg"
      mx="auto"
    >
      <Stack spacing={4}>
        <Heading size="lg" color="green.700">
          {plant.name}
        </Heading>

        <Badge
          size="md"
          variant="subtle"
          colorScheme="green"
          alignSelf="start"
          fontStyle="italic"
        >
          {plant.latin}
        </Badge>

        <Separator borderColor="green.200" />

        <Text
          whiteSpace="pre-line"
          fontSize="md"
          color="gray.700"
          lineHeight="1.7"
        >
          {plant.description}
        </Text>

        <AspectRatio ratio={4 / 3} borderRadius="lg" overflow="hidden">
          <Image
            src={plant.image}
            alt={plant.name}
            objectFit="cover"
            fallbackSrc="https://via.placeholder.com/300x225?text=No+Image"
          />
        </AspectRatio>
      </Stack>
    </Box>
  );
}
