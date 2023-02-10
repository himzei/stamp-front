import { Box, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GrUserSettings } from "react-icons/gr";
import {
  MdArrowBackIosNew,
  MdTour,
  MdPhotoCamera,
  MdSpaceDashboard,
} from "react-icons/md";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  hasTitle?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
  hasTitle,
}: LayoutProps) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };
  return (
    <Box w="full" display={"flex"} justifyContent="center" position="relative">
      {hasTitle ? (
        <HStack
          position="fixed"
          top={0}
          bg="white"
          maxWidth={"390px"}
          w="390px"
          h={12}
          px={10}
          fontSize={"lg"}
          fontWeight={600}
          color={"gray.600"}
          justifyContent="center"
          alignItems="center"
          borderBottom={"1px"}
          borderColor="gray.200"
        >
          {canGoBack ? (
            <Box
              onClick={onClick}
              position="absolute"
              left={4}
              cursor="pointer"
            >
              <MdArrowBackIosNew size={20} />
            </Box>
          ) : null}
          {title ? <span>{title}</span> : null}
        </HStack>
      ) : null}
      <Box pt={hasTitle ? 12 : 0} pb={24} w="lg" position="relative">
        {children}
      </Box>
      {hasTabBar ? (
        <HStack
          position="fixed"
          bottom={0}
          bg="white"
          maxWidth={"lg"}
          color="gray.700"
          w="full"
          pb={5}
          pt={3}
          justifyContent="space-between"
          fontSize={"xs"}
          borderTop="1px"
          borderColor="gray.200"
        >
          <Grid templateColumns={"repeat(5, 1fr)"} w="full" borderTop={2}>
            <Link to="/">
              <GridItem cursor={"pointer"}>
                <VStack alignItems={"center"}>
                  <AiFillHome size={24} />
                  <Text>홈</Text>
                </VStack>
              </GridItem>
            </Link>
            <Link to="/tour">
              <GridItem cursor={"pointer"}>
                <VStack alignItems={"center"}>
                  <MdTour size={24} />
                  <Text>투어</Text>
                </VStack>
              </GridItem>
            </Link>
            <Link to="/camera">
              <GridItem>
                <VStack alignItems={"center"}>
                  <MdPhotoCamera size={24} />
                  <Text>인증</Text>
                </VStack>
              </GridItem>
            </Link>
            <Link to="/community">
              <GridItem>
                <VStack alignItems={"center"}>
                  <MdSpaceDashboard size={24} />
                  <Text>커뮤니티</Text>
                </VStack>
              </GridItem>
            </Link>
            <Link to="/profile">
              <GridItem>
                <VStack alignItems={"center"}>
                  <GrUserSettings size={24} />
                  <Text>프로필</Text>
                </VStack>
              </GridItem>
            </Link>
          </Grid>
        </HStack>
      ) : null}
    </Box>
  );
}
