const SettingsActions = () => {
  return (
    <>
      <div className="content-wrapper">
        <h2>Change or cancel plan</h2>
        <p>
          You are currently in the Free Plan. If you want to change to a different plan,{" "}
          <a href="#">click here</a>.
        </p>
        <p>
          If you want to cancel your plan, <a href="#">click here</a>.
        </p>

        <h2 className="mt-6">Delete account</h2>
        <p>
          Please <a href="#">click here</a> to contact our support team if you want to delete your
          account.
        </p>
      </div>
    </>
  );
};

export default SettingsActions;
