import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./Content";
function Card() {
  return (
    <>
      <Content>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Welcome</h5>
            <p className="card-text">Thank you for visiting our website</p>
          </div>
        </div>
      </Content><br/>
    </>
  );
}
export default Card;
