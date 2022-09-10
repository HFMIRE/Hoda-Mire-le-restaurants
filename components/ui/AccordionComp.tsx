import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  VStack,
} from "@chakra-ui/react";
import { AdditionalInfoProps } from "../../interface.model";
const AccordionComp = ({ allergies }: AdditionalInfoProps) => {
  return (
    <Box p={4}>
      <Accordion defaultIndex={[0]} allowMultiple color={"brand.500"}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Dietary
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
            suscipit felis, at ornare risus. Aliquam erat volutpat. Integer
            pharetra commodo eros, a pharetra arcu vehicula vitae. Integer
            convallis vel orci vitae blandit. Maecenas vel mauris rutrum,
            faucibus mi at, mollis quam.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Allergy
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {allergies &&
            allergies.map((allergy) => (
              <VStack>
                <AccordionPanel alignItems={"baseline"}>
                  {allergy}
                </AccordionPanel>
              </VStack>
            ))}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default AccordionComp;
