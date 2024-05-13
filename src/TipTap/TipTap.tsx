import CustomEditor from "../CustomEditor/CustomEditor";

function TipTap() {
  return (
    <div className="TipTap">
      Ajit POC
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0 0 80%" }}>
          <CustomEditor />
        </div>
        <div>
          <img
            alt="src"
            src="https://images.pexels.com/photos/145683/pexels-photo-145683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            style={{
              height: "100vh",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TipTap;
