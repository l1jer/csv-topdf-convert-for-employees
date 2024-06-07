import React from "react";

const DataTable = ({
  allData,
  palletList,
  productList,
  palletTotal,
  productTotal,
  packingDetails,
  palletCarton,
  currency,
  disclaimerText,
  selectedCompany,
}) => {
  return (
    <section id="datTable">
      <article className="companyInfoContainer">
        <div className="companyInfoLeft">
          <h2>COMMERCIAL INVOICE</h2>
          <table id="leftCol">
            <tbody>
              <tr>
                <td>
                  <strong>Ship To:</strong>
                </td>

                <td>
                  {allData[0][1]}
                  <br />
                  {allData[0][2]}
                  <br />
                  {allData[0][3]}
                  <br />
                  {allData[0][4]}
                </td>
              </tr>
              <tr>
                <td className="gap">
                  <strong>ATTN:</strong>
                </td>
                <td className="gap">{allData[1][1]}</td>
              </tr>
              <tr>
                <td>
                  <strong>Phone:</strong>
                </td>
                <td>{allData[2][1]}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="companyInfoRight">
          <h2>{selectedCompany === "TSAOutdoors" ? "TASCO SALES (AUST) PTY LTD" : "ZEROTECH INTERNATIONAL PTY LTD"}</h2>
          <p>
            UNIT 6 WINBOURNE INDUSTRIAL ESTATE
            <br />
            9-13 WINBOURNE RD
            <br />
            BROOKVALE NSW 2100 AU <br />
            Tel: +61 2 9938 3244
          </p>
          <table id="rightCol">
            <tbody>
              <tr>
                <td>
                  <strong>Date:</strong>
                </td>
                <td>{allData[3][1]}</td>
              </tr>
              <tr>
                <td>
                  <strong>Invoice #:</strong>
                </td>
                <td>{allData[4][1]}</td>
              </tr>
              <tr>
                <td>
                  <strong>Incoterms:</strong>
                </td>
                <td>{allData[5][1]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
      <table id="producTable">
        <tbody>
          <tr>
            <th>SKU</th>
            <th>Description</th>
            <th>QTY</th>
            <th>$/Unit</th>
            <th>HS Code</th>
            <th>Country Of Origin</th>
            <th>Total {currency}$</th>
          </tr>
          {productList.map((item) => {
            return (
              <tr key={item}>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{item[4]}</td>
                <td>{item[5]}</td>
                <td>{item[6]}</td>
                <td>{item[7]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div id="prouctTotal">
        <p>
          Total: <strong>{currency} {productTotal}</strong>
        </p>
      </div>
      <div id="disclaimer">
        <p><strong>{disclaimerText}</strong></p>
      </div>
      {palletList.length > 0 ? (
        <section id="palletContainer">
          <table id="palletTable">
            <tbody>
              <tr>
                <th>{palletCarton} #</th>
                <th>Length</th>
                <th>Width</th>
                <th>Height</th>
                <th>Kg</th>
              </tr>
              {palletList.map((allPalletItms) => {
                return (
                  <tr key={allPalletItms[1]}>
                    {allPalletItms.slice(1).map((singleItem, key) => {
                      if (singleItem !== "") {
                        return <td key={key}>{singleItem}</td>;
                      }
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <section id="packingContainer">
            <div id="packingDetails">
              <p>
                Packing Details: <strong>{packingDetails}</strong>
              </p>
            </div>
            <div id="palletTotal">
              <p>
                Total: <strong>{palletTotal}</strong> KG
              </p>
            </div>
          </section>
        </section>
      ) : (
        ""
      )}
    </section>
  );
};

export default DataTable;
