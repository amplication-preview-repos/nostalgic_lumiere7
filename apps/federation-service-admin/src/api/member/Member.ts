export type Member = {
  contactNumber: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  firstName: string | null;
  id: string;
  kycStatus?: "Option1" | null;
  lastName: string | null;
  updatedAt: Date;
};
