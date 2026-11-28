/**
 * Sitting state governors (incumbents), keyed by state name.
 * Source of truth for incumbency in the candidate registry and the governors UI.
 */

export type GovernorInfo = {
  name: string;
  age: number;
  party: string;
  inOfficeSince: string;
};

export const incumbentGovernors: Record<string, GovernorInfo> = {
  "Abia State": {
    name: "Alex Otti",
    age: 61,
    party: "LP",
    inOfficeSince: "2023-05-29",
  },

  "Adamawa State": {
    name: "Ahmadu Umaru Fintiri",
    age: 58,
    party: "APC",
    inOfficeSince: "2019-05-29",
  },

  "Akwa Ibom State": {
    name: "Umo Eno",
    age: 62,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Bauchi State": {
    name: "Bala Mohammed",
    age: 67,
    party: "APM",
    inOfficeSince: "2019-05-29",
  },

  "Benue State": {
    name: "Hyacinth Iormem Alia",
    age: 60,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Borno State": {
    name: "Babagana Zulum",
    age: 56,
    party: "APC",
    inOfficeSince: "2019-05-29",
  },

  "Cross River State": {
    name: "Bassey Otu",
    age: 66,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Delta State": {
    name: "Sheriff Oborevwori",
    age: 62,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Ebonyi State": {
    name: "Francis Nwifuru",
    age: 51,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Enugu State": {
    name: "Peter Mbah",
    age: 54,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Gombe State": {
    name: "Muhammad Inuwa Yahaya",
    age: 64,
    party: "APC",
    inOfficeSince: "2019-05-29",
  },

  "Jigawa State": {
    name: "Umar Namadi",
    age: 63,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Kaduna State": {
    name: "Uba Sani",
    age: 55,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Kano State": {
    name: "Abba Kabir Yusuf",
    age: 63,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Katsina State": {
    name: "Dikko Umaru Radda",
    age: 56,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Kebbi State": {
    name: "Nasir Idris",
    age: 60,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Kwara State": {
    name: "AbdulRahman AbdulRazaq",
    age: 66,
    party: "APC",
    inOfficeSince: "2019-05-29",
  },

  "Lagos State": {
    name: "Babajide Sanwo-Olu",
    age: 60,
    party: "APC",
    inOfficeSince: "2019-05-29",
  },

  "Nasarawa State": {
    name: "Abdullahi Sule",
    age: 66,
    party: "APC",
    inOfficeSince: "2019-05-29",
  },

  "Niger State": {
    name: "Mohammed Umar Bago",
    age: 52,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Ogun State": {
    name: "Dapo Abiodun",
    age: 66,
    party: "APC",
    inOfficeSince: "2019-05-29",
  },

  "Oyo State": {
    name: "Seyi Makinde",
    age: 58,
    party: "APM",
    inOfficeSince: "2019-05-29",
  },

  "Plateau State": {
    name: "Caleb Mutfwang",
    age: 61,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Rivers State": {
    name: "Siminalayi Fubara",
    age: 51,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Sokoto State": {
    name: "Ahmad Aliyu",
    age: 56,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Taraba State": {
    name: "Agbu Kefas",
    age: 55,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  "Yobe State": {
    name: "Mai Mala Buni",
    age: 58,
    party: "APC",
    inOfficeSince: "2019-05-29",
  },

  "Zamfara State": {
    name: "Dauda Lawal",
    age: 60,
    party: "APC",
    inOfficeSince: "2023-05-29",
  },

  // OFF-CYCLE STATES

  "Anambra State": {
    name: "Charles Soludo",
    age: 65,
    party: "APGA",
    inOfficeSince: "2022-03-17",
  },

  "Bayelsa State": {
    name: "Douye Diri",
    age: 66,
    party: "APC",
    inOfficeSince: "2020-02-14",
  },

  "Edo State": {
    name: "Monday Okpebholo",
    age: 55,
    party: "APC",
    inOfficeSince: "2024-11-12",
  },

  "Ekiti State": {
    name: "Biodun Oyebanji",
    age: 58,
    party: "APC",
    inOfficeSince: "2022-10-16",
  },

  "Imo State": {
    name: "Hope Uzodimma",
    age: 67,
    party: "APC",
    inOfficeSince: "2020-01-15",
  },

  "Kogi State": {
    name: "Ahmed Usman Ododo",
    age: 48,
    party: "APC",
    inOfficeSince: "2024-01-27",
  },

  "Ondo State": {
    name: "Lucky Aiyedatiwa",
    age: 61,
    party: "APC",
    inOfficeSince: "2023-12-27",
  },

  "Osun State": {
    name: "Ademola Adeleke",
    age: 66,
    party: "Accord",
    inOfficeSince: "2022-11-27",
  },
};
