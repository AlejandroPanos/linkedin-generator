import PageHeader from "../../components/private/PageHeader/PageHeader";
import SupportDetails from "../../components/private/SupportDetails/SupportDetails";

const Support = () => {
  return (
    <>
      <div className="page-wrapper">
        <PageHeader
          title="Support"
          text="Contact our support team for anything related to your account."
        />
        <SupportDetails />
      </div>
    </>
  );
};

export default Support;
