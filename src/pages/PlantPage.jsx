import { useParams } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
import PlantInfo from "../components/PlantInfo";
import { plantDatabase } from "../data";

export default function PlantPage() {
  const { plantId } = useParams();
  const plant = plantDatabase[plantId.toUpperCase()];

  if (!plant) {
    return (
      <Box p={6}>
        <Heading size="md" color="red.500">
          Plant not found
        </Heading>
      </Box>
    );
  }

  return (
    <Box p={6}>
      <PlantInfo plant={plant} />
    </Box>
  );
}
