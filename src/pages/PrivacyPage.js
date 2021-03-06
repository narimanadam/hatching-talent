import React from "react";
import { Container } from "react-grid-system";
import PageHeader from "../common/components/PageHeader";
import useDocumentTitle from "../common/hooks/useDocumentTitle";
import withMainLayout from "../Layout/MainLayout/WithMainLayout";

const PrivacyPage = () => {
  useDocumentTitle("Privacy &amp; Policy | Hatching Talent");
  return (
    <Container>
      <PageHeader boldText="Privacy" normalText="Policy"></PageHeader>
      <ul className="list__def">
        <li className="list__def__item">
          <h4 className="list__def__term">
            HOW YOU CAN ACCESS AND, IF NECESSARY, CHANGE THE PERSONAL
            INFORMATION SSS MAINTAINS
          </h4>
          <div className="list__def__def">
            If for any reason you are concerned that the personal information
            held by Sun & Sand Sports is not correct, please visit the website.
            After logging onto the site through the ‘Sign In’ menu on the
            homepage, your personal information will be made available for
            review. You can then change the incorrect information under the ‘My
            Account’ section. Only you or upon your request allow the Customer
            Care department to access your personal data from the website using
            your password and User ID. This information may be changed online
            under ‘My Details’, ‘Shipping Details’, and ‘My Email Preferences’.
            You can also change or delete your saved credit/debit card details.
          </div>
        </li>
        <li className="list__def__item">
          <h4 className="list__def__term">Title</h4>
          <div className="list__def__def">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            debitis ea sunt. Illo cumque perspiciatis optio quas fugit impedit
            quos laborum dicta veritatis quam, enim error voluptas distinctio
            nemo id. Esse sapiente unde id quaerat maxime, veniam assumenda
            obcaecati magnam.
          </div>
        </li>
        <li className="list__def__item">
          <h4 className="list__def__term">Title</h4>
          <div className="list__def__def">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            debitis ea sunt. Illo cumque perspiciatis optio quas fugit impedit
            quos laborum dicta veritatis quam, enim error voluptas distinctio
            nemo id. Esse sapiente unde id quaerat maxime, veniam assumenda
            obcaecati magnam.
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default withMainLayout(PrivacyPage);
