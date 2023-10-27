import Button from "../../components/Button";
import Icon from "../../components/Icon";

export default function Ownership() {
  return (
    <section className="max-w-xxx m-auto grid grid-cols-2 items-center space-y-8 py-8">
      <div className="flex items-start ">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center mr-4 mt-5"
          style={{ backgroundColor: "#813aef" }}
        >
          <Icon name="global" width={19} height={19} />
        </div>
        <h4 className="text-5xl max-w-[488px] leading-snug">
          Own your online experience.
        </h4>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-lg text-gray-500 max-w-[476px]">
          Rushable brings together everything that’s required to stand out
          online.
        </p>
        <div className="flex flex-row items-center space-x-2">
          <Button rounded>Read more</Button>
          <p className="text-sm">Start building your website today</p>
        </div>
      </div>
    </section>
  );
}
