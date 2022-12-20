import React from "react";
import FormWrapper from "./FormWrapper";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
}

interface AccountDetailsProps extends UserData {
  updateFields: (fields: Partial<UserData>) => void;
}

function AccountDetailsForm({
  firstName,
  lastName,
  email,
  updateFields,
}: AccountDetailsProps) {
  return (
    <FormWrapper title="User Details">
      <label htmlFor="first-name">First Name :</label>
      <input
        type="text"
        required
        autoFocus
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
        id="first-name"
      />

      <label htmlFor="last-name">Last Name :</label>
      <input
        type="text"
        id="last-name"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
        required
      />
      <label htmlFor="email">Email :</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        required
      />
    </FormWrapper>
  );
}

export default AccountDetailsForm;
