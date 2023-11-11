import { DotLoader } from "react-spinners";

export default function Loading() {
  return (
    <>
      <div>
        <div className=" z-1  position-fixed  bottom-50 end-50">
          <DotLoader color={"#000"} loading={Loading} size={100} />
        </div>
      </div>
    </>
  );
}
