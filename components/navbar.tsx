import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div className="w-full">
      <section id="bottom-navigation" className="pb-4 block fixed inset-x-0 bottom-0 z-10 bg-white shadow m">
        <div id="tabs" className="flex justify-between">
          <Link href="/"
             className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            {/*<svg width="25" height="25" viewBox="0 0 800 800" className="inline-block mb-1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.34" d="M400 600V500" stroke="#292D32" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M335.643 93.9951L104.643 278.995C78.6431 299.662 61.9764 343.327 67.6431 375.993L111.976 641.327C119.976 688.66 165.31 726.993 213.31 726.993H586.643C634.31 726.993 679.977 688.327 687.977 641.327L732.31 375.993C737.643 343.327 720.977 299.662 695.31 278.995L464.31 94.3285C428.643 65.6618 370.977 65.6618 335.643 93.9951Z" stroke="#292D32" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>*/}
            <svg width="25" height="25" viewBox="0 0 36 36" className="inline-block mb-1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9589 5.57368C17.6918 5.49391 17.4081 5.49391 17.1409 5.57368C17.0641 5.59665 16.929 5.6541 16.6416 5.87725C16.3395 6.11194 15.9695 6.44782 15.3929 6.97344L7.72993 13.9596C6.7905 14.8161 6.52418 15.0744 6.33902 15.36C6.16092 15.6348 6.02824 15.9378 5.94633 16.2568C5.86117 16.5886 5.8499 16.9642 5.8499 18.2535V25.755C5.8499 27.0615 5.85109 27.9496 5.90663 28.6357C5.96073 29.304 6.05875 29.6451 6.17923 29.8828C6.45674 30.4308 6.89233 30.8776 7.42657 31.1622C7.65848 31.2858 7.99103 31.3863 8.64249 31.4418C9.31144 31.4988 10.1774 31.5 11.4513 31.5H11.6999V27C11.6999 23.6863 14.319 21 17.55 21C20.7808 21 23.4 23.6863 23.4 27V31.5H23.6486C24.9224 31.5 25.7884 31.4988 26.4573 31.4418C27.1087 31.3863 27.4413 31.2858 27.6733 31.1622C28.2075 30.8776 28.643 30.4308 28.9206 29.8828C29.0411 29.6451 29.1391 29.304 29.1932 28.6357C29.2487 27.9496 29.25 27.0615 29.25 25.755V18.2535C29.25 16.9642 29.2387 16.5886 29.1535 16.2568C29.0716 15.9378 28.9389 15.6348 28.7608 15.36C28.5756 15.0744 28.3093 14.8161 27.3699 13.9596L19.7069 6.97344C19.1304 6.44782 18.7603 6.11194 18.4582 5.87725C18.1708 5.6541 18.0357 5.59665 17.9589 5.57368ZM16.3231 2.69334C17.1244 2.45403 17.9754 2.45403 18.7767 2.69334C19.3326 2.8594 19.7936 3.15142 20.2237 3.48544C20.6288 3.80002 21.0851 4.21596 21.6105 4.69492L29.3132 11.7174C29.3547 11.7552 29.3955 11.7925 29.436 11.8293C30.199 12.5241 30.7752 13.049 31.1967 13.6992C31.5528 14.2487 31.8183 14.8548 31.9821 15.493C32.1759 16.248 32.1756 17.0385 32.175 18.0849C32.175 18.1404 32.175 18.1965 32.175 18.2535V25.818C32.175 27.0457 32.175 28.0591 32.1081 28.8841C32.0388 29.7411 31.8898 30.5284 31.5163 31.2658C30.9612 32.3617 30.09 33.2551 29.0217 33.8244C28.3026 34.2075 27.535 34.3603 26.6994 34.4314C25.895 34.5 24.9071 34.5 23.7099 34.5H23.1148C23.1034 34.5 23.092 34.5 23.0803 34.5C22.9032 34.5 22.6917 34.5001 22.5054 34.4842C22.2894 34.4659 21.9802 34.4187 21.6574 34.2466C21.2567 34.0332 20.93 33.6981 20.7218 33.2872C20.5542 32.956 20.5082 32.6389 20.4902 32.4174C20.4747 32.2264 20.4748 32.0094 20.4748 31.8277L20.475 27C20.475 25.3431 19.1653 24 17.55 24C15.9345 24 14.6249 25.3431 14.6249 27L14.6249 31.8277C14.625 32.0094 14.6251 32.2264 14.6096 32.4174C14.5917 32.6389 14.5456 32.956 14.3779 33.2872C14.1698 33.6981 13.8431 34.0332 13.4424 34.2466C13.1196 34.4187 12.8104 34.4659 12.5944 34.4842C12.4082 34.5001 12.1966 34.5 12.0195 34.5C12.0079 34.5 11.9964 34.5 11.9851 34.5H11.3899C10.1928 34.5 9.20479 34.5 8.4004 34.4314C7.5648 34.3603 6.79722 34.2075 6.0782 33.8244C5.00974 33.2551 4.13856 32.3617 3.58354 31.2658C3.21005 30.5284 3.06106 29.7411 2.99167 28.8841C2.92488 28.0591 2.92489 27.0457 2.9249 25.818V18.2535C2.9249 18.1965 2.92488 18.1404 2.92486 18.0849C2.92432 17.0385 2.92392 16.248 3.11774 15.493C3.28158 14.8548 3.54695 14.2487 3.90316 13.6992C4.32453 13.049 4.90089 12.5241 5.66383 11.8293C5.70425 11.7925 5.74519 11.7552 5.78667 11.7174L13.4894 4.69494C14.0147 4.21596 14.4709 3.80002 14.8761 3.48544C15.3062 3.15142 15.7672 2.8594 16.3231 2.69334Z" fill="#4A4A4A"/>
            </svg>



            {/* <svg width="25" height="25" viewBox="0 0 42 42" className="inline-block mb-1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.34" d="M359 553V453" stroke="#292D32" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M294.643 46.9951L63.6431 231.995C37.6431 252.662 20.9764 296.327 26.6431 328.993L70.9764 594.327C78.9764 641.66 124.31 679.993 172.31 679.993H545.643C593.31 679.993 638.977 641.327 646.977 594.327L691.31 328.993C696.643 296.327 679.977 252.662 654.31 231.995L423.31 47.3285C387.643 18.6618 329.977 18.6618 294.643 46.9951Z" stroke="#292D32" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>*/}
            <span className="tab tab-home block text-xs">Home</span>
          </Link>
          <Link href="/map"
                className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <svg width="25" height="25" viewBox="0 0 36 36" className="inline-block mb-1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 9C14.6863 9 12 11.6863 12 15C12 18.3137 14.6863 21 18 21C21.3136 21 24 18.3137 24 15C24 11.6863 21.3136 9 18 9ZM18 12C16.3431 12 15 13.3431 15 15C15 16.6569 16.3431 18 18 18C19.6569 18 21 16.6569 21 15C21 13.3431 19.6569 12 18 12Z" fill="#4A4A4A"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6352 33.8937C16.8089 34.013 16.9472 34.1049 17.0439 34.1682L17.2031 34.2708C17.69 34.5756 18.3091 34.5762 18.796 34.2714L18.9562 34.1682C19.0528 34.1049 19.1911 34.013 19.3648 33.8937C19.7122 33.6551 20.2028 33.3062 20.7887 32.8562C21.9579 31.9581 23.5202 30.6483 25.0871 29.0004C28.1786 25.7491 31.5 20.9587 31.5 15.2727C31.5 11.6307 30.0857 8.13126 27.5578 5.54592C25.0289 2.95944 21.5914 1.5 18 1.5C14.4086 1.5 10.9712 2.95944 8.44221 5.54592C5.91432 8.13126 4.5 11.6307 4.5 15.2727C4.5 20.9587 7.82151 25.7491 10.913 29.0004C12.4799 30.6483 14.042 31.9581 15.2113 32.8562C15.7972 33.3062 16.2878 33.6551 16.6352 33.8937ZM18 4.5C15.2262 4.5 12.5591 5.62661 10.5872 7.64328C8.61424 9.66109 7.5 12.4049 7.5 15.2727C7.5 19.8011 10.1785 23.8743 13.087 26.9331C14.5201 28.4403 15.9579 29.6469 17.0387 30.4768C17.4069 30.7598 17.7323 30.9977 18 31.1877C18.2677 30.9977 18.5931 30.7598 18.9613 30.4768C20.0421 29.6469 21.4799 28.4403 22.913 26.9331C25.8214 23.8743 28.5 19.8011 28.5 15.2727C28.5 12.4049 27.3858 9.66109 25.4127 7.64328C23.4409 5.62661 20.7738 4.5 18 4.5Z" fill="#4A4A4A"/>
            </svg>
            {/*<svg width="25" height="25" viewBox="0 0 42 42" className="inline-block mb-1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path
                  d="M20.5890101,0.254646884 C12.8696785,5.50211755 8.0025785,14.258415 14.1941217,18.8708225 C23.16683,25.5550669 13.3362326,40.2698884 33.1021758,38.4149164 C29.6814884,40.8311956 25.5065164,42.2507054 21,42.2507054 C9.40202025,42.2507054 0,32.8486852 0,21.2507054 C0,9.79003409 9.18071714,0.473634138 20.5890101,0.254646884 Z"
                  fill="currentColor" opacity="0.1"></path>
                <path
                  d="M25.9500282,20.3643496 L22.4308312,38.2677802 C22.3775703,38.5387376 22.1147395,38.7152155 21.8437821,38.6619546 C21.6570955,38.6252584 21.507413,38.4857901 21.4576354,38.3021581 L16.5951895,20.3643496 L20.099732,4.44663907 C20.1385204,4.27046145 20.2692032,4.12883813 20.4417012,4.07604096 C20.7057521,3.99522179 20.9853245,4.14376046 21.0661436,4.40781135 L25.9500282,20.3643496 Z M21.3022963,22.2852638 C22.4068658,22.2852638 23.3022963,21.3898333 23.3022963,20.2852638 C23.3022963,19.1806943 22.4068658,18.2852638 21.3022963,18.2852638 C20.1977268,18.2852638 19.3022963,19.1806943 19.3022963,20.2852638 C19.3022963,21.3898333 20.1977268,22.2852638 21.3022963,22.2852638 Z"
                  fill="currentColor"
                  transform="translate(21.272609, 20.629524) rotate(-315.000000) translate(-21.272609, -20.629524) "></path>
                <circle stroke="currentColor" stroke-width="2" cx="21" cy="21" r="20"></circle>
              </g>
            </svg>*/}
            <span className="tab tab-explore block text-xs">Map</span>
          </Link>
          <Link href="/assistant"
             className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <svg className="inline-block"  width="30" height="30" viewBox="0 0 272 273" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="63.4453" y="62.5999" width="50.2825" height="200.131" rx="25.1413" transform="rotate(-30 63.4453 62.5999)" fill="#6892FF"/>
              <rect x="164.251" y="37.0837" width="50.2825" height="200.131" rx="25.1413" transform="rotate(30 164.251 37.0837)" fill="#6892FF"/>
              <rect width="50.2825" height="200.131" rx="25.1413" transform="matrix(0 1 1 0 35.9258 111.172)" fill="#6892FF"/>
            </svg>


            {/*<svg width="25" height="25" viewBox="0 0 42 42" className="inline-block mb-1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path
                  d="M14.7118754,20.0876892 L8.03575361,20.0876892 C5.82661462,20.0876892 4.03575361,18.2968282 4.03575361,16.0876892 L4.03575361,12.031922 C4.03575361,8.1480343 6.79157254,4.90780265 10.4544842,4.15995321 C8.87553278,8.5612583 8.1226025,14.3600511 10.9452499,15.5413938 C13.710306,16.6986332 14.5947501,18.3118357 14.7118754,20.0876892 Z M14.2420017,23.8186831 C13.515543,27.1052019 12.7414284,30.2811559 18.0438552,31.7330419 L18.0438552,33.4450645 C18.0438552,35.6542035 16.2529942,37.4450645 14.0438552,37.4450645 L9.90612103,37.4450645 C6.14196811,37.4450645 3.09051926,34.3936157 3.09051926,30.6294627 L3.09051926,27.813861 C3.09051926,25.604722 4.88138026,23.813861 7.09051926,23.813861 L14.0438552,23.813861 C14.1102948,23.813861 14.1763561,23.8154808 14.2420017,23.8186831 Z M20.7553776,32.160536 C23.9336213,32.1190063 23.9061943,29.4103976 33.8698747,31.1666916 C34.7935223,31.3295026 35.9925894,31.0627305 37.3154077,30.4407183 C37.09778,34.8980343 33.4149547,38.4450645 28.9036761,38.4450645 C24.9909035,38.4450645 21.701346,35.7767637 20.7553776,32.160536 Z"
                  fill="currentColor" opacity="0.1"></path>
                <g transform="translate(2.000000, 3.000000)">
                  <path
                    d="M8.5,1 C4.35786438,1 1,4.35786438 1,8.5 L1,13 C1,14.6568542 2.34314575,16 4,16 L13,16 C14.6568542,16 16,14.6568542 16,13 L16,4 C16,2.34314575 14.6568542,1 13,1 L8.5,1 Z"
                    stroke="currentColor" stroke-width="2"></path>
                  <path
                    d="M4,20 C2.34314575,20 1,21.3431458 1,23 L1,27.5 C1,31.6421356 4.35786438,35 8.5,35 L13,35 C14.6568542,35 16,33.6568542 16,32 L16,23 C16,21.3431458 14.6568542,20 13,20 L4,20 Z"
                    stroke="currentColor" stroke-width="2"></path>
                  <path
                    d="M23,1 C21.3431458,1 20,2.34314575 20,4 L20,13 C20,14.6568542 21.3431458,16 23,16 L32,16 C33.6568542,16 35,14.6568542 35,13 L35,8.5 C35,4.35786438 31.6421356,1 27.5,1 L23,1 Z"
                    stroke="currentColor" stroke-width="2"></path>
                  <path
                    d="M34.5825451,33.4769886 L38.3146092,33.4322291 C38.8602707,33.4256848 39.3079219,33.8627257 39.3144662,34.4083873 C39.3145136,34.4123369 39.3145372,34.4162868 39.3145372,34.4202367 L39.3145372,34.432158 C39.3145372,34.9797651 38.8740974,35.425519 38.3265296,35.4320861 L34.5944655,35.4768456 C34.048804,35.4833899 33.6011528,35.046349 33.5946085,34.5006874 C33.5945611,34.4967378 33.5945375,34.4927879 33.5945375,34.488838 L33.5945375,34.4769167 C33.5945375,33.9293096 34.0349773,33.4835557 34.5825451,33.4769886 Z"
                    fill="currentColor"
                    transform="translate(36.454537, 34.454537) rotate(-315.000000) translate(-36.454537, -34.454537) "></path>
                  <circle stroke="currentColor" stroke-width="2" cx="27.5" cy="27.5" r="7.5"></circle>
                </g>
              </g>
            </svg>*/}
            <span className="tab tab-kategori block text-xs">Assistant</span>
          </Link>
          <Link href={'explore'} className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center
            pt-2 pb-1">
            <svg width="25" height="25" viewBox="0 0 36 36" className="inline-block mb-1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.38745 9C4.38745 8.17158 5.04224 7.5 5.84995 7.5H29.25C30.0577 7.5 30.7125 8.17158 30.7125 9C30.7125 9.82842 30.0577 10.5 29.25 10.5H5.84995C5.04224 10.5 4.38745 9.82842 4.38745 9ZM4.38745 18C4.38745 17.1715 5.04224 16.5 5.84995 16.5H29.25C30.0577 16.5 30.7125 17.1715 30.7125 18C30.7125 18.8284 30.0577 19.5 29.25 19.5H5.84995C5.04224 19.5 4.38745 18.8284 4.38745 18ZM4.38745 27C4.38745 26.1715 5.04224 25.5 5.84995 25.5H29.25C30.0577 25.5 30.7125 26.1715 30.7125 27C30.7125 27.8284 30.0577 28.5 29.25 28.5H5.84995C5.04224 28.5 4.38745 27.8284 4.38745 27Z" fill="#4A4A4A"/>
            </svg>

            {/*<svg width="25" height="25" viewBox="0 0 42 42" className="inline-block mb-1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path
                  d="M14.7118754,20.0876892 L8.03575361,20.0876892 C5.82661462,20.0876892 4.03575361,18.2968282 4.03575361,16.0876892 L4.03575361,12.031922 C4.03575361,8.1480343 6.79157254,4.90780265 10.4544842,4.15995321 C8.87553278,8.5612583 8.1226025,14.3600511 10.9452499,15.5413938 C13.710306,16.6986332 14.5947501,18.3118357 14.7118754,20.0876892 Z M14.2420017,23.8186831 C13.515543,27.1052019 12.7414284,30.2811559 18.0438552,31.7330419 L18.0438552,33.4450645 C18.0438552,35.6542035 16.2529942,37.4450645 14.0438552,37.4450645 L9.90612103,37.4450645 C6.14196811,37.4450645 3.09051926,34.3936157 3.09051926,30.6294627 L3.09051926,27.813861 C3.09051926,25.604722 4.88138026,23.813861 7.09051926,23.813861 L14.0438552,23.813861 C14.1102948,23.813861 14.1763561,23.8154808 14.2420017,23.8186831 Z M20.7553776,32.160536 C23.9336213,32.1190063 23.9061943,29.4103976 33.8698747,31.1666916 C34.7935223,31.3295026 35.9925894,31.0627305 37.3154077,30.4407183 C37.09778,34.8980343 33.4149547,38.4450645 28.9036761,38.4450645 C24.9909035,38.4450645 21.701346,35.7767637 20.7553776,32.160536 Z"
                  fill="currentColor" opacity="0.1"></path>
                <g transform="translate(2.000000, 3.000000)">
                  <path
                    d="M8.5,1 C4.35786438,1 1,4.35786438 1,8.5 L1,13 C1,14.6568542 2.34314575,16 4,16 L13,16 C14.6568542,16 16,14.6568542 16,13 L16,4 C16,2.34314575 14.6568542,1 13,1 L8.5,1 Z"
                    stroke="currentColor" stroke-width="2"></path>
                  <path
                    d="M4,20 C2.34314575,20 1,21.3431458 1,23 L1,27.5 C1,31.6421356 4.35786438,35 8.5,35 L13,35 C14.6568542,35 16,33.6568542 16,32 L16,23 C16,21.3431458 14.6568542,20 13,20 L4,20 Z"
                    stroke="currentColor" stroke-width="2"></path>
                  <path
                    d="M23,1 C21.3431458,1 20,2.34314575 20,4 L20,13 C20,14.6568542 21.3431458,16 23,16 L32,16 C33.6568542,16 35,14.6568542 35,13 L35,8.5 C35,4.35786438 31.6421356,1 27.5,1 L23,1 Z"
                    stroke="currentColor" stroke-width="2"></path>
                  <path
                    d="M34.5825451,33.4769886 L38.3146092,33.4322291 C38.8602707,33.4256848 39.3079219,33.8627257 39.3144662,34.4083873 C39.3145136,34.4123369 39.3145372,34.4162868 39.3145372,34.4202367 L39.3145372,34.432158 C39.3145372,34.9797651 38.8740974,35.425519 38.3265296,35.4320861 L34.5944655,35.4768456 C34.048804,35.4833899 33.6011528,35.046349 33.5946085,34.5006874 C33.5945611,34.4967378 33.5945375,34.4927879 33.5945375,34.488838 L33.5945375,34.4769167 C33.5945375,33.9293096 34.0349773,33.4835557 34.5825451,33.4769886 Z"
                    fill="currentColor"
                    transform="translate(36.454537, 34.454537) rotate(-315.000000) translate(-36.454537, -34.454537) "></path>
                  <circle stroke="currentColor" stroke-width="2" cx="27.5" cy="27.5" r="7.5"></circle>
                </g>
              </g>
            </svg>*/}
            <span className="tab tab-account block text-xs">Explore</span>
          </Link>
          <Link href={'profile'} className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center
            pt-2 pb-1">
            <svg width="25" height="25" viewBox="0 0 36 36" className="inline-block mb-1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 7.5C15.5146 7.5 13.5 9.51472 13.5 12C13.5 14.4853 15.5146 16.5 18 16.5C20.4853 16.5 22.5 14.4853 22.5 12C22.5 9.51472 20.4853 7.5 18 7.5ZM10.5 12C10.5 7.85787 13.8579 4.5 18 4.5C22.1421 4.5 25.5 7.85787 25.5 12C25.5 16.1421 22.1421 19.5 18 19.5C13.8579 19.5 10.5 16.1421 10.5 12ZM11.1841 25.0896C9.60276 25.7919 9 26.6787 9 27.75C9 28.0854 9.05964 28.2753 9.14592 28.413C9.23224 28.5507 9.43821 28.7839 9.99328 29.035C11.1797 29.5717 13.5241 30 18 30C22.4758 30 24.8203 29.5717 26.0067 29.035C26.5618 28.7839 26.7678 28.5507 26.854 28.413C26.9403 28.2753 27 28.0854 27 27.75C27 26.6787 26.3973 25.7919 24.8158 25.0896C23.1921 24.3687 20.8083 24 18 24C15.1917 24 12.8079 24.3687 11.1841 25.0896ZM9.96663 22.3479C12.1432 21.3813 15.0093 21 18 21C20.9907 21 23.8569 21.3813 26.0334 22.3479C28.2522 23.3331 30 25.0713 30 27.75C30 28.45 29.8722 29.2467 29.3959 30.0064C28.9197 30.7659 28.1882 31.3408 27.2433 31.7683C25.4296 32.5888 22.5241 33 18 33C13.4759 33 10.5703 32.5888 8.75671 31.7683C7.81179 31.3408 7.08025 30.7659 6.60408 30.0064C6.12786 29.2467 6 28.45 6 27.75C6 25.0713 7.74774 23.3331 9.96663 22.3479Z" fill="#4A4A4A"/>
            </svg>

            {/*<svg width="25" height="25" viewBox="0 0 42 42" className="inline-block mb-1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path
                  d="M14.7118754,20.0876892 L8.03575361,20.0876892 C5.82661462,20.0876892 4.03575361,18.2968282 4.03575361,16.0876892 L4.03575361,12.031922 C4.03575361,8.1480343 6.79157254,4.90780265 10.4544842,4.15995321 C8.87553278,8.5612583 8.1226025,14.3600511 10.9452499,15.5413938 C13.710306,16.6986332 14.5947501,18.3118357 14.7118754,20.0876892 Z M14.2420017,23.8186831 C13.515543,27.1052019 12.7414284,30.2811559 18.0438552,31.7330419 L18.0438552,33.4450645 C18.0438552,35.6542035 16.2529942,37.4450645 14.0438552,37.4450645 L9.90612103,37.4450645 C6.14196811,37.4450645 3.09051926,34.3936157 3.09051926,30.6294627 L3.09051926,27.813861 C3.09051926,25.604722 4.88138026,23.813861 7.09051926,23.813861 L14.0438552,23.813861 C14.1102948,23.813861 14.1763561,23.8154808 14.2420017,23.8186831 Z M20.7553776,32.160536 C23.9336213,32.1190063 23.9061943,29.4103976 33.8698747,31.1666916 C34.7935223,31.3295026 35.9925894,31.0627305 37.3154077,30.4407183 C37.09778,34.8980343 33.4149547,38.4450645 28.9036761,38.4450645 C24.9909035,38.4450645 21.701346,35.7767637 20.7553776,32.160536 Z"
                  fill="currentColor" opacity="0.1"></path>
                <g transform="translate(2.000000, 3.000000)">
                  <path
                    d="M8.5,1 C4.35786438,1 1,4.35786438 1,8.5 L1,13 C1,14.6568542 2.34314575,16 4,16 L13,16 C14.6568542,16 16,14.6568542 16,13 L16,4 C16,2.34314575 14.6568542,1 13,1 L8.5,1 Z"
                    stroke="currentColor" stroke-width="2"></path>
                  <path
                    d="M4,20 C2.34314575,20 1,21.3431458 1,23 L1,27.5 C1,31.6421356 4.35786438,35 8.5,35 L13,35 C14.6568542,35 16,33.6568542 16,32 L16,23 C16,21.3431458 14.6568542,20 13,20 L4,20 Z"
                    stroke="currentColor" stroke-width="2"></path>
                  <path
                    d="M23,1 C21.3431458,1 20,2.34314575 20,4 L20,13 C20,14.6568542 21.3431458,16 23,16 L32,16 C33.6568542,16 35,14.6568542 35,13 L35,8.5 C35,4.35786438 31.6421356,1 27.5,1 L23,1 Z"
                    stroke="currentColor" stroke-width="2"></path>
                  <path
                    d="M34.5825451,33.4769886 L38.3146092,33.4322291 C38.8602707,33.4256848 39.3079219,33.8627257 39.3144662,34.4083873 C39.3145136,34.4123369 39.3145372,34.4162868 39.3145372,34.4202367 L39.3145372,34.432158 C39.3145372,34.9797651 38.8740974,35.425519 38.3265296,35.4320861 L34.5944655,35.4768456 C34.048804,35.4833899 33.6011528,35.046349 33.5946085,34.5006874 C33.5945611,34.4967378 33.5945375,34.4927879 33.5945375,34.488838 L33.5945375,34.4769167 C33.5945375,33.9293096 34.0349773,33.4835557 34.5825451,33.4769886 Z"
                    fill="currentColor"
                    transform="translate(36.454537, 34.454537) rotate(-315.000000) translate(-36.454537, -34.454537) "></path>
                  <circle stroke="currentColor" stroke-width="2" cx="27.5" cy="27.5" r="7.5"></circle>
                </g>
              </g>
            </svg>*/}
            <span className="tab tab-account block text-xs">Profile</span>
          </Link>
        </div>
      </section>
    </div>
    /*<Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={5} h={5}/>
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Logo
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav/>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav/>
      </Collapse>
    </Box>*/
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>

              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                <Button backgroundColor={'#e9d5ff'} rounded={20} fontWeight={500}>
                  {navItem.label}
                </Button>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon}/>
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Map',
    href: 'map',
  },
  {
    label: 'Assistant',
    href: 'assistant',
  },
  {
    label: 'Suggestions',
  }
];