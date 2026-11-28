/** Party codes used in INEC candidate lists, mapped to full names. */
export const PARTY_NAMES: Record<string, string> = {
  A: "Accord",
  AA: "Action Alliance",
  AAC: "African Action Congress",
  ADC: "African Democratic Congress",
  ADP: "Action Democratic Party",
  APC: "All Progressives Congress",
  APGA: "All Progressives Grand Alliance",
  APM: "Allied Peoples Movement",
  APP: "Allied Peoples Party",
  BP: "Boot Party",
  DLA: "Democratic Leadership Alliance",
  LP: "Labour Party",
  NDC: "Nigeria Democratic Congress",
  NDP: "National Democratic Party",
  NNPP: "New Nigeria Peoples Party",
  NRM: "National Rescue Movement",
  PDP: "Peoples Democratic Party",
  PRP: "People's Redemption Party",
  SDP: "Social Democratic Party",
  YP: "Youth Party",
  YPP: "Young Progressive Party",
  ZLP: "Zenith Labour Party",
};

export function partyName(code: string): string {
  return PARTY_NAMES[code] ?? code;
}

export function isKnownParty(code: string): boolean {
  return code in PARTY_NAMES;
}
