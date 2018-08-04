import React from "react";
import Link from "gatsby-link";
import image1 from "../images/image1.jpg"

const NewsPage = () => (
  <div className="flex flex-col  md:flex-row">

<div className="mx-auto md:w-1/2 p-4">
<h2>News</h2><br></br>
<p>At vero eos et accusamus et iusto odio dignissimos ducimus 
    qui blanditiis praesentium voluptatum deleniti atque corrupti 
    quos dolores et quas molestias excepturi sint occaecati cupiditate 
    non provident, similique sunt in culpa qui officia deserunt mollitia 
    animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis 
    est et expedita distinctio. Nam libero tempore, cum soluta nobis est 
    eligendi optio cumque nihil impedit quo minus id quod maxime placeat 
    facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
    saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
    Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
    voluptatibus maiores alias consequatur aut perferendis doloribus asperiores 
    repellat.</p>
</div>
<div className="mx-auto md:w-1/2 p-4">
<img className="shadow-lg" src={image1} alt="Logo"/>
</div>
</div>
);

export default NewsPage;
