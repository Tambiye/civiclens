/**
 * Sitting senators by state and senatorial district.
 * Used by the home page senate row and for incumbency in the candidate registry.
 */

export interface CurrentSenator {
  state: string;
  district: string;
  name: string | null;
  electionDate?: string | null;
  image: string | null;
}

export const currentSenators: CurrentSenator[] = [
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
