export interface Profile {
  profile: PersonalData;
  records: SecureData;
}

interface PersonalData {
  firstName: string;
  lastName: string;
  age: number;
}

interface SecureData {

  bloodGroup: string;
  condition: {
    name: string;
    diagnosisDate: Date;
  }
}
