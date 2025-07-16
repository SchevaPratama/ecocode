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
        <Heading textAlign="center" size="lg" color="green.700">
          {plant.name}
        </Heading>

        <Badge
          variant="subtle"
          colorScheme="green"
          alignSelf="center"
          fontStyle="italic"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          px={{ base: 2, md: 3 }}
          py={1}
          maxW="100%"
          textAlign="center"
          wordBreak="break-word"
          overflowWrap="break-word"
          whiteSpace="normal" // ✅ allow line breaks
          display="inline-block" // ✅ override Chakra's inline-flex
        >
          {plant.latin}
        </Badge>

        <Separator borderColor="green.200" />

        <Box w="full" display="flex" justifyContent="center">
          <Text
            whiteSpace="pre-line"
            fontSize="md"
            color="gray.700"
            lineHeight="1.7"
            maxW="600px"
            w="100%"
            wordBreak="break-word"
            overflowWrap="break-word"
          >
            {plant.description}
          </Text>
        </Box>

        <Separator borderColor="green.200" />
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
