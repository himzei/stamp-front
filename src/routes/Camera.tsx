import { useEffect, useState } from "react";
import QrReader from "react-qr-reader";
import { Box, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function Camera() {
  const [result, setResult] = useState("no result");
  let handleScan = (data: any) => {
    if (data) {
      setResult(data);
    }
  };
  let handleError = (err: any) => {
    console.log(err);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (result === "korea12") {
      navigate("/tour");
    }
  }, [result, navigate]);

  return (
    <Layout hasTabBar hasTitle title="카메라">
      <Box w="full" h="full">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          facingMode="environment"
        />
      </Box>
      <Text>{result}</Text>
    </Layout>
  );
}
