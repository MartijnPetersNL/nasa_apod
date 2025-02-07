import { ArrowRightCircle } from "react-bootstrap-icons";
export default function SideBar(props) {
  const { handleDisplayModal, data } = props;
  return (
    <div className="sidebar">
      <div onClick={handleDisplayModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data.title}</h2>
        <div className="desciptionContainer">
          <p>{data?.date}</p>
          <p>{data.explanation}</p>
          <button onClick={handleDisplayModal}>
            <ArrowRightCircle className="terugknop" />
          </button>
        </div>
      </div>
    </div>
  );
}
