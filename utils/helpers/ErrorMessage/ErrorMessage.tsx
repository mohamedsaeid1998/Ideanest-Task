export const renderErrors = (errors: string | undefined) => {
  return errors ? (
    <span className=" block !mt-0 text-sm " style={{ color: "#dc2626" }}>
      {errors}
    </span>
  ) : null;
};
