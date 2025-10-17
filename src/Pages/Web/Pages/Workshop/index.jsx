import { Icon } from "@iconify/react";
import Headline from "../../../../components/public_components/headline";
import AiComing from "../../../../components/public_components/AiComing";

export default function Workshop() {
  return (
    <>
      <container>
        <Headline />
        <div className="w-full h-auto mt-6">
          <img src="/images/chart_workshop.png" alt="" />{" "}
        </div>
        <AiComing />
      </container>
    </>
  );
}