import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Alert status="success">
        <AlertIcon />
        <AlertTitle>
          This is updated! Good, i don't init in Dev Mode =|
        </AlertTitle>
        <AlertDescription>Ok, all right!</AlertDescription>
      </Alert>
    </>
  );
}
