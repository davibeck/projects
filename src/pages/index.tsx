import { Inter } from "@next/font/google";
import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "src/components/Form/Input";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" bg="gray.800">
      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
