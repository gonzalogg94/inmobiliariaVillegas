import { Col } from "react-bootstrap";

const Empresas = () => {
  return (
    <article id="empresas" className="text-center container-fluid  py-5">
      <div className="container">
        <h2 className="display-4 colorAzul text-center">Empresas asociadas</h2>
        <hr />
        <div className="row justify-content-center">
          <Col lg={5} md={5} sm={5}>
            <img
              src="https://img.freepik.com/vector-gratis/forma-abstracta-floral-logotipo_1035-8982.jpg?w=2000"
              className="w-75"
              alt="imagen ilustrativa"
            />
          </Col>
          <Col lg={5} md={5} sm={5}>
            <img
              src="https://img.freepik.com/vector-premium/ilustracion-colorida-logotipo-pajaro_95635-223.jpg?w=2000"
              className="w-75"
              alt="imagen modelo"
            />
          </Col>
        </div>
      </div>
    </article>
  );
};

export default Empresas;
