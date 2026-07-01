import { useParams } from "react-router-dom";

const BolodePoteId = () => {

  const { id } = useParams();

  return (
    <div>
      <h1>Bolos {id}</h1>
    </div>
  )
}

export default BolodePoteId