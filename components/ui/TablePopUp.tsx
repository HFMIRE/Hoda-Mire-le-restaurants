import {
  Box,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import { SubscribeForm } from "./SubscribeForm";
import { CloseIcon } from "@chakra-ui/icons";

export const TablePopUp = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Box>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="xl" // `trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly.
        blockScrollOnMount={false}
        trapFocus={false}
      >
        <ModalOverlay opacity={0.9} />
        <ModalContent
          borderRadius="2xl"
          mx="10"
          bg={"black"}
          border={"2px"}
          borderColor={"brand.100"}
        >
          <ModalBody>
            <CloseIcon
              w={3}
              h={3}
              color="orange.500"
              onClick={() => setIsOpen(false)}
            />

            <Stack
              maxW="xs"
              mx="auto"
              py={{
                base: "12",
                md: "16",
              }}
              spacing={{
                base: "6",
                md: "10",
              }}
            >
              <Stack spacing="3" textAlign="center">
                <Box bgColor={"red"}>
                  {/* <Image
                    src="/assets/sushiLogo.png"
                    layout="fill"
                    alt="Picture of the author"
                    width={200}
                    height={100}
                  /> */}
                </Box>
                <Text fontSize="lg" color={"orange.50"}>
                  <Box as="span" whiteSpace="nowrap" fontWeight="bold">
                    Welcome to Sushi
                  </Box>{" "}
                  & GO
                  <Box> Liverpool St</Box>
                </Text>
              </Stack>

              <SubscribeForm />
              <Link
                fontSize="sm"
                textAlign="center"
                color={useColorModeValue("orange.700", "orange.400")}
                textDecoration="underline"
                onClick={() => setIsOpen(false)}
              >
                No, I want delivery
              </Link>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
