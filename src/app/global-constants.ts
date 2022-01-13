export interface CARS {
  ID: number;
  Marke: string;
  Modell: string;
  Fahrgestellnummer: string;
  KundenID: number;
  HaendlerID: number;
  Erstzulassung: string;
  ErstKennzeichen: string;
}

export class GlobalConstants {
  public static CarList: CARS[];
}
