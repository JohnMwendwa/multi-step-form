import FormWrapper from "./FormWrapper";

interface Password {
  password: string;
  confirmPassword: string;
}

interface PasswordDetailsprops extends Password {
  updateFields: (fields: Partial<Password>) => void;
}

function PasswordDetails({
  password,
  confirmPassword,
  updateFields,
}: PasswordDetailsprops) {
  return (
    <FormWrapper title="User Password">
      <label htmlFor="password">Password :</label>
      <input
        type="password"
        id="password"
        autoFocus
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
        required
      />

      <label htmlFor="confirm-password">Confirm Password :</label>
      <input
        type="password"
        id="confirm-password"
        value={confirmPassword}
        onChange={(e) => updateFields({ confirmPassword: e.target.value })}
        required
      />
    </FormWrapper>
  );
}

export default PasswordDetails;
