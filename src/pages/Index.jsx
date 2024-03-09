import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, CheckboxGroup, Checkbox, Stack, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState("");
  const [floors, setFloors] = useState("");
  const [size, setSize] = useState("");
  const [challenges, setChallenges] = useState("");
  const [commonProblems, setCommonProblems] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = () => {
    // Submit data to API or store in state for prototype
    console.log({ address, floors, size, challenges, commonProblems, name, email });
    handleNextStep();
  };

  const commonBuildingProblems = ["Inefficient heating system", "Poor insulation", "Window drafts", "Inefficient lighting", "Outdated appliances"];

  return (
    <Container maxW="xl" py={10}>
      <VStack spacing={6}>
        {step === 1 && (
          <>
            <Heading>Address</Heading>
            <FormControl id="address">
              <FormLabel>Select address</FormLabel>
              <Input type="text" placeholder="Search for your address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </FormControl>
            <Button rightIcon={<FaArrowRight />} colorScheme="teal" onClick={handleNextStep}>
              Next
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <Heading>Building Details</Heading>
            <FormControl id="floors" isRequired>
              <FormLabel>Number of floors</FormLabel>
              <Input type="number" placeholder="Enter number of floors" value={floors} onChange={(e) => setFloors(e.target.value)} />
            </FormControl>
            <FormControl id="size" isRequired>
              <FormLabel>Size of the building (in square meters)</FormLabel>
              <Input type="number" placeholder="Enter size in square meters" value={size} onChange={(e) => setSize(e.target.value)} />
            </FormControl>
            <Button rightIcon={<FaArrowRight />} colorScheme="teal" onClick={handleNextStep}>
              Next
            </Button>
          </>
        )}

        {step === 3 && (
          <>
            <Heading>Energy Challenges</Heading>
            <FormControl id="challenges" isRequired>
              <FormLabel>Describe your biggest challenges</FormLabel>
              <Textarea placeholder="Describe challenges" value={challenges} onChange={(e) => setChallenges(e.target.value)} />
            </FormControl>
            <FormControl id="commonProblems">
              <FormLabel>Select common problems</FormLabel>
              <CheckboxGroup colorScheme="green" value={commonProblems} onChange={setCommonProblems}>
                <Stack spacing={2}>
                  {commonBuildingProblems.map((problem) => (
                    <Checkbox key={problem} value={problem}>
                      {problem}
                    </Checkbox>
                  ))}
                </Stack>
              </CheckboxGroup>
            </FormControl>
            <Button rightIcon={<FaArrowRight />} colorScheme="teal" onClick={handleNextStep}>
              Next
            </Button>
          </>
        )}

        {step === 4 && (
          <>
            <Heading>Contact Info</Heading>
            <FormControl id="name" isRequired>
              <FormLabel>Your name</FormLabel>
              <Input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <Button rightIcon={<FaCheckCircle />} colorScheme="teal" onClick={handleSubmit}>
              Submit
            </Button>
          </>
        )}

        {step > 4 && (
          <Box textAlign="center">
            <Heading>Thank You!</Heading>
            <Text mt={4}>Our consultant team will be in touch with you shortly.</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
