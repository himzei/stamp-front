import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { ImLocation } from "react-icons/im";

declare global {
  interface Window {
    kakao: any;
  }
}

const addressData = {
  city: "서울",
  name: "가로수길점",
  time: "09:30~22:00",
  tel: "매장통합 콜센터 : 1544-2514 (평일 9-18시, 근무시간 외 ARS 안내)",
  holiday: "설날(음력), 추석 당일",
  address: "대구 북구 동화천로 220",
};

export default function Tour() {
  useEffect(() => {
    let map;
    const geocoder = new window.kakao.maps.services.Geocoder(); // 주소-좌표 반환 객체를 생성
    // 주소로 좌표를 검색
    geocoder.addressSearch(addressData.address, (result: any, status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면
        var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

        // 지도를 생성
        const container = document.querySelector("#mapKakao") as HTMLElement;
        const options = {
          center: coords,
          level: 3,
        };
        const iwContent = `
					<div style="padding:5px;">
						<div style="text-align:center;font-size:12px;font-weight:500">${addressData.address}</div>
					</div>
				`;
        map = new window.kakao.maps.Map(container, options);

        // 결과값으로 받은 위치를 마커로 표시
        // new window.kakao.maps.Marker({
        //   map: map,
        //   position: coords,
        // });

        new window.kakao.maps.InfoWindow({
          map: map,
          position: coords,
          content: iwContent,
        });
      }
    });
  }, []);
  return (
    <Layout hasTabBar hasTitle title="투어">
      <VStack w="full" h="full" spacing="12" position="relative">
        <Box as="div" w="full" h="85vh" id="mapKakao" />
        <Box
          position="absolute"
          w="full"
          h="150"
          bottom="2"
          left="0"
          roundedTopRight={"2xl"}
          roundedTopLeft="2xl"
          zIndex={99}
          // bg="red"
        >
          <HStack w="full" h="full" px="4" spacing={8}>
            <Box bg="white" w="280px" p="4" rounded="xl" boxShadow={"md"}>
              <VStack w="full" h="full">
                <HStack w="full" h="full">
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
          </HStack>
        </Box>
      </VStack>
    </Layout>
  );
}
