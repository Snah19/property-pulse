import InfoBox from "./info-box";

const InfoBoxes = () => {
  return (
    <article>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">

        <InfoBox title="For Renters" isForRenter={true} >
          Find your dream rental property. Bookmark properties and contact owners.
        </InfoBox>
        <InfoBox title="For Property Owners" isForRenter={false}>
          List your properties and reach potential tenants
        </InfoBox>

        </div>
      </div>
    </article>
  );
};

export default InfoBoxes;