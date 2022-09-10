import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
const AlertMsg = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Error 404</AlertTitle>
      <AlertDescription>Compoent Not found </AlertDescription>
    </Alert>
  );
};

export default AlertMsg;
