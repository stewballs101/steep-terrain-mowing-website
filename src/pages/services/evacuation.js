import React from "react";
import image1 from "../../images/image1.jpg"
import Link from "gatsby-link";

const EvacuationPage = () => (
  <div className="flex flex-col  md:flex-row">

  <div className="mx-auto md:w-1/2 p-4">
  <h2>Evacuation</h2><br></br>
  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p><br></br>
  <Link to="/services" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black">← Back to Services</Link>

  </div>
  <div className="mx-auto md:w-1/2 p-4">
  <img src={image1} alt="Logo" />
  </div>
  </div>

);

export default EvacuationPage;
