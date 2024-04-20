import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function ContactUsPage() {
  return (
    <div className="h-svh bg-contriverBgRotate bg-cover bg-top pt-10">
      {/* CONATACT US */}
      <h1 className="text-gray-700 sm:text-7xl text-5xl text-center font-bold text-center mb-14">
        CONTACT US
      </h1>

      <div className="flex flex-col lg:flex-row bg-blue-50 animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
        <div className="flex flex-col lg:w-1/3 py-4 sm:py-10">
          <div className="flex flex-col justify-center items-center mb-4 sm:mb-10">
            <LocationOnIcon
              className="text-gray-700"
              style={{ fontSize: "5rem" }}
            />
            <p className="text-gray-700 font-bold text-2xl sm:text-5xl lg:text-4xl">
              ADDRESS
            </p>
          </div>

          <p className="text-lg sm:text-3xl lg:text-2xl font-semibold m-auto">
            I - 188 , Phase 1 , Ashok Vihar, Delhi , IN
          </p>
        </div>
        {/* Separator */}
        <div className="hidden sm:inline-block h-auto w-0.5 self-stretch bg-gray-700"></div>

        <div className="flex flex-col lg:w-1/3 py-4 sm:py-10">
          <div className="flex flex-col justify-center items-center mb-4 sm:mb-10">
            <MailIcon className="text-gray-700" style={{ fontSize: "5rem" }} />
            <p className="text-gray-700 font-bold text-2xl sm:text-5xl lg:text-4xl">
              E-MAIL
            </p>
          </div>

          <p className="text-lg sm:text-3xl lg:text-2xl font-semibold m-auto ">
            contrivewith@thedronecontriver.co.in
          </p>
        </div>

        <div className="hidden sm:inline-block h-auto w-0.5 self-stretch bg-gray-700"></div>
        {/* Separator */}
        <div className="flex flex-col lg:w-1/3 py-4 sm:py-10">
          <div className="flex flex-col justify-center items-center mb-4 sm:mb-10">
            <LocalPhoneIcon
              className="text-gray-700"
              style={{ fontSize: "5rem" }}
            />
            <p className="text-gray-700 font-bold text-2xl sm:text-5xl lg:text-4xl">
              PHONE NUMBER
            </p>
          </div>

          <p className="text-lg sm:text-3xl lg:text-2xl font-semibold m-auto">
            +91 9958312168
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
