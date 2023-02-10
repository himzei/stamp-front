import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { ImLocation } from "react-icons/im";
import { useQuery } from "@tanstack/react-query";
import { addressData } from "../api";
import useGeolocation from "../components/useGeolocation";
import { getDistance } from "../components/GetDistance";
import Approval from "../assets/png/approval.png";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Tour() {
  const location = useGeolocation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const { data, isLoading } = useQuery(["address"], addressData);
  console.log(data, isLoading);

  useEffect(() => {
    mapscript();
    // 주소로 좌표를 검색
  });

  const presentLat = location.coordinates?.lat;
  const presentLng = location.coordinates?.lng;

  const mapscript = () => {
    let container = document.querySelector("#mapKakao") as HTMLElement;
    let options = {
      center: new window.kakao.maps.LatLng(presentLat, presentLng),
      level: 2,
    };

    const map = new window.kakao.maps.Map(container, options);

    const imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
      imageSize = new window.kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
      imageOption = { offset: new window.kakao.maps.Point(27, 69) };

    const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      ),
      markerPosition = new window.kakao.maps.LatLng(presentLat, presentLng);

    var marker = new window.kakao.maps.Marker({
      position: markerPosition,
      image: markerImage, // 마커이미지 설정
    });

    marker.setMap(map);

    data?.course.map(
      (item: any) =>
        new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(item.latitude, item.longitude),
          title: item.name,
        })
    );
  };

  return (
    <Layout hasTabBar hasTitle title="투어">
      <VStack w="full" h="full" spacing="12" position="relative">
        <Box as="div" w="full" h="85vh" id="mapKakao" />
      </VStack>

      <Box
        position="absolute"
        w="full"
        h="150"
        bottom="100"
        left="0"
        zIndex={99}
        overflow="hidden"
      >
        <Box w="860px" px="4">
          <Slider {...settings}>
            {data?.course.map((item: any, index: any) => (
              <Box w="300px" key={index} cursor={"pointer"}>
                <VStack alignItems={"flex-start"} w="full">
                  <Box
                    rounded="2xl"
                    bg="white"
                    w="260px"
                    h="120px"
                    overflow={"hidden"}
                    position="relative"
                    display={"flex"}
                    alignItems="center"
                    px="4"
                  >
                    <HStack>
                      <Box rounded="xl" overflow="hidden" w="80px" h="80px">
                        <Image
                          w="80px"
                          h="80px"
                          objectFit={"cover"}
                          src={item.imageUrl}
                        />
                      </Box>
                      <VStack
                        w="140px"
                        h="90px"
                        justifyContent={"space-between"}
                        alignItems="flex-start"
                      >
                        <VStack spacing="0" alignItems={"flex-start"}>
                          <Text fontWeight={600} fontSize="14" px="1">
                            {item.name}
                          </Text>
                          <Text fontSize="12" px="1">
                            {item.address}
                          </Text>
                        </VStack>
                        <HStack
                          fontSize="10"
                          spacing={0}
                          w="full"
                          justifyContent={"flex-end"}
                        >
                          <ImLocation />
                          <Text>
                            {getDistance(
                              Number(presentLat),
                              Number(presentLng),
                              Number(item.latitude),
                              Number(item.longitude)
                            )}
                            Km
                          </Text>
                        </HStack>
                      </VStack>
                    </HStack>
                    {item.visited === "Y" ? (
                      <Box position="absolute" right="2" top="2">
                        <Image src={Approval} w="100" h="100" />
                      </Box>
                    ) : null}
                  </Box>
                </VStack>
              </Box>
            ))}
          </Slider>
        </Box>

        {/* <Box w="1000px" px="4" mr="8">
          <Slider {...settings}>
            <Box bg="red.100" w="100px" p="4" rounded="xl" boxShadow={"md"}>
              <VStack h="full">
                <HStack h="full">
                  <Box rounded="xl" overflow="hidden" w="80px" h="80px">
                    <Image
                      w="80px"
                      h="80px"
                      objectFit={"cover"}
                      src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80"
                    />
                  </Box>
                  <VStack
                    w="160px"
                    h="80px"
                    justifyContent={"flex-start"}
                    alignItems={"flex-start"}
                  >
                    <VStack
                      spacing={0}
                      alignItems="flex-start"
                      justifyContent={"space-between"}
                    >
                      <Text fontWeight={600} fontSize="14">
                        대구 북구 연경동
                      </Text>
                      <Text fontSize="12" color="gray.500">
                        대구 아이캔스터디룸 구찌 지갑 습득했어요.
                      </Text>
                    </VStack>
                    <HStack
                      w="full"
                      justifyContent={"flex-end"}
                      color="gray.500"
                      fontSize="12"
                      spacing={1}
                    >
                      <ImLocation />
                      <Text fontSize="12">1.2Km</Text>
                    </HStack>
                  </VStack>
                </HStack>
              </VStack>
            </Box>
          </Slider>
        </Box> */}
      </Box>
    </Layout>
  );
}
