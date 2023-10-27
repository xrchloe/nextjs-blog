import Button from "../../components/Button";
import Input from "../../components/Input";
import Icon from "../../components/Icon";

const Hero = () => {
  return (
    <section>
      <div className="max-w-xxx m-auto relative flex flex-col items-center py-28">
        <div className="bg-gray-800 rounded-full p-2 inline-flex items-center justify-center mb-10">
          <span className="text-md text-gray-950 leading-tight bg-green-500 px-3 py-1 font-bold rounded-full mr-2">
            New
          </span>
          <span className="v4-text">
            Rushable 4.0 is here{" "}
            <Icon name="angle-right" className="ml-2 inline-block w-4" />
          </span>
        </div>
        <h1 className="text-6xl max-w-4xl m-auto text-center mb-8">
          Power your restaurant with{" "}
          <span className="text-blue-700">enterprise-grade</span> marketing
        </h1>
        <p className=" max-w-xl m-auto text-center mb-10 text-lg">
          Take your restaurant to a whole new place. Where seamless delivery is
          prioritised, marketing automation realized, costs are minimised, and
          profits are maximised. All you have to do is cook.
        </p>
        <form className="flex flex-row space-x-3">
          <Input placeholder="Your email" />
          <Button rounded>Get the demo</Button>
        </form>

        <div className="absolute inset-0 w-full h-full">
          <Icon name="sharp-angle" className="absolute left-0 top-0" />
          <Icon
            name="sharp-angle"
            className="absolute right-0 top-0 rotate-90"
          />
          <Icon
            name="sharp-angle"
            className="absolute right-0 bottom-0 rotate-180"
          />
          <Icon
            name="sharp-angle"
            className="absolute left-0 bottom-0 -rotate-90"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
