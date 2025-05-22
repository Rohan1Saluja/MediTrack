export interface Medication {
  id: string;
  name: string;
  time: string;
  dosage: string;
  taken?: boolean; // Optional: to track if it's marked as taken
}
