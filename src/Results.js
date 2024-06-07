import React from "react";
import DataTable from "./DataTable";

const Results = ({
  allData,
  productList,
  palletList,
  palletTotal,
  productTotal,
  packingDetails,
  palletCarton,
  currency,
  disclaimerText,
  selectedCompany,
}) => {

  const isTSAOutdoors = selectedCompany === "TSAOutdoors";
  return (
    <section className="resultsContainer">
      <article id="header">
        <div className="left">
          <a href="/">
            {/* <img src="/images/zt-logo.png" alt="TSA Logo" /> */}
          </a>
        </div>
        <div className="right">
          <img src={isTSAOutdoors ? "/images/tsa-logo.png" : "/images/zt-logo.png"} alt={isTSAOutdoors ? "TSA Logo" : "ZeroTech Logo"} />
        </div>
      </article>
      <section>
        <DataTable
          productList={productList}
          allData={allData}
          palletList={palletList}
          palletTotal={palletTotal}
          productTotal={productTotal}
          packingDetails={packingDetails}
          palletCarton={palletCarton}
          currency={currency}
          disclaimerText={disclaimerText}
          selectedCompany={selectedCompany}
        />
      </section>
      <section id="footerLogos">
        <img src="/images/aus-trusted.png" alt="Australian Trusted Logo" />
        <img src="/images/iso9001.png" alt="iso9001 Logo" />
      </section>
      <section id="links">
        <div>
          <p>
            <span>T.</span> 02 9938 3244
          </p>
        </div>
        <div>
          <p>
            <span>E.</span> {isTSAOutdoors ? "sales@tasco.com.au" : "sales@zerotech.com.au"}
          </p>
        </div>
        <div>
          <p>
            <span>W.</span> {isTSAOutdoors ? "tasco.com.au" : "zerotech.com.au"}
          </p>
        </div>
        <div>
          <p>
            <span>F.</span> 02 9939 2972
          </p>
        </div>
        <div>
          <p>
            <span>ABN.</span> 54 000 502 910
          </p>
        </div>
        <div className="full">
          <p>
            <span>A.</span> Unit 6 Winbourne Estate, 9-13 Winbourne Rd,
            Brookvale, NSW 2100
          </p>
        </div>
      </section>
      <article id="footer">
        <div className="left">
          {isTSAOutdoors ? "Tasco Sales (Aust) Pty Ltd" : "ZeroTech International PTY LTD"}
        </div>
        <div className="right">
          <p>Postal Address: PO BOX 7200, Warringah Mall, NSW 2100 </p>
        </div>
      </article>
    </section>
  );
};

export default Results;
