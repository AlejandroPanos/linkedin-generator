import PageHeader from "../../components/private/PageHeader/PageHeader";
import SettingsForm from "../../components/private/SettingsForm/SettingsForm";
import SettingsActions from "../../components/private/SettingsActions/SettingsActions";

const Settings = () => {
  return (
    <>
      <div className="page-wrapper">
        <PageHeader
          title="Settings"
          text="Change any of your account details. If you have any questions, contact our support team."
        />
        <SettingsForm />
        <SettingsActions />
      </div>
    </>
  );
};

export default Settings;
