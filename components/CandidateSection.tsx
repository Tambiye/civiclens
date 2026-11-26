
"use client";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import {
  FiArrowRight,
  FiChevronRight,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

import "../styles/candidates.css";
const presidentialCandidates = [
  {
    name: "Bola Ahmed Tinubu",
    slug: "bola-ahmed-tinubu",
    party: "All Progressives Congress",
    shortParty: "APC",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/tinubu.jpg",
  },
  {
    name: "Atiku Abubakar",
    slug: "atiku-abubakar",
    party: "African Democratic Congress",
    shortParty: "ADC",
    status: "Disputed",
    statusType: "disputed",
    image: "/images/candidates/atiku.jpg",
  },
  {
    name: "Peter Gregory Obi",
    slug: "peter-gregory-obi",
    party: "Nigerian Democratic Congress",
    shortParty: "NDC",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/obi.jpg",
  },
  {
    name: "Sunday Chibuzo Okereke",
    slug: "sunday-chibuzo-okereke",
    party: "Labour Party",
    shortParty: "LP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/okereke.jpg",
  },
  {
    name: "Sandy Ojang Onor",
    slug: "sandy-ojang-onor",
    party: "Peoples Democratic Party",
    shortParty: "PDP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/sandy.jpg",
  },
  {
    name: "Aliyu Abbas-Bin",
    slug: "aliyu-abbas-bin",
    party: "Action Democratic Party",
    shortParty: "ADP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/aliyu-abbas-bin.jpg",
  },
  {
    name: "Kabiru Yusuf",
    slug: "kabiru-yusuf",
    party: "Allied Peoples Party",
    shortParty: "APP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/kabiru-yusuf.jpg",
  },
  {
    name: "Omoyele Sowore",
    slug: "omoyele-sowore",
    party: "African Action Congress",
    shortParty: "AAC",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/sowore.jpg",
  },
  {
    name: "Oluseyi Abiodun Makinde",
    slug: "oluseyi-abiodun-makinde",
    party: "Allied Peoples Movement",
    shortParty: "APM",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/makinde.jpg",
  },
  {
    name: "Sunday Adenuga",
    slug: "sunday-adenuga",
    party: "Boot Party",
    shortParty: "BP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/sunday-adenuga.jpg",
  },
  {
    name: "Moses Olusoji Adebisi",
    slug: "moses-olusoji-adebisi",
    party: "Democratic Leadership Alliance",
    shortParty: "DLA",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/moses-adebisi.jpg",
  },
  {
    name: "Ada Elizabeth Fredrick Okwori",
    slug: "ada-elizabeth-fredrick-okwori",
    party: "National Democratic Party",
    shortParty: "NDP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/ada-okwori.jpg",
  },
  {
    name: "Nkem Esther Okereke",
    slug: "nkem-esther-okereke",
    party: "National Rescue Movement",
    shortParty: "NRM",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/nkem-okereke.jpg",
  },
  {
    name: "Donald Duke",
    slug: "donald-duke",
    party: "People's Redemption Party",
    shortParty: "PRP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/donald-duke.jpg",
  },
  {
    name: "Adewole Ebenezer Adebayo",
    slug: "adewole-ebenezer-adebayo",
    party: "Social Democratic Party",
    shortParty: "SDP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/adebayo.jpg",
  },
  {
    name: "Peter Ada Agada",
    slug: "peter-ada-agada",
    party: "Young Progressive Party",
    shortParty: "YPP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/peter-agada.jpg",
  },
  {
    name: "Daniel Daberechukwu Nwanyanwu",
    slug: "daniel-daberechukwu-nwanyanwu",
    party: "Zenith Labour Party",
    shortParty: "ZLP",
    status: "Confirmed",
    statusType: "confirmed",
    image: "/images/candidates/nwanyanwu.jpg",
  },
];

const governorStates = [
  // 6 FEBRUARY 2027
  {
    state: "Abia State",
    electionDate: "6 February 2027",
    candidates: "15 candidates",
    image: "/images/governors/abia.jpg",
  },
  {
    state: "Adamawa State",
    electionDate: "6 February 2027",
    candidates: "18 candidates",
    image: "/images/governors/adamawa.jpg",
  },
  {
    state: "Akwa Ibom State",
    electionDate: "6 February 2027",
    candidates: "20 candidates",
    image: "/images/governors/akwa-ibom.jpg",
  },
  {
    state: "Bauchi State",
    electionDate: "6 February 2027",
    candidates: "15 candidates",
    image: "/images/governors/bauchi.jpg",
  },
  {
    state: "Benue State",
    electionDate: "6 February 2027",
    candidates: "12 candidates",
    image: "/images/governors/benue.jpg",
  },
  {
    state: "Borno State",
    electionDate: "6 February 2027",
    candidates: "13 candidates",
    image: "/images/governors/borno.jpg",
  },
  {
    state: "Cross River State",
    electionDate: "6 February 2027",
    candidates: "8 candidates",
    image: "/images/governors/cross-river.jpg",
  },
  {
    state: "Delta State",
    electionDate: "6 February 2027",
    candidates: "18 candidates",
    image: "/images/governors/delta.jpg",
  },
  {
    state: "Ebonyi State",
    electionDate: "6 February 2027",
    candidates: "12 candidates",
    image: "/images/governors/ebonyi.jpg",
  },
  {
    state: "Enugu State",
    electionDate: "6 February 2027",
    candidates: "16 candidates",
    image: "/images/governors/enugu.jpg",
  },
  {
    state: "Gombe State",
    electionDate: "6 February 2027",
    candidates: "16 candidates",
    image: "/images/governors/gombe.jpg",
  },
  {
    state: "Jigawa State",
    electionDate: "6 February 2027",
    candidates: "13 candidates",
    image: "/images/governors/jigawa.jpg",
  },
  {
    state: "Kaduna State",
    electionDate: "6 February 2027",
    candidates: "16 candidates",
    image: "/images/governors/kaduna.jpg",
  },
  {
    state: "Kano State",
    electionDate: "6 February 2027",
    candidates: "17 candidates",
    image: "/images/governors/kano.jpg",
  },
  {
    state: "Katsina State",
    electionDate: "6 February 2027",
    candidates: "11 candidates",
    image: "/images/governors/katsina.jpg",
  },
  {
    state: "Kebbi State",
    electionDate: "6 February 2027",
    candidates: "14 candidates",
    image: "/images/governors/kebbi.jpg",
  },
  {
    state: "Kwara State",
    electionDate: "6 February 2027",
    candidates: "12 candidates",
    image: "/images/governors/kwara.jpg",
  },
  {
    state: "Lagos State",
    electionDate: "6 February 2027",
    candidates: "17 candidates",
    image: "/images/governors/lagos.jpg",
  },
  {
    state: "Nasarawa State",
    electionDate: "6 February 2027",
    candidates: "13 candidates",
    image: "/images/governors/nasarawa.jpg",
  },
  {
    state: "Niger State",
    electionDate: "6 February 2027",
    candidates: "15 candidates",
    image: "/images/governors/niger.jpg",
  },
  {
    state: "Ogun State",
    electionDate: "6 February 2027",
    candidates: "13 candidates",
    image: "/images/governors/ogun.jpg",
  },
  {
    state: "Oyo State",
    electionDate: "6 February 2027",
    candidates: "16 candidates",
    image: "/images/governors/oyo.jpg",
  },
  {
    state: "Plateau State",
    electionDate: "6 February 2027",
    candidates: "17 candidates",
    image: "/images/governors/plateau.jpeg",
  },
  {
    state: "Rivers State",
    electionDate: "6 February 2027",
    candidates: "19 candidates",
    image: "/images/governors/rivers.png",
  },
  {
    state: "Sokoto State",
    electionDate: "6 February 2027",
    candidates: "17 candidates",
    image: "/images/governors/sokoto.webp",
  },
  {
    state: "Taraba State",
    electionDate: "6 February 2027",
    candidates: "19 candidates",
    image: "/images/governors/taraba.jpg",
  },
  {
    state: "Yobe State",
    electionDate: "6 February 2027",
    candidates: "13 candidates",
    image: "/images/governors/yobe.jpg",
  },
  {
    state: "Zamfara State",
    electionDate: "6 February 2027",
    candidates: "15 candidates",
    image: "/images/governors/zamfara.jpg",
  },

  // OFF-CYCLE STATES
  {
    state: "Anambra State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/anambra.jpeg",
  },
  {
    state: "Bayelsa State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/bayelsa.jpeg",
  },
  {
    state: "Edo State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/edo.webp",
  },
  {
    state: "Ekiti State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/ekiti.webp",
  },
  {
    state: "Imo State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/imo.jpg",
  },
  {
    state: "Kogi State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/kogi.jpg",
  },
  {
    state: "Ondo State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/ondo.jpg",
  },
  {
    state: "Osun State",
    electionDate: null,
    candidates: null,
    image: "/images/governors/osun.webp",
  },
];


const senateStates = [
  // ABIA STATE
  {
    state: "Abia State",
    district: "Abia Central",
    name: "Augustine Okwudiri Akobundu",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/augustine-okwudiri-akobundu.jpg",
  },
  {
    state: "Abia State",
    district: "Abia North",
    name: "Orji Uzor Kalu",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/orji-uzor-kalu.jpeg",
  },
  {
    state: "Abia State",
    district: "Abia South",
    name: "Enyinnaya Harcourt Abaribe",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/enyinnaya-harcourt-abaribe.jpeg",
  },

  // ADAMAWA STATE
  {
    state: "Adamawa State",
    district: "Adamawa Central",
    name: "Aminu Abbas",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/aminu-abbas.jpg",
  },
  {
    state: "Adamawa State",
    district: "Adamawa North",
    name: "Ishaku Elisha Cliff Abbo",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ishaku-elisha-cliff-abbo.webp",
  },
  {
    state: "Adamawa State",
    district: "Adamawa South",
    name: "Binos Dauda Yaroe",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/binos-dauda-yaroe.jpg",
  },

  // AKWA IBOM STATE
  {
    state: "Akwa Ibom State",
    district: "Akwa Ibom North-East",
    name: "Bassey Aniekan Etim",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/bassey-aniekan-etim.jpg",
  },
  {
    state: "Akwa Ibom State",
    district: "Akwa Ibom North-West",
    name: "Godswill Obot Akpabio",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/godswill-obot-akpabio.jpg",
  },
  {
    state: "Akwa Ibom State",
    district: "Akwa Ibom South",
    name: "Akpan Ekong Sampson",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/akpan-ekong-sampson.jpg",
  },

  // ANAMBRA STATE
  {
    state: "Anambra State",
    district: "Anambra Central",
    name: "Victor Umeh",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/victor-umeh.webp",
  },
  {
    state: "Anambra State",
    district: "Anambra North",
    name: "Tony Okechukwu Nwoye",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/tony-okechukwu-nwoye.jpg",
  },
  {
    state: "Anambra State",
    district: "Anambra South",
    name: "Nwachukwu Emmanuel",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/nwachukwu-emmanuel.jpeg",
  },

  // BAUCHI STATE
  {
    state: "Bauchi State",
    district: "Bauchi Central",
    name: "Abdul Ningi",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/abdul-ningi.jpeg",
  },
  {
    state: "Bauchi State",
    district: "Bauchi North",
    name: "Samaila Dahuwa Kaila",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/samaila-dahuwa-kaila.jpg",
  },
  {
    state: "Bauchi State",
    district: "Bauchi South",
    name: "Umar Shehu Buba",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/umar-shehu-buba.jpg",
  },

  // BAYELSA STATE
  {
    state: "Bayelsa State",
    district: "Bayelsa Central",
    name: "Konbowei Friday Benson",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/konbowei-friday-benson.webp",
  },
  {
    state: "Bayelsa State",
    district: "Bayelsa East",
    name: "Benson Agadaga",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/benson-agadaga.webp",
  },
  {
    state: "Bayelsa State",
    district: "Bayelsa West",
    name: "Seriake Henry Dickson",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/seriake-henry-dickson.webp",
  },

  // BENUE STATE
  {
    state: "Benue State",
    district: "Benue North-East",
    name: "Emmanuel Memsa Udende",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/emmanuel-memsa-udende.webp",
  },
  {
    state: "Benue State",
    district: "Benue North-West",
    name: "Titus Tartenger Zam",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/titus-tartenger-zam.webp",
  },
  {
    state: "Benue State",
    district: "Benue South",
    name: "Abba Patrick Moro",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/abba-patrick-moro.jpg",
  },

  // BORNO STATE
  {
    state: "Borno State",
    district: "Borno Central",
    name: "Kaka Shehu Lawan",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/kaka-shehu-lawan.webp",
  },
  {
    state: "Borno State",
    district: "Borno North",
    name: "Mohammed Tahir Monguno",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/mohammed-tahir-monguno.webp",
  },
  {
    state: "Borno State",
    district: "Borno South",
    name: "Mohammed Ali Ndume",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/mohammed-ali-ndume.png",
  },

  // CROSS RIVER STATE
  {
    state: "Cross River State",
    district: "Cross River Central",
    name: "Williams Eteng Jonah",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/williams-eteng-jonah.jpg",
  },
  {
    state: "Cross River State",
    district: "Cross River North",
    name: "Jarigbe Agom Jarigbe",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/jarigbe-agom-jarigbe.jpg",
  },
  {
    state: "Cross River State",
    district: "Cross River South",
    name: "Asuquo Ekpenyong",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/asuquo-ekpenyong.png",
  },

  // DELTA STATE
  {
    state: "Delta State",
    district: "Delta Central",
    name: "Ede Omueya Dafinone",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ede-omueya-dafinone.jpeg",
  },
  {
    state: "Delta State",
    district: "Delta North",
    name: "Ned Munir Nwoko",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ned-munir-nwoko.webp",
  },
  {
    state: "Delta State",
    district: "Delta South",
    name: "Joel-Onowakpo Thomas",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/joel-onowakpo-thomas.png",
  },

  // EBONYI STATE
  {
    state: "Ebonyi State",
    district: "Ebonyi Central",
    name: "Kenneth Emeka Eze",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/kenneth-emeka-eze.jpg",
  },
  {
    state: "Ebonyi State",
    district: "Ebonyi North",
    name: "Onyeka Peter Nwebonyi",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/onyeka-peter-nwebonyi.png",
  },
  {
    state: "Ebonyi State",
    district: "Ebonyi South",
    name: "Anthony Okorie Ani",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/anthony-okorie-ani.jpg",
  },

  // EDO STATE
  {
    state: "Edo State",
    district: "Edo Central",
    name: "Joseph Igiagbe Ikpea",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/joseph-igIagbe-ikpea.webp",
  },
  {
    state: "Edo State",
    district: "Edo North",
    name: "Adams Aliyu Oshiomole",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/adams-aliyu-oshiomole.webp",
  },
  {
    state: "Edo State",
    district: "Edo South",
    name: "Neda Bernards Imasuen",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/neda-bernards-imasuen.webp",
  },

  // EKITI STATE
  {
    state: "Ekiti State",
    district: "Ekiti Central",
    name: "Michael Opeyemi Bamidele",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/michael-opeyemi-bamidele.webp",
  },
  {
    state: "Ekiti State",
    district: "Ekiti North",
    name: "Cyril Oluwole Fasuyi",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/cyril-oluwole-fasuyi.webp",
  },
  {
    state: "Ekiti State",
    district: "Ekiti South",
    name: "Adeyemi Raphael Adaramodu",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/adeyemi-raphael-adaramodu.webp",
  },

  // ENUGU STATE
  {
    state: "Enugu State",
    district: "Enugu East",
    name: "Kelvin Chukwu",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/kelvin-chukwu.jpg",
  },
  {
    state: "Enugu State",
    district: "Enugu North",
    // name: "Okechukwu Ezea" now late,
    name: "Ikeje Israel Asogwa",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ikeje-israel-asogwa.webp",
  },
  {
    state: "Enugu State",
    district: "Enugu West",
    name: "Osita Ngwu",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/osita-ngwu.jpg",
  },

  // FCT
  {
    state: "Federal Capital Territory",
    district: "FCT",
    name: "Ireti Heebah Kingibe",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ireti-heebah-kingibe.jpg",
  },

  // GOMBE STATE
  {
    state: "Gombe State",
    district: "Gombe Central",
    name: "Danjuma Goje Mohammed",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/danjuma-goje-mohammed.jpg",
  },
  {
    state: "Gombe State",
    district: "Gombe North",
    name: "Ibrahim Dankwambo",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ibrahim-dankwambo.webp",
  },
  {
    state: "Gombe State",
    district: "Gombe South",
    name: "Anthony Siyako Yaro",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/anthony-siyako-yaro.jpg",
  },

  // IMO STATE
  {
    state: "Imo State",
    district: "Imo East",
    name: "Ezenwa Francis Onyewuchi",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ezenwa-francis-onyewuchi.jpg",
  },
  {
    state: "Imo State",
    district: "Imo North",
    name: "Patrick Chiwuba Ndubueze",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/patrick-chiwuba-ndubueze.jpeg",
  },
  {
    state: "Imo State",
    district: "Imo West",
    name:"Osita Bonaventure Izunaso",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/osita-bonaventure-izunaso.jpeg",
  },

  // JIGAWA STATE
  {
    state: "Jigawa State",
    district: "Jigawa North-East",
    name: "Mallam-madori Ahmed Abdulhamid",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/mallam-madori-ahmed-abdulhamid.jpg",
  },
  {
    state: "Jigawa State",
    district: "Jigawa North-West",
    name: "Babangida Hussaini",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/babangida-hussaini.jpeg",
  },
  {
    state: "Jigawa State",
    district: "Jigawa South-West",
    name: "Mustapha Khabeeb",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/mustapha-khabeeb.jpeg",
  },

  // KADUNA STATE
  {
    state: "Kaduna State",
    district: "Kaduna Central",
    name: "Lawal Usman",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/lawal-usman.jpg",
  },
  {
    state: "Kaduna State",
    district: "Kaduna North",
    name: "Ibrahim Khalid Mustapha",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ibrahim-khalid-mustapha.jpg",
  },
  // 1
  {
    state: "Kaduna State",
    district: "Kaduna South",
    name: "Sunday Katung",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/sunday-katung.jpg",
  },

  // KANO STATE
  {
    state: "Kano State",
    district: "Kano Central",
    name: "Rufai Sani Hanga",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/rufai-sani-hanga.jpeg",
  },
  {
    state: "Kano State",
    district: "Kano North",
    name: "Ibrahim Barau Jibrin",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ibrahim-barau-jibrin.jpg",
  },
  {
    state: "Kano State",
    district: "Kano South",
    name: "Suleiman Abdurrahman Kawu Sumaila",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/suleiman-abdurrahman-kawu-sumaila.jpg",
  },

  // KATSINA STATE
  {
    state: "Katsina State",
    district: "Katsina Central",
    name: "Abdulaziz Musa Yar'Adua",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/abdulaziz-musa-yaradua.jpeg",
  },
  {
    state: "Katsina State",
    district: "Katsina North",
    name: "Nasiru Sani Zangon Daura",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/nasiru-sani-zangon-daura.png",
  },
  {
    state: "Katsina State",
    district: "Katsina South",
    name: "Mohammed Muntari Dandutse",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/mohammed-muntari-dandutse.jpg",
  },

  // KEBBI STATE
  {
    state: "Kebbi State",
    district: "Kebbi Central",
    name: "Mohammad Adamu Mainasara Aliero",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/mohammad-adamu-mainasara-aliero.jpg",
  },
  {
    state: "Kebbi State",
    district: "Kebbi North",
    name: "Yahaya Abubakar Abdullahi",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/yahaya-abubakar-abdullahi.jpg",
  },
  {
    state: "Kebbi State",
    district: "Kebbi South",
    name: "Garba Musa Maidoki",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/garba-musa-maidoki.jpg",
  },

  // KOGI STATE
  {
    state: "Kogi State",
    district: "Kogi Central",
    name: "Akpoti-uduaghan Natasha",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/akpoti-uduaghan-natasha.webp",
  },
  {
    state: "Kogi State",
    district: "Kogi East",
    name: "Jibrin Isah",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/jibrin-isah.jpg",
  },
  {
    state: "Kogi State",
    district: "Kogi West",
    name: "Sunday Steve Karimi",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/sunday-steve-karimi.jpg",
  },

  // KWARA STATE
  {
    state: "Kwara State",
    district: "Kwara Central",
    name: "Saliu Mustapha",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/saliu-mustapha.jpg",
  },
  {
    state: "Kwara State",
    district: "Kwara North",
    name: "Sadiq Suleiman Umar",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/sadiq-suleiman-umar.jpg",
  },
  {
    state: "Kwara State",
    district: "Kwara South",
    name: "Ashiru Oyelola Yisa",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ashiru-oyelola-yisa.jpg",
  },

  // LAGOS STATE
  {
    state: "Lagos State",
    district: "Lagos Central",
    name: "Wasiu Sanni Eshilokun",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/wasiu-sanni-eshilokun.jpg",
  },
  {
    state: "Lagos State",
    district: "Lagos East",
    name: "Adetokunbo Abiru Mukhail",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/adetokunbo-abiru-mukhail.jpg",
  },
  {
    state: "Lagos State",
    district: "Lagos West",
    name: "Idiat Oluranti Adebule",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/idiat-oluranti-adebule.jpg",
  },

  // NASARAWA STATE
  {
    state: "Nasarawa State",
    district: "Nasarawa North",
    // name: "Godiya Akwashiki(late)",
    name: "Danladi Halilu Envulanza",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/danladi-halilu-envulanza.jpg",
  },
  {
    state: "Nasarawa State",
    district: "Nasarawa South",
    name: "Onawo Mohammed Ogoshi",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/onawo-mohammed-ogoshi.jpg",
  },
  {
    state: "Nasarawa State",
    district: "Nasarawa West",
    name: "Ahmed Wadada Aliyu",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ahmed-wadada-aliyu.jpg",
  },

  // NIGER STATE
  {
    state: "Niger State",
    district: "Niger East",
    name: "Mohammed Sani Musa",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/mohammed-sani-musa.jpg",
  },
  {
    state: "Niger State",
    district: "Niger North",
    name: "Sani Abubakar Bello",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/sani-abubakar-bello.jpg",
  },
  {
    state: "Niger State",
    district: "Niger South",
    name: "Peter Ndalikali Jiya",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/peter-ndalikali-jiya.jpg",
  },

  // OGUN STATE
  {
    state: "Ogun State",
    district: "Ogun Central",
    name: "Afolabi Salisu",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/afolabi-salisu.jpg",
  },
  {
    state: "Ogun State",
    district: "Ogun East",
    name: "Justus Olugbenga Daniel",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/justus-olugbenga-daniel.jpg",
  },
  {
    state: "Ogun State",
    district: "Ogun West",
    name: "Adeola Solomon Olamilekan",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/adeola-solomon-olamilekan.jpg",
  },

  // ONDO STATE
  {
    state: "Ondo State",
    district: "Ondo Central",
    name: "Adeniyi Ayodele Adegbonmire",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/adeniyi-ayodele-adegbonmire.jpg",
  },
  {
    state: "Ondo State",
    district: "Ondo North",
    name: "Ipinsagba Emmanuel Olajide",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ipinsagba-emmanuel-olajide.jpg",
  },
  {
    state: "Ondo State",
    district: "Ondo South",
    name: "Ibrahim Jimoh",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ibrahim-jimoh.jpg",
  },

  // OSUN STATE
  {
    state: "Osun State",
    district: "Osun Central",
    name: "Oluwole Fadeyi Olubiyi",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/oluwole-fadeyi-olubiyi.jpg",
  },
  {
    state: "Osun State",
    district: "Osun East",
    name: "Francis Adenigba Fadahunsi",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/francis-adenigba-fadahunsi.jpg",
  },
  {
    state: "Osun State",
    district: "Osun West",
    name: "Olalere Oyewumi",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/olalere-oyewumi.jpg",
  },

  // OYO STATE
  {
    state: "Oyo State",
    district: "Oyo Central",
    name: "Yunus Abiodun Akintunde",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/yunus-abiodun-akintunde.jpg",
  },
  {
    state: "Oyo State",
    district: "Oyo North",
    name: "Buhari Abdulfatai Omotayo",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/buhari-abdulfatai-omotayo.jpg",
  },
  {
    state: "Oyo State",
    district: "Oyo South",
    name: "Sharafadeen Abiodun Alli",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/sharafadeen-abiodun-alli.jpg",
  },

  // PLATEAU STATE
  {
    state: "Plateau State",
    district: "Plateau Central",
    name: "Diket Satso Plang",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/diket-satso-plang.jpg",
  },
  {
    state: "Plateau State",
    district: "Plateau North",
    name: "Pam Mwadkon Dachungyang",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/pam-mwadkon-dachungyang.jpg",
  },
  {
    state: "Plateau State",
    district: "Plateau South",
    name: "Simon Bako Lalong",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/simon-bako-lalong.jpg",
  },

  // RIVERS STATE
  {
    state: "Rivers State",
    district: "Rivers East",
    name: "Allwell Heacho Onyesoh",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/allwell-heacho-onyesoh.jpg",
  },
  {
    state: "Rivers State",
    district: "Rivers South-East",
    // name: "Barinada Barry Mpigi" late,
    name: "Olaka Nwogu",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/olaka-nwogu.jpg",
  },
  {
    state: "Rivers State",
    district: "Rivers West",
    name: "Ipalibo Harry Banigo",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ipalibo-harry-banigo.jpg",
  },

  // SOKOTO STATE
  {
    state: "Sokoto State",
    district: "Sokoto East",
    name: "Ibrahim Lamido",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ibrahim-lamido.jpg",
  },
  {
    state: "Sokoto State",
    district: "Sokoto North",
    name: "Aliyu Magatakarda Wamakko",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/aliyu-magatakarda-wamakko.jpg",
  },
  {
    state: "Sokoto State",
    district: "Sokoto South",
    name: "Aminu Waziri Tambuwal",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/aminu-waziri-tambuwal.jpg",
  },

  // TARABA STATE
  {
    state: "Taraba State",
    district: "Taraba Central",
    name: "Manu Haruna",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/manu-haruna.jpg",
  },
  {
    state: "Taraba State",
    district: "Taraba North",
    name: "Shuaibu Isa Lau",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/shuaibu-isa-lau.jpg",
  },
  {
    state: "Taraba State",
    district: "Taraba South",
    name: "David Jimkuta",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/david-jimkuta.jpg",
  },

  // YOBE STATE
  {
    state: "Yobe State",
    district: "Yobe East",
    name: "Mustapha Musa",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/mustapha-musa.jpg",
  },
  {
    state: "Yobe State",
    district: "Yobe North",
    name: "Ahmad Ibrahim Lawan",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ahmad-ibrahim-lawan.jpg",
  },
  {
    state: "Yobe State",
    district: "Yobe South",
    name: "Ibrahim Mohammed Bomai",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ibrahim-mohammed-bomai.jpg",
  },

  // ZAMFARA STATE
  {
    state: "Zamfara State",
    district: "Zamfara Central",
    name: "Ikra Aliyu Bilbis",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/ikra-aliyu-bilbis.jpg",
  },
  {
    state: "Zamfara State",
    district: "Zamfara North",
    name: "Yau Sahabi Alhaji",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/yau-sahabi-alhaji.webp",
  },
  {
    state: "Zamfara State",
    district: "Zamfara West",
    name: "Abdulaziz Abubakar Yari",
    electionDate: "16 January 2027",
    image: "/images/candidates/senate/abdulaziz-abubakar-yari.jpg",
  },
];

function CandidateCard({
  candidate,
}: {
  candidate: (typeof presidentialCandidates)[number];
}) {
  return (
    <Link
      href={`/candidates/${candidate.slug}`}
      className="candidate-card"
    >
      <div className="candidate-image-wrapper">
        <img
          src={candidate.image}
          alt={candidate.name}
          className="candidate-image"
        />

        <span
          className={`party-badge party-${candidate.shortParty.toLowerCase()}`}
        >
          {candidate.shortParty}
        </span>
      </div>

      <div className="candidate-info">
        <div className="candidate-status">
          {candidate.statusType === "confirmed" ? (
            <FiCheckCircle />
          ) : (
            <FiClock />
          )}

          <span>{candidate.status}</span>
        </div>

        <h3>{candidate.name}</h3>

        <p>{candidate.party}</p>

        <span className="profile-button">
          View Profile
          <FiArrowRight />
        </span>
      </div>
    </Link>
  );
}
function StateCard({
  state,
  candidates,
  electionDate,
  image,
}: {
  state: string;
  candidates: string | null;
  electionDate?: string | null;
  image: string;
}) {
  return (
    <article className="state-card">
      <img src={image} alt={state} className="state-card-image" />

      <div className="state-card-info">
        <div>
          <h3>{state}</h3>

          <p>{candidates ?? "Candidate information pending"}</p>

          {electionDate && (
            <p className="state-election-date">
              <FiClock />
              {electionDate}
            </p>
          )}
        </div>

        <FiChevronRight className="state-arrow" />
      </div>
    </article>
  );
}

function SenateCard({
  state,
  district,
  name,
  electionDate,
  image,
}: {
  state: string;
  district: string;
  name: string | null;
  electionDate?: string | null;
  image: string | null;
}) {
  return (
    <article className="state-card">
      {image ? (
        <img
          src={image}
          alt={name ?? district}
          className="state-card-image"
        />
      ) : (
        <div className="state-card-image-placeholder">
          Candidate image pending
        </div>
      )}

      <div className="state-card-info">
        <div>
          <h3>{name ?? "Candidate information pending"}</h3>

          <p>{state} • {district}</p>

          {electionDate && (
            <p className="state-election-date">
              <FiClock />
              {electionDate}
            </p>
          )}
        </div>

        <FiChevronRight className="state-arrow" />
      </div>
    </article>
  );
}

function CandidateRow({
  title,
  description,
  children,
  href = "#",
}: {
  title: string;
  description: string;
  children: ReactNode;
  href?: string;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  const updateScrollState = () => {
    const row = rowRef.current;

    if (!row) return;

    setCanScrollBack(row.scrollLeft > 2);

    setCanScrollForward(
      row.scrollLeft + row.clientWidth < row.scrollWidth - 2
    );
  };

  const scrollRow = (direction: "left" | "right") => {
    const row = rowRef.current;

    if (!row) return;

    row.scrollBy({
      left: direction === "right" ? row.clientWidth : -row.clientWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const row = rowRef.current;

    if (!row) return;

    updateScrollState();

    row.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      row.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <section className="candidate-section">
      <div className="candidate-section-heading">
        <div className="candidate-heading-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <a href={href} className="view-all-link">
          View all <FiArrowRight />
        </a>
      </div>

      <div className="candidate-carousel-wrapper">
        <button
          className="row-prev-button"
          onClick={() => scrollRow("left")}
          disabled={!canScrollBack}
          aria-label="Previous items"
        >
          <FiChevronRight />
        </button>

        <div className="candidate-row" ref={rowRef}>
          {children}
        </div>

        <button
          className="row-next-button"
          onClick={() => scrollRow("right")}
          disabled={!canScrollForward}
          aria-label="Next items"
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default function CandidateSection() {
  return (
    <section className="candidates-section" id="candidates">
      <CandidateRow
        title="Presidential Candidates"
        description="People seeking to be Nigeria's next President"
      >
        {presidentialCandidates.map((candidate) => (
          <CandidateCard
            key={candidate.name}
            candidate={candidate}
          />
        ))}
      </CandidateRow>

     <CandidateRow
  title="Governorship Candidates"
description="Current governors serving their respective states"
>
  {governorStates.map((state) => (
    <StateCard
      key={state.state}
      state={state.state}
      candidates={state.candidates}
      electionDate={state.electionDate}
      image={state.image}
    />
  ))}
</CandidateRow>

<CandidateRow
  title="Senate Candidates"
  description="Current senators representing their senatorial districts"
>
  {senateStates.map((seat) => (
    <SenateCard
      key={`${seat.state}-${seat.district}`}
      state={seat.state}
      district={seat.district}
      name={seat.name}
      electionDate={seat.electionDate}
      image={seat.image}
    />
  ))}
</CandidateRow>
    </section>
  );
}
