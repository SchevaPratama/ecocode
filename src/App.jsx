import { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Container,
  Text,
  VStack,
} from "@chakra-ui/react";
import PlantInfo from "./components/PlantInfo";
import QRScanner from "./components/QRScanner";
import { plantDatabase } from "./data";

function App() {
  const [plant, setPlant] = useState(null);
  const [scanning, setScanning] = useState(true);

  const handleScanSuccess = (data) => {
    if (plantDatabase[data]) {
      setPlant(plantDatabase[data]);
      setScanning(false);
    } else {
      alert("Plant not found in database");
    }
  };

  return (
    <Box minH="100vh" py={10}>
      <Container maxW="lg" borderRadius="xl" bg="white" boxShadow="xl" p={6}>
        <VStack spacing={6}>
          <Box textAlign="center">
            <Heading color="green.600">Eco Code</Heading>
            <Text fontSize="md" color="gray.600" mt={2}>
              By KKN UNIBA | Ketapang
            </Text>
          </Box>

          {scanning ? (
            <QRScanner onScanSuccess={handleScanSuccess} />
          ) : (
            <>
              <PlantInfo plant={plant} />
              <Button
                mt={4}
                onClick={() => setScanning(true)}
                colorScheme="green"
                size="md"
                borderRadius="full"
              >
                Scan Another Plant
              </Button>
            </>
          )}
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
