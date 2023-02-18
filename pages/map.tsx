import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Layout from '../components/layout';
import useIsMountedRef from '../utils/useIsMountedRef';
import { Hospital } from '.prisma/client';
import axiosInstance from '../utils/axios';
import {
  Button,
  Checkbox,
  HStack, Modal, ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay,
  Select,
  Stack,
  useDisclosure,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import { motion } from "framer-motion";
import InfoCard from '../components/infocard';
import Layout2 from '../components/layout2';
import Image from 'next/image';

type Position = {
  lat: number;
  lng: number;
};

const formatPhoneNumber = (phoneNumberString: string) => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}

const hospitalOwners = [
  {
    "hospitalOwner": "Voluntary non-profit - Private"
  },
  {
    "hospitalOwner": "Proprietary"
  },
  {
    "hospitalOwner": "Government - Federal"
  },
  {
    "hospitalOwner": "Government - Hospital District or Authority"
  },
  {
    "hospitalOwner": "Government - Local"
  },
  {
    "hospitalOwner": "Government - State"
  },
  {
    "hospitalOwner": "Voluntary non-profit - Church"
  },
  {
    "hospitalOwner": "Voluntary non-profit - Other"
  }
]

const hospitalTypes = [
  {
    "hospitalType": "Critical Access Hospitals"
  },
  {
    "hospitalType": "ACUTE CARE - VETERANS ADMINISTRATION"
  },
  {
    "hospitalType": "Acute Care Hospitals"
  },
  {
    "hospitalType": "Childrens"
  }
];

const Map = () => {
  const isMountedRef = useIsMountedRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mapCenter, setMapCenter] = useState<Position>({ lat: 0, lng: 0 });
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [selectedHospital, setSelectedHospital] = useState<Hospital>();

  const getHospital = async (coords: Position) => {
    const response = await axiosInstance.get(`api/geo/points?lat=${coords.lat}&lng=${coords.lng}`);
    setHospitals(response.data);
  };

  useEffect(() => {
    const coords = new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        resolve(position.coords);
      });
    })
    coords.then(async (coords: any) => {
      console.log(coords);
      setMapCenter({ lat: coords.latitude, lng: coords.longitude });
      await getHospital({ lat: coords.latitude, lng: coords.longitude });
    });
  }, [isMountedRef]);

  const libraries = useMemo(() => ['places'], []);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
      zoomControl: true,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAP5NxTzwRf7iV8EzZGbaeyz8othAWyWf8',
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const onMarkerClick = (hospital: Hospital) => {
    setSelectedHospital(hospital);
    onOpen();
  };

  return (
    <Layout2>
      <GoogleMap
        options={mapOptions}
        zoom={13}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '100%', height: '800px', position: 'relative', borderRadius: '10px', flex: 1 }}
        onLoad={() => console.log('Map Component Loaded...')}

      >
        <Marker position={mapCenter} key={'home'}/>
        {hospitals.map((hospital) => {
          return (<Marker
            onClick={() => onMarkerClick(hospital)}
            key={hospital.providerNumber}
            position={{ lat: hospital.latitude, lng: hospital.longitude }}
            icon={{
              url: '/hospital.svg',
            }}
          />)
        })}
      </GoogleMap>

      <div className={'flex flex-col justify-between h-screen'}>
        <div>
          1
        </div>
        <div className={'absolute inset-0 flex-grow px-6 backdrop-blur-md bg-white/30 mt-[500px] rounded-[60px]'}>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap mt-1">
            <Select placeholder='Hospital Owner' maxWidth={'280px'}>
              {hospitalOwners.map((hospitalOwner) => {
                return (<option key={hospitalOwner.hospitalOwner}
                                value={hospitalOwner.hospitalOwner}>{hospitalOwner.hospitalOwner}</option>)
              })}
            </Select>
            <Select placeholder='Hospital Type' maxWidth={'280px'}>
              {hospitalTypes.map((hospitalType) => {
                return (<option key={hospitalType.hospitalType}
                                value={hospitalType.hospitalType}>{hospitalType.hospitalType}</option>)
              })}
            </Select>
            <Button colorScheme='blue'>Apply</Button>
          </div>
          <div className="flex flex-col justify-between max-h-screen items-center">
            <div className="bg-white mt-2 pt-1 w-[60px] h-[5px] rounded text-center">
            </div>
            <div className={'overflow-auto mt-3'}>
              {hospitals.map((hospital, i) => {
                return (
                  <InfoCard key={i}
                            img={hospital.image}
                            location={hospital.address} description={hospital.phoneNumber} title={hospital.hospitalName}
                            star={5} price={5} total={5}/>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/*<motion.div*/}
      {/*  initial={{ opacity: 0 }}*/}
      {/*  whileInView={{ opacity: 1 }}*/}
      {/*  viewport={{ once: true }}*/}
      {/*>*/}
      {/*  <div className={'flex'}>*/}
      {/*    <motion.div*/}
      {/*      initial={{ opacity: 0 }}*/}
      {/*      whileInView={{ opacity: 1 }}*/}
      {/*      viewport={{ once: true }}*/}
      {/*      className="box hidden sm:inline-flex sm:min-w-[300px] xl:inline-flex xl:min-w-[600px] xl:h-[90vh] "*/}
      {/*    >*/}
      {/*      <GoogleMap*/}
      {/*        options={mapOptions}*/}
      {/*        zoom={14}*/}
      {/*        center={mapCenter}*/}
      {/*        mapTypeId={google.maps.MapTypeId.ROADMAP}*/}
      {/*        mapContainerStyle={{ width: '100%', height: '100%', position: 'relative', borderRadius: '10px', flex: 1 }}*/}
      {/*        onLoad={() => console.log('Map Component Loaded...')}*/}

      {/*      >*/}
      {/*        {hospitals.map((hospital) => {*/}
      {/*          return (<Marker*/}
      {/*            onClick={() => alert(JSON.stringify(hospital))}*/}
      {/*            key={hospital.providerNumber}*/}
      {/*            position={{ lat: hospital.latitude, lng: hospital.longitude }}*/}
      {/*          />)*/}
      {/*        })}*/}
      {/*      </GoogleMap>*/}
      {/*    </motion.div>*/}
      {/*    <div className={'flex-grow px-6'}>*/}
      {/*      <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">*/}
      {/*        <Select placeholder='Hospital Owner' maxWidth={'280px'}>*/}
      {/*          {hospitalOwners.map((hospitalOwner) => {*/}
      {/*            return (<option key={hospitalOwner.hospitalOwner}*/}
      {/*                            value={hospitalOwner.hospitalOwner}>{hospitalOwner.hospitalOwner}</option>)*/}
      {/*          })}*/}
      {/*        </Select>*/}
      {/*        <Select placeholder='Hospital Type' maxWidth={'280px'}>*/}
      {/*          {hospitalTypes.map((hospitalType) => {*/}
      {/*            return (<option key={hospitalType.hospitalType}*/}
      {/*                            value={hospitalType.hospitalType}>{hospitalType.hospitalType}</option>)*/}
      {/*          })}*/}
      {/*        </Select>*/}
      {/*        <Button colorScheme='blue'>Apply</Button>*/}
      {/*      </div>*/}
      {/*      <div className="flex flex-col max-h-screen">*/}
      {/*        <div className={'overflow-auto'}>*/}
      {/*          {hospitals.map((hospital, i) => {*/}
      {/*            return (*/}
      {/*              <InfoCard key={i}*/}
      {/*                img={'https://www.eastalabamahealth.org/assets/images/ih/locations/eamc-lanier-exterior-2.jpg'}*/}
      {/*                location={hospital.address} description={hospital.hospitalOwner} title={hospital.hospitalName}*/}
      {/*                star={5} price={5} total={5}/>*/}
      {/*            )*/}
      {/*          })}*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    */}
      {/*  </div>*/}
      {/*</motion.div>*/}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Info</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <div className="flex py-2 px-2 pr-4 cursor-pointer bg-white mt-3 rounded-3xl">
              <div className="relative h-24 w-2/4 md:h-52 md:w-30 flex-shrink-0">
                <Image
                  src={selectedHospital?.image || 'https://www.eastalabamahealth.org/assets/images/ih/locations/eamc-lanier-exterior-2.jpg'}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl" alt={""}/>
              </div>
              <div className="flex flex-col flex-grow pl-3">
                <div className="flex justify-between">
                  <p className="text-md">{selectedHospital?.hospitalName || ''}</p>
                </div>
                <div className="bg-pink-600 rounded-xl h-7 text-center">
                  <p className="text-md text-white">Schedule an appointment</p>
                </div>
                <div className=" w-10 pt-1"/>
                <h4 className="text-sm text-blue-800">+1 {formatPhoneNumber(selectedHospital?.phoneNumber || '')}</h4>
                <div className="w-10 pt-1"/>
                <p className="pt-2 text-[12px] text-gray-500 flex-grow">{`${selectedHospital?.address}, ${selectedHospital?.city}, ${selectedHospital?.state}, ${selectedHospital?.zipCode}` || ''}</p>
                <div className="flex justify-between">
                  <p className="text-sm">{`Type: ${selectedHospital?.hospitalType}` || ''}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">{`Owner: ${selectedHospital?.hospitalOwner}` || ''}</p>
                </div>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button>Open Website</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout2>
  )
}

export default Map;