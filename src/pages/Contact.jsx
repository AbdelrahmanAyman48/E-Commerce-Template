
import BreadCrumb from "../common/BreadCrumb";
import i18n from "../common/Translation";
import PropTypes from 'prop-types';
import { svgArray } from "../common/ChooseSVG";
import RedButton from "../common/RedBtn";
// Component to choose SVG from the array
const ChooseSVG = ({ name }) => {
  // Find the SVG object by name
  const selectedSVG = svgArray.find(svgObj => svgObj.name === name);
  
  // Render the selected SVG
  return selectedSVG ? selectedSVG.svg : <div>SVG not found</div>;
};
// PropTypes validation
ChooseSVG.propTypes = {
  name: PropTypes.string.isRequired,
};

{/* <ChooseSVG name={'Arrow'} />  */}
const Contact = () => {
  return (
    <div className="flex flex-col mx-4 md:ml-36 mt-48 gap-20">
      <BreadCrumb
        path={`${i18n.t("home")}/${i18n.t("footer.Contact")}`}
      />
      <div className="flex flex-col md:flex-row gap-8">
        <div className="shadow  w-full md:w-[340px] h-[457px] flex flex-col gap-8 py-10 px-8 rounded">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row  gap-4  items-center">
            <ChooseSVG name={'Phone'} />
              <span className="text-base font-medium">
                {i18n.t("contactPage.call")}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm">{i18n.t("contactPage.available")}</p>
              <p className="text-sm">
                {i18n.t("contactPage.phone")}: +8801611112222
              </p>
            </div>
          </div>
          <hr className="mx-full border-gray-400" />
          <div className="flex flex-col gap-6">
            <div className="flex flex-row  gap-4  items-center">
            <ChooseSVG name={'Letter'} />

              <span className="text-base font-medium">
                {i18n.t("contactPage.write")}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm">{i18n.t("contactPage.fillForm")}</p>

              <p className="text-sm">
                {i18n.t("contactPage.emails")}: customer@exclusive.com
              </p>
              <p className="text-sm">
                {i18n.t("contactPage.emails")}: support@exclusive.com
              </p>
            </div>
          </div>
        </div>
        <div className="shadow  w-[full] flex flex-col py-10 px-4 md:px-8 rounded">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder={i18n.t("contactPage.yourName")}
                required
                className="md:w-[235px] rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-base focus:border outline-none focus:border-gray-300  "
              />
              <input
                type="email"
                placeholder={i18n.t("contactPage.yourEmail")}
                required
                className="md:w-[235px] rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-base focus:border outline-none focus:border-gray-300  "
              />
              <input
                type="tel"
                placeholder={i18n.t("contactPage.yourPhone")}
                required
                className="md:w-[235px] rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-base focus:border outline-none focus:border-gray-300  "
              />
            </div>
            <textarea
              placeholder={i18n.t("contactPage.yourMessage")}
              required
              className="min-h-[50px] h-[207px] rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-base focus:border outline-none focus:border-gray-300  "
            />
            <div className="ml-auto">
              <RedButton name={i18n.t("redButtons.sendMassage" )} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
