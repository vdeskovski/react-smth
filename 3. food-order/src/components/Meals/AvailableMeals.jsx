import { useEffect, useState } from "react";
import MealItem from "./MealItem/MealItem";
import { Container, Spinner } from "react-bootstrap";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-course-fa14e-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key]["name"],
          description: responseData[key]["description"],
          price: responseData[key]["price"],
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status"></Spinner>
        </div>
      </>
    );
  }

  if (httpError) {
    return (
      <>
        <div className="d-flex justify-content-center text-danger">
          <p>{httpError}</p>
        </div>
      </>
    );
  }

  const mealList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <>
      <Container className="shadow mt-4 rounded-4 bg-light">
        {mealList}
      </Container>
    </>
  );
};

export default AvailableMeals;
