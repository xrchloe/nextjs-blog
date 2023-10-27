import CustomerLogo from "../../components/CustomerLogo";

const Customers = () => {
  return (
    <div className="max-w-xxx m-auto flex flex-col items-center space-y-20 pb-20">
      <h3 className="text-5xl max-w-[558px] text-center">
        Loved by thousands of restaurants
      </h3>
      <div className="flex items-center justify-center space-x-6">
        <CustomerLogo name="sapporo" />
        <CustomerLogo name="fuji" />
        <CustomerLogo name="uptown" />
        <CustomerLogo name="jellyfish" />
        <CustomerLogo name="sapporo" />
        <CustomerLogo name="qindynasty" />
        <CustomerLogo name="uptown" />
        <CustomerLogo name="jellyfish" />
      </div>
    </div>
  );
};

export default Customers;
