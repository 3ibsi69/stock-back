const html_to_pdf = require("html-pdf-node");
const { Readable } = require("stream");

const generatePDF = (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "HTML content is required" });
  }

  let options = { format: "A4" };
  let f = {
    content: `
        <div class="container">
      
        <div class="invoice">
        <div class="head">
          <div class="box" >
            <div style="text-align: center;"><h3>Détails Facture</h3></div>
            
              <h3>Facturé le : 202200306</h3>
              <p>Facturé le : 15/08/2022</p>
              <p>Type Voyage : Aérien</p>
           
          </div>
          <div class="box" >
            <div style="text-align: center;"><h3>Détails Client</h3></div>
          
              <h3>Client: ${content[0].client}</h3>
              <p>Address : 27BIS LIBAN LAFAYETTE TUNIS</p>
              <p>Tél : 20028952</p>
          
    
            <p >CODE TVA : 21733891</p>
          </div>
        </div>
        <div class="invoice-body">
          <div style="text-align: center;"><h3>Désignation</h3></div>
          <table>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Quatity</th>
              <th>Montant</th>
            </tr>
            ${content
              .map((item) =>
                item.products
                  .map(
                    (product) => `
                        <tr>
                          <td>${product.name}</td>
                          <td>${product.category}</td>
                          <td>${product.quantity}</td>
                          <td>${product.price}</td>
                        </tr>
                      `
                  )
                  .join("")
              )
              .join("")}
            </table>    
          <div class="total">
            <h3 style="margin-right: 10px;">TOTAL : 1234.000</h3>
          </div>
        </div>
        <div class="invoice-footer">
          <div class="footer-left">
            <div>
              <h3>Base de calcule de la TVA pour les frais (TND)</h3>
              <table>
                <tr>
                  <th>BASE TVA</th>
                  <th>TAUX TVA</th>
                  <th>MT TVA</th>
                </tr>
                <tr>
                  <td>0.000 TND</td>
                  <td>0.000 TND</td>
                  <td>0.000 TND</td>
                </tr>
              </table>
            </div>
            <div class="left-down">
              <ul>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates suscipit
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates suscipit
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates suscipit
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates suscipit
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates suscipit
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-right">
            <div class="payment">
              <div>
                <h3>Montant Principal</h3>
                <h3>Montant des frais</h3>
                <h3>Timbre Fiscal</h3>
                <h3>Montant général</h3>
              </div>
              <div>
                <h3>1245.000 TND</h3>
                <h3>20.000 TND</h3>
                <h3>0.600 TND</h3>
                <h3>1265.600 TND</h3>
              </div>
            </div>
            <p
              style="
                width: 80%;
                margin: 0 auto;
                text-align: center;
                margin-top: 10px;
              "
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
              vel quae consectetur, reiciendis corporis veritatis? Error aut
            </p>
          </div>
        </div>
      </div>
      
    
      <p class="text-footer">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        impedit, numquam obcaecati distinctio voluptas minus optio. Architecto
        fugit nemo sint nostrum inventore voluptatibus perferendis veritatis
        velit, quos asperiores debitis doloribus.
      </p>
      </div>
      <style>
      .container{
        margin-top:100px;
        height:100%;
      }
        .text-footer {
          width: 80%;
          margin: 0 auto;
          text-align: center;
          margin-top: 50vh;
          font-size: 10px;
        }
        .left-down{
          height: 18vh;
        }
        .footer-right{
          height: 35.8vh;
        }
        .total {
          width: 100%;
          display: grid;
          justify-items: end;
        }
        .head {
          width: 95%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 2em;
          
        }
        .payment {
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .payment div {
          min-height: 100px;
          border: 1px solid black;
          padding-left: 10px;
        }
    
        .box {
        height: 130px;
          border: 2px solid black;
          display: grid;
          grid-template-rows: 2fr 6fr 1fr;
        }
        .box div {
          border: 1px solid black;
        }
        .box h3 {
          margin: 0;
          margin-left: 5px;
        }
        .box p {
          margin: 0;
          margin-left: 5px;
        }
    
        .invoice-body {
          width: 95%;
          height: 220px;
          margin: 0 auto;
          margin-top: 10px;
          border: 2px solid black;
          display: grid;
          grid-template-rows: 2fr 6fr 1fr;
        }
    
        .invoice-body div {
          border: 1px solid black;
        }
    
        .invoice-footer {
          width: 95%;
          height: 50px;
          margin: 0 auto;
          margin-top: 10px;
          /* border: 2px solid black; */
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1em;
        }
    
        .invoice-footer .footer-right {
          border: 2px solid black;
          
        }
    
        .invoice-footer .footer-left {
          display: grid;
          grid-template-rows: 1fr 2fr;
          grid-gap: 1em;
        }
    
        .invoice-footer .footer-left div {
          border: 2px solid black;
        }
        table,
        td,
        th {
          border: 1px solid black;
          text-align: left;
        }
    
        table {
          border-collapse: collapse;
          width: 100%;
        }
    
        th,
        td {
          padding: 15px;
        }
    
      </style>
      `,
  };
  html_to_pdf.generatePdf(f, options).then((pdfBuffer) => {
    var file = Readable.from(pdfBuffer);
    console.log("PDF Buffer:-", pdfBuffer);
    res.setHeader("Content-Length", Buffer.byteLength(pdfBuffer));
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=quote.pdf");
    file.pipe(res);
  });
};

module.exports = {
  generatePDF,
};
