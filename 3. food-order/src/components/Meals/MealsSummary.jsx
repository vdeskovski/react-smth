import { Container } from "react-bootstrap";

const MealsSummary = () => {
  return (
    <>
      <Container
        className="shadow rounded-4 p-4 bg-dark"
        style={{ width: "40%", marginTop: "-8rem" }}
      >
        <div className="text-center">
          <h2 className="mb-4 fw-bold">Delicious Food, Delivered to You</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut
            quisquam soluta eveniet earum, temporibus repellat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est odit
            unde hic, ducimus maiores doloremque soluta quibusdam neque rerum.
          </p>
        </div>
      </Container>
    </>
  );
};

export default MealsSummary;
