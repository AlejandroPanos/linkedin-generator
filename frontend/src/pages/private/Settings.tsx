import { useEffect } from "react";
import { useSearchParams } from "react-router";

import PageHeader from "../../components/private/PageHeader/PageHeader";
import SettingsForm from "../../components/private/SettingsForm/SettingsForm";
import SettingsActions from "../../components/private/SettingsActions/SettingsActions";
import toast from "react-hot-toast";

const Settings = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      toast.success("Payment successful!");
      searchParams.delete("success");
      setSearchParams(searchParams);
    }

    if (searchParams.get("canceled") === "true") {
      toast.error("Payment canceled");
      searchParams.delete("canceled");
      setSearchParams(searchParams);
    }
  }, [searchParams]);

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
