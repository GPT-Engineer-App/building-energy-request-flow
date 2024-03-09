import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, CheckboxGroup, Checkbox, Stack, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import CatImage from "../components/CatImage";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const supabaseUrl = "https://vdnhjxmsuykhvhnvjupi.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkbmhqeG1zdXlraHZobnZqdXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MjIyNjUsImV4cCI6MjAyNTM5ODI2NX0.byaihexABIEbRtnd1-n8R33kkt4lIwcB1xsX6P6PUA8";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

  const handleSubmit = async () => {
    const { data, error } = await supabase.from("leads").insert([{ address, floors, size, challenges, commonProblems, name, email }]).select();

    if (error) {
      console.error("Error submitting data:", error);
      return;
    }

    console.log("Submitted data:", data);
    handleNextStep();
  };

  const commonBuildingProblems = ["Inefficient heating system", "Poor insulation", "Window drafts", "Inefficient lighting", "Outdated appliances", "Smelly tubes"];

  return (
    <Container maxW="xl" py={10}>
      <VStack spacing={6}>
        {step === 1 && (
          <>
            <CatImage width="200px" height="300px" />
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
            <CatImage width="200px" height="300px" />
            <Text mt={4}>Our consultant team will be in touch with you shortly.</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
