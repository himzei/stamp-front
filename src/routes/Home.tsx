// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Slider from "react-slick";
import { ReactComponent as One } from "../assets/svg/bicycle.svg";
import { ReactComponent as Two } from "../assets/svg/walk.svg";
import { ReactComponent as Three } from "../assets/svg/bus.svg";
import { ReactComponent as Four } from "../assets/svg/train.svg";
import { ReactComponent as Five } from "../assets/svg/mountain.svg";
import { ReactComponent as Six } from "../assets/svg/beach.svg";
import { ReactComponent as Seven } from "../assets/svg/food.svg";
import { ReactComponent as Eight } from "../assets/svg/activity.svg";
import { AiOutlineMessage, AiOutlineHeart } from "react-icons/ai";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const settingsSecond = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const settingsThird = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Layout hasTabBar>
      <VStack w="100%" h="full" spacing="12">
        <Box w="360px" bg="gray.100">
          <Slider {...settings}>
            <Box w="100%" h="400px" overflow={"hidden"} position="relative">
              <Image
                w="100%"
                h="400px"
                objectFit={"cover"}
                objectPosition="center bottom"
                src="https://images.unsplash.com/photo-1606054534744-a3b13e35c574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80"
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                w="full"
                h="full"
                bgGradient={"linear(black 15%, black 50%)"}
                opacity="0.5"
              />
              <VStack
                position="absolute"
                top="80px"
                left="50px"
                w="70%"
                h="300"
                alignItems={"flex-start"}
                spacing="-2"
              >
                <Text color="white" fontSize="22">
                  E-7-4 visa application
                </Text>
                <Text
                  textTransform={"uppercase"}
                  color="white"
                  fontWeight={600}
                  fontSize="32"
                >
                  local Stamp Tour
                </Text>
                <Box h="8" />
                <Button colorScheme="gray" variant="outline" role="group">
                  <Text color="white" _groupHover={{ color: "black" }}>
                    투어시작
                  </Text>
                </Button>
              </VStack>
            </Box>
            <Box w="100%" h="400px" overflow={"hidden"} position="relative">
              <Image
                w="100%"
                h="400px"
                objectFit={"cover"}
                objectPosition="center bottom"
                src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                w="full"
                h="full"
                bgGradient={"linear(black 15%, black 50%)"}
                opacity="0.5"
              />
              <VStack
                position="absolute"
                top="80px"
                left="50px"
                w="70%"
                h="300"
                alignItems={"flex-start"}
                spacing="0"
              >
                <Text color="white" fontSize="22">
                  대구 MUSTGO 투어
                </Text>
                <Text
                  textTransform={"uppercase"}
                  color="white"
                  fontWeight={600}
                  fontSize="32"
                  lineHeight={"36px"}
                >
                  대구의 명소에서 AR체험, 그리고 상품권까지
                </Text>
                <Box h="8" />
                <Button colorScheme="gray" variant="outline" role="group">
                  <Text color="white" _groupHover={{ color: "black" }}>
                    투어시작
                  </Text>
                </Button>
              </VStack>
            </Box>
            <Box w="100%" h="400px" overflow={"hidden"} position="relative">
              <Image
                w="100%"
                h="400px"
                objectFit={"cover"}
                objectPosition="center bottom"
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                w="full"
                h="full"
                bgGradient={"linear(black 15%, black 50%)"}
                opacity="0.5"
              />
              <VStack
                position="absolute"
                top="80px"
                left="50px"
                w="70%"
                h="300"
                alignItems={"flex-start"}
                spacing="0"
              >
                <Text color="white" fontSize="22">
                  아이들과 함께하는
                </Text>
                <Text
                  textTransform={"uppercase"}
                  color="white"
                  fontWeight={600}
                  fontSize="32"
                  lineHeight={"36px"}
                >
                  경주문화 STUDY AR 투어
                </Text>
                <Box h="8" />
                <Button colorScheme="gray" variant="outline" role="group">
                  <Text color="white" _groupHover={{ color: "black" }}>
                    투어시작
                  </Text>
                </Button>
              </VStack>
            </Box>
          </Slider>
        </Box>

        {/* Contact */}
        <Grid templateColumns={"repeat(4, 1fr)"} gap="4">
          <GridItem cursor="pointer">
            <VStack
              justify={"center"}
              w="80px"
              h="80px"
              rounded="full"
              border="1px"
              borderColor="gray.200"
              bg="gray.50"
            >
              <One width="50px" height="50px" />
              <Text color="gray.600" fontSize="14px">
                자전거
              </Text>
            </VStack>
          </GridItem>
          <GridItem cursor="pointer">
            <VStack
              justify={"center"}
              w="80px"
              h="80px"
              rounded="full"
              border="1px"
              borderColor="gray.200"
              bg="gray.50"
            >
              <Two width="50px" height="50px" />
              <Text color="gray.600" fontSize="14px">
                트래킹
              </Text>
            </VStack>
          </GridItem>
          <GridItem cursor="pointer">
            <VStack
              justify={"center"}
              w="80px"
              h="80px"
              rounded="full"
              border="1px"
              borderColor="gray.200"
              bg="gray.50"
            >
              <Three width="50px" height="50px" />
              <Text color="gray.600" fontSize="14px">
                버스
              </Text>
            </VStack>
          </GridItem>
          <GridItem cursor="pointer">
            <VStack
              justify={"center"}
              w="80px"
              h="80px"
              rounded="full"
              border="1px"
              borderColor="gray.200"
              bg="gray.50"
            >
              <Four width="50px" height="50px" />
              <Text color="gray.600" fontSize="14px">
                트래인
              </Text>
            </VStack>
          </GridItem>
          <GridItem cursor="pointer">
            <VStack
              justify={"center"}
              w="80px"
              h="80px"
              rounded="full"
              border="1px"
              borderColor="gray.200"
              bg="gray.50"
            >
              <Five width="50px" height="50px" />
              <Text color="gray.600" fontSize="14px">
                산
              </Text>
            </VStack>
          </GridItem>
          <GridItem cursor="pointer">
            <VStack
              justify={"center"}
              w="80px"
              h="80px"
              rounded="full"
              border="1px"
              borderColor="gray.200"
              bg="gray.50"
            >
              <Six width="50px" height="50px" />
              <Text color="gray.600" fontSize="14px">
                바다
              </Text>
            </VStack>
          </GridItem>
          <GridItem cursor="pointer">
            <VStack
              justify={"center"}
              w="80px"
              h="80px"
              rounded="full"
              border="1px"
              borderColor="gray.200"
              bg="gray.50"
            >
              <Seven width="50px" height="50px" />
              <Text color="gray.600" fontSize="14px">
                음식
              </Text>
            </VStack>
          </GridItem>

          <GridItem cursor="pointer">
            <VStack
              justify={"center"}
              w="80px"
              h="80px"
              rounded="full"
              border="1px"
              borderColor="gray.200"
              bg="gray.50"
            >
              <Eight width="50px" height="50px" />
              <Text color="gray.600" fontSize="14px">
                체험
              </Text>
            </VStack>
          </GridItem>
        </Grid>

        {/* 추천스탬프 투어 */}
        <VStack
          w="360px"
          alignItems={"flex-start"}
          px="2"
          overflow={"hidden"}
          // bg="blue.500"
        >
          <Text fontWeight={600} fontSize="20">
            추천 스탬프투어
          </Text>
          <Box w="600px">
            <Slider {...settingsSecond}>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <Box w="200px" key={i} cursor={"pointer"}>
                    <VStack alignItems={"flex-start"} mr="8" w="full">
                      <Box
                        rounded="2xl"
                        w="180px"
                        h="180px"
                        bg="red"
                        overflow={"hidden"}
                      >
                        <Image
                          w="210px"
                          h="210px"
                          objectFit={"cover"}
                          src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80"
                        />
                      </Box>
                      <VStack spacing="0" alignItems={"flex-start"}>
                        <Text fontWeight={600} fontSize="16" px="1">
                          호미곶 해맞이 광장
                        </Text>
                        <Text fontSize="14" px="1">
                          포항 경상북도
                        </Text>
                      </VStack>
                    </VStack>
                  </Box>
                ))}
            </Slider>
          </Box>
        </VStack>

        {/* 추천 AR 투어 */}
        <VStack w="360px" alignItems={"flex-start"} overflow="hidden">
          <HStack w="full" justifyContent={"flex-start"} px="2">
            <Text fontWeight={600} fontSize="20" textAlign={"left"}>
              추천 AR체험
            </Text>
          </HStack>
          <Box w="980px" px="2">
            <Slider {...settingsThird}>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <Box w="400px" key={i} cursor={"pointer"}>
                    <VStack alignItems={"flex-start"} w="full">
                      <Box
                        rounded="2xl"
                        w="300px"
                        h="168px"
                        overflow={"hidden"}
                        position="relative"
                      >
                        <Image
                          w="430px"
                          objectFit={"cover"}
                          src="https://images.unsplash.com/photo-1616036902568-fa623d8f0c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                        />
                        <Box
                          position="absolute"
                          w="full"
                          h="full"
                          top="0"
                          left="0"
                          bgGradient={
                            "linear(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7))"
                          }
                          opacity="0.8"
                        />
                        <VStack
                          position="absolute"
                          top="50%"
                          left="50%"
                          transform={"translate(-50%, -50%)"}
                          spacing="0"
                          color="white"
                        >
                          <HStack
                            bg="black"
                            w="90px"
                            h="30px"
                            rounded="lg"
                            justifyContent={"center"}
                          >
                            <Text fontWeight={600} fontSize="14">
                              기획전
                            </Text>
                          </HStack>
                          <Box h="4" />
                          <Text fontWeight={600} fontSize="16" px="1">
                            호미곶 해맞이 광장
                          </Text>
                          <Text fontSize="14" px="1">
                            포항 경상북도
                          </Text>
                        </VStack>
                      </Box>
                    </VStack>
                  </Box>
                ))}
            </Slider>
          </Box>
        </VStack>

        {/* 최신글 */}
        <VStack w="360px" alignItems={"flex-start"} px="2" overflow={"hidden"}>
          <Text fontWeight={600} fontSize="20">
            최신 스토리
          </Text>
          <VStack spacing="4" w="full">
            {Array(4)
              .fill("")
              .map((_, i) => (
                <HStack spacing="6" w="full" key={i}>
                  <Box w="30%" rounded="xl" overflow={"hidden"}>
                    <Image
                      w="100px"
                      h="100px"
                      objectFit={"cover"}
                      src="https://images.unsplash.com/photo-1675578262884-6fcabfafaeea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                  </Box>
                  <VStack
                    alignItems={"flex-start"}
                    justifyContent="space-between"
                    h="full"
                    w="70%"
                    py="2"
                  >
                    <VStack spacing="0" alignItems={"flex-start"}>
                      <Text fontWeight={600} fontSize="16">
                        대구의 명소에서 AR체험
                      </Text>
                      <HStack spacing="4" color="gray.500" fontSize="12">
                        <Text>대구 중구</Text>
                        <Text>2023-02-05</Text>
                      </HStack>
                      <Text fontSize="12" fontWeight={600}>
                        02.06.(월) ~ 03.01.(화)
                      </Text>
                    </VStack>
                    <HStack
                      w="full"
                      justifyContent={"flex-end"}
                      spacing={3}
                      fontSize="12"
                      color="gray.600"
                    >
                      <HStack spacing={1}>
                        <AiOutlineMessage />
                        <Text>2</Text>
                      </HStack>
                      <HStack spacing={1}>
                        <AiOutlineHeart />
                        <Text>2</Text>
                      </HStack>
                    </HStack>
                  </VStack>
                </HStack>
              ))}
            <Box py="4">
              <Button
                w="full"
                size="sm"
                colorScheme={"black"}
                variant="link"
                _hover={{ color: "gray.500" }}
              >
                <Text>더보기</Text>
              </Button>
            </Box>
          </VStack>
        </VStack>
      </VStack>
    </Layout>
  );
}
